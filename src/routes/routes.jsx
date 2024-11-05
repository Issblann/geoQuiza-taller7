import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Trivia />} />
      <Route path="/mapa" element={<Mapa />} />
    </Routes>
  );
};

export default AppRoutes;