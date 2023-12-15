import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate Email and Password
    if (!email) {
      setEmailError('Please enter your email.');
      return;
    }
    setEmailError('');

    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    }
    setPasswordError('');

    try {
      setError('');
      const response = await axios.post(
        'http://127.0.0.1:8000/api/login',
        { email, password },
      );
      const token = response.data.token;
      const username = response.data.username;
      const roleid = response.data.roleid;
      const userid = response.data.userid;
    
      localStorage.setItem('username', username);
      localStorage.setItem('roleid', roleid);
      localStorage.setItem('userid', userid);
    
      Cookies.set('jwt_token', token, { expires: 1 });
    
      if (roleid === "1") {
        navigate('/home');
      } else {
        navigate('/home');
      }
    
      window.location.reload();
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
    
  };

  return (
    <>
    <header className="bg-red-700 text-white py-4 text-center">
    <h1 className="text-3xl font-semibold">Bloodbank Login</h1>
  </header>
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
      Email:
    </label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="form-input w-full border rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline"
    />
    {emailError && <div className="text-red-500 text-xs mt-1">{emailError}</div>}
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
      Password:
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="form-input w-full border rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline"
    />
    {passwordError && <div className="text-red-500 text-xs mt-1">{passwordError}</div>}
  </div>
  <div className="flex items-center justify-between">
    <button
      type="submit"
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Login
    </button>
  </div>
</form>
<div className="mt-4 text-center">
  Need to create a new account? <Link to="/register" className="text-indigo-600 hover:underline">Register here</Link>.
</div>



      </div>
    </div>
    </>
  );
};

export default Login;
