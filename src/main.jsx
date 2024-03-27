// Fichero src/main.jsx, fichero principal desde el que arrancamos el proyecto de React
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
