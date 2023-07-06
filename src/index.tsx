import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import GejmingKorner from './pages/GejmingKorner';
import Novosti from './pages/Novosti';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter> 
     <GejmingKorner />
     </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
