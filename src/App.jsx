import './App.css';
import GeoMap from './components/geoMap/geoMap';
import Layout from './layout/layout';
import 'react-tooltip/dist/react-tooltip.css';
function App() {
  return (
    <Layout>
      <GeoMap />
    </Layout>
  );
}

export default App;
