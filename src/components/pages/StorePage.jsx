import React, { useMemo, useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

function ProductCard({ item, onAdd }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white text-black flex flex-col">
      <div className="aspect-video bg-gray-100 grid place-items-center text-black/40 text-sm">{item.title}</div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold">{item.title}</div>
        <div className="text-sm text-black/60">{item.category}</div>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="font-bold">${item.price.toFixed(2)}</div>
          <button onClick={() => onAdd(item)} className="rounded-md bg-black text-white px-3 py-1.5 text-xs font-semibold hover:opacity-90">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, items, onInc, onDec, onRemove, onCheckout }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/70 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-black border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="font-semibold inline-flex items-center gap-2"><ShoppingCart className="h-4 w-4"/> Cart</div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/20"><X className="h-5 w-5"/></button>
        </div>
        <div className="p-4 grid gap-3 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && <div className="text-sm text-white/60">Your cart is empty.</div>}
          {items.map((it) => (
            <div key={it.id} className="rounded-md border border-white/10 p-3 bg-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{it.title}</div>
                  <div className="text-xs text-white/60">${it.price.toFixed(2)}</div>
                </div>
                <button onClick={() => onRemove(it.id)} className="text-white/60 hover:text-white"><Trash2 className="h-4 w-4"/></button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <button onClick={() => onDec(it.id)} className="h-7 w-7 grid place-items-center rounded-md border border-white/15"> <Minus className="h-4 w-4"/> </button>
                  <span className="text-sm">{it.qty}</span>
                  <button onClick={() => onInc(it.id)} className="h-7 w-7 grid place-items-center rounded-md border border-white/15"> <Plus className="h-4 w-4"/> </button>
                </div>
                <div className="font-semibold text-sm">${(it.price * it.qty).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} disabled={!items.length} className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-semibold hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed">
            <CreditCard className="h-4 w-4"/> Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StorePage() {
  const products = useMemo(() => ([
    { id: 'tee-solid', title: 'Solid Logo Tee', category: 'Apparel', price: 24.99 },
    { id: 'hoodie-black', title: 'Black Hoodie', category: 'Apparel', price: 49.99 },
    { id: 'cap-classic', title: 'Classic Cap', category: 'Accessories', price: 19.99 },
    { id: 'mousepad-xl', title: 'XL Mousepad', category: 'Gear', price: 29.99 },
    { id: 'mug-logo', title: 'Logo Mug', category: 'Accessories', price: 14.99 },
    { id: 'sticker-pack', title: 'Sticker Pack', category: 'Accessories', price: 9.99 },
  ]), []);

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const ex = prev.find((p) => p.id === item.id);
      if (ex) return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  };

  const inc = (id) => setCart((prev) => prev.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  const dec = (id) => setCart((prev) => prev.map((p) => p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p));
  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const checkout = () => {
    alert('Checkout complete. Thank you!');
    setCart([]);
    setOpen(false);
  };

  return (
    <section className="relative py-10 sm:py-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Store</h1>
            <p className="mt-2 text-white/70">Buy official merchandise and gear. Solid design, premium feel.</p>
          </div>
          <button onClick={()=>setOpen(true)} className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"><ShoppingCart className="h-4 w-4"/> Open Cart ({cart.reduce((s,i)=>s+i.qty,0)})</button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} item={p} onAdd={addToCart} />
          ))}
        </div>
      </div>

      <CartDrawer open={open} onClose={()=>setOpen(false)} items={cart} onInc={inc} onDec={dec} onRemove={removeItem} onCheckout={checkout} />
    </section>
  );
}
