import ReactDOM from 'react-dom/client'
import React from "react";
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<App/>);
root.render(
  <BrowserRouter basename="/My-Website">
    <App />
  </BrowserRouter>
);