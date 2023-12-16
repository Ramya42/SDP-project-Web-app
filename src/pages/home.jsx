import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to Our Home Page</h1>
        <p className="text-lg text-gray-700">
          We're dedicated to harnessing technology for the greater good, focusing on conservation and environmental protection.
        </p>
        <img
          src="/images/home/image.jpg"
          alt="Nature"
          className="mt-6 rounded-md shadow-md"
        />
      </div>
    </div>
  );
}

export default Home;
