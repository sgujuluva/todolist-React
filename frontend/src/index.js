import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextFun from './components/ContextFun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextFun>
    <App />
    </ContextFun>
  </React.StrictMode>
);


