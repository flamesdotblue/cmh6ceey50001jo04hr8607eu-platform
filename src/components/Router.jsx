import React, { useEffect, useMemo, useState } from 'react';
import HomePage from './pages/HomePage';
import ModesPage from './pages/ModesPage';
import EsportsPage from './pages/EsportsPage';
import CommunityPage from './pages/CommunityPage';
import NewsPage from './pages/NewsPage';
import SeasonsPage from './pages/SeasonsPage';
import DownloadPage from './pages/DownloadPage';

export const navigateTo = (route) => {
  const path = route.startsWith('#') ? route : `#/${route}`;
  if (window.location.hash === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.location.hash = path;
  }
};

const getRoute = () => {
  const hash = window.location.hash.replace('#', '').trim();
  const clean = hash.startsWith('/') ? hash.slice(1) : hash;
  const [path] = clean.split('?');
  return path || '';
};

export default function Router() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const Page = useMemo(() => {
    switch (route) {
      case 'modes':
        return <ModesPage />;
      case 'esports':
        return <EsportsPage />;
      case 'community':
        return <CommunityPage />;
      case 'news':
        return <NewsPage />;
      case 'seasons':
        return <SeasonsPage />;
      case 'download':
        return <DownloadPage />;
      case '':
      default:
        return <HomePage />;
    }
  }, [route]);

  return <>{Page}</>;
}
