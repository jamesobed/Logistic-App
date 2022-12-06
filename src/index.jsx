import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import BaseRoute from './routes/BaseRoute';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route path="/*" element={<BaseRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
