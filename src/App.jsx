import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/App.css';
import AppRoutes from './routes/routes.jsx';

function App() {
  const [count, setCount] = useState(0)
  return <AppRoutes />;
}

export default App;
