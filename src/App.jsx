import { useDispatch } from 'react-redux';
import './App.css';
import BotonBanderas from './components/botonBanderas/boton-banderas';
import Card from './components/card/flags_card';
import Layout from './layout/layout';
import { useEffect } from 'react';
import { thunks } from './redux/slice/trivia/thunks';
import AppRoutes from './routes/routes';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.fetchCountryNames()).then(() => {
      dispatch(thunks.fetchRandomCountries());
    });
  }, [dispatch]);

  return (
    <Layout>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
