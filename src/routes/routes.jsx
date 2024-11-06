import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GeoMap from '../components/geoMap/geoMap';
import TriviaPage from '../components/trivia/TriviaPage';

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add('background-trivia');
    } else {
      document.body.classList.remove('background-trivia');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<TriviaPage />} />
      <Route path="/mapa" element={<GeoMap />} />
    </Routes>
  );
};

export default AppRoutes;
