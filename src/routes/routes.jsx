import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GeoMap from '../components/geoMap/geoMap';
import TriviaPage from '../components/trivia/TriviaPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TriviaPage />} />
      <Route path="/mapa" element={<GeoMap />} />
    </Routes>
  );
};

export default AppRoutes;
