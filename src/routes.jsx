import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Test from './pages/test';
import PagenotFound from './'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test/>} />
        <Route path="*" element={<PagenotFound/>} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
