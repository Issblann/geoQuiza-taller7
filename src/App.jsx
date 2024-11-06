import './App.css';
import BotonBanderas from './components/botonBanderas/boton-banderas';
import Card from './components/card/flags_card';
import Layout from './layout/layout';

function App() {
  return (
    <Layout>
      <Card />
      <BotonBanderas />
    </Layout>
  );
}

export default App;
