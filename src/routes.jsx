import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/homenav';
import Home from './pages/home';
import Test from './pages/test';
import PagenotFound from './pages/error/pagenotfound';
import Login from './auth/login';
import Register from './auth/register';

function AppRoutes() {
  const [isLogging, setIsLogging] = useState(true);

  // useEffect(() => {
  //   const checkTokenValidity = async () => {
  //     try {
  //       // API call to check JWT token 
  //       const response = await YOUR_API_CHECK_METHOD();

  //       if (response.jwtToken === true) {
  //         setIsLogging(true);
  //       } else {
  //         setIsLogging(false);
  //       }
  //     } catch (error) {
  //       setIsLogging(false);
  //       console.error('Error checking token validity:', error);
  //     }
  //   };

  //   checkTokenValidity();
  // }, []);

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
