import { useDispatch } from 'react-redux';
import './App.css';
import BotonBanderas from './components/botonBanderas/boton-banderas';
import Layout from './layout/layout';
import { useEffect } from 'react';
import { thunks } from './redux/slice/trivia/thunks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.fetchCountryNames()).then(() => {
      dispatch(thunks.fetchRandomCountries());
    });
  }, [dispatch]);

  return (
    <Layout>
      <BotonBanderas />
    </Layout>
  );
}

export default App;
