import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/homenav';
import Home from './pages/home';
import Test from './pages/test';
import PagenotFound from './pages/error/pagenotfound';
import Login from './auth/login';
import Register from './auth/register';
import SearchResults from './pages/searchResults';
import AboutUs from './pages/aboutUs';
import Profile from './pages/profile';
import ContactUs from './pages/contactUs';
import Institutions from './pages/institutions';
import config from './config';

function AppRoutes() {
  const [isLogging, setIsLogging] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/check-token`);
        const data = await response.json();

        if (data.jwtToken === true) {
          setIsLogging(true);
        } else {
          setIsLogging(false);
        }
      } catch (error) {
        // setIsLogging(false);
        setIsLogging(true); // only for testing without backend
        console.error('Error checking token validity:', error);
      }
    };

    checkTokenValidity();
  }, []);

  return (
    <Router>
      {isLogging ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search-result" element={<SearchResults />} />
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
