import React, { useState, useEffect } from 'react';
import config from '../config';
import axios from 'axios';

const SearchResults = () => {
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(config.API_URL);
        setSearchItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Search Results</h1>
      <div className="grid grid-cols-3 gap-4">
        {searchItems.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
