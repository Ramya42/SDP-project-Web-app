import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/homenav';
import Home from './pages/home';
import Test from './pages/test';
import PagenotFound from './pages/error/pagenotfound';
import Login from './pages/login';
import Register from './pages/register';

function AppRoutes() {

  [isLoggin, setIsLoggin] = useState('False');



  const isLogging = true;

  return (
    <Router>
      {isLogging ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<PagenotFound />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Router>
  );
}

export default AppRoutes;
