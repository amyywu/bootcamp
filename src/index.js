import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import MyNav from './components/MyNav'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="expenses" element={<MyNav />} />
      <Route path="invoices" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
