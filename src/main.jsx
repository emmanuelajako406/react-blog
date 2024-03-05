import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Nav from './components/Navbar.jsx';
import './index.css';
import BlogDetails from './pages/BlogDetails.jsx';
import BlogLists from './pages/BlogLists.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
);
