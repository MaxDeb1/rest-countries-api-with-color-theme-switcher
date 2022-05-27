import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/index.scss';
import App from './components/App/App';
import Countries from './pages/Home/Countries';
import Country from './pages/Country/Country';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Countries />} />
        <Route path="country" element={<Country />} />
      </Route>
    </Routes>
  </Router>
);

