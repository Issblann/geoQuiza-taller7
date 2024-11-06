import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './layout/layout.jsx';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <h1>componentes</h1>
    </Layout>
  );
}

export default App;
