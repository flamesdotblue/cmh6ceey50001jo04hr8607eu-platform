import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon, Gamepad2, Newspaper, Users, Trophy, Download } from 'lucide-react';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', to: '/', icon: HomeIcon },
  { key: 'modes', label: 'Modes', to: '/modes', icon: Gamepad2 },
  { key: 'esports', label: 'Esports', to: '/esports', icon: Trophy },
  { key: 'community', label: 'Community', to: '/community', icon: Users },
  { key: 'news', label: 'News', to: '/news', icon: Newspaper },
];

export default function Navbar() {
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef({});
  const [hoverKey, setHoverKey] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const activeKey = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path === '/' || path.startsWith('/home')) return 'home';
    const found = NAV_ITEMS.find(n => path.startsWith(n.to));
    return found ? found.key : 'home';
  }, [location.pathname]);

  const currentKey = hoverKey || activeKey;

  const setIndicatorToKey = (key) => {
    if (!containerRef.current || !indicatorRef.current) return;
    const el = itemRefs.current[key];
    if (!el) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    indicatorRef.current.style.transform = `translateX(${left}px)`;
    indicatorRef.current.style.width = `${rect.width}px`;
  };

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setIndicatorToKey(currentKey));
    const onResize = () => setIndicatorToKey(currentKey);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', onResize);
    };
  }, [currentKey, location.pathname]);

  const NavItem = ({ item }) => {
    const Icon = item.icon;
    return (
      <NavLink
        to={item.to}
        ref={(el) => (itemRefs.current[item.key] = el)}
        onMouseEnter={() => setHoverKey(item.key)}
        onMouseLeave={() => setHoverKey(null)}
        className={({ isActive }) => `relative inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}
      >
        <Icon className="h-4 w-4" />
        {item.label}
      </NavLink>
    );
  };

  const mobileItems = useMemo(() => (
    <div className="px-3 pb-3 pt-2 border-t border-white/10">
      <div className="grid gap-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 text-sm ${isActive ? 'bg-white text-black' : 'hover:bg-white/10 text-white/80'}`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/download"
          onClick={() => setMobileOpen(false)}
          className="mt-1 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black"
        >
          <Download className="h-4 w-4" /> Play Free
        </Link>
      </div>
    </div>
  ), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-white text-black grid place-items-center shadow">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-wide">PUBG // Solid</span>
        </Link>

        <div className="hidden md:block">
          <div ref={containerRef} className="relative">
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavItem key={item.key} item={item} />
              ))}
              <Link
                to="/download"
                className="ml-2 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black hover:brightness-95"
              >
                <Download className="h-4 w-4" /> Play Free
              </Link>
            </div>
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute bottom-0 h-[2px] rounded bg-white transition-all duration-300 ease-out"
              style={{ width: 0, transform: 'translateX(0px)' }}
            />
          </div>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white/90"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          {mobileItems}
        </div>
      )}
    </header>
  );
}
