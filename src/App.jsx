import './App.css';
import Layout from './layout/layout';

import AppRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunks } from './redux/slice/trivia/thunks';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.fetchCountryNames()).then(() => {
      dispatch(thunks.fetchRandomCountries());
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
