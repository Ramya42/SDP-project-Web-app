import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';

const HomeNavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${config.API_ENDPOINT}/search`, { query: searchQuery });
      console.log('Search data:', response.data);
      navigate('/search-result');
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white font-bold text-3xl uppercase" onClick={() => navigateTo('/')}>
          Logo
        </Link>
        <button onClick={() => navigateTo('/')} className="text-white">
          Home
        </button>
        <button onClick={() => navigateTo('/institutions')} className="text-white">
          Institutions
        </button>
        <button onClick={() => navigateTo('/about-us')} className="text-white">
          About
        </button>
        <button onClick={() => navigateTo('/contact-us')} className="text-white">
          Contact us
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none mr-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out rounded-md bg-blue-500 py-2 px-4 text-sm font-semibold focus:outline-none"
            style={{ marginLeft: '8px' }}
          >
            Search
          </button>
        </form>

        <p style={{ color: 'white' }} onClick={() => navigateTo('/profile')}>
          Ramya
        </p>
        <img
          src="/images/auth/auth-1.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          onClick={() => navigateTo('/profile')}
        />
      </div>
    </nav>
  );
};

export default HomeNavBar;
