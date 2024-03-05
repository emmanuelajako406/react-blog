import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Nav from './Navbar.jsx';
import './index.css';
import BlogDetails from './BlogDetails.jsx';
import BlogLists from './BlogLists.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BlogLists />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
