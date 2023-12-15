import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from './config';

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
        `${config.API_URL}/api/login`,
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
    
      window.location.reload();
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          {isRegistered && (
            <div className="bg-green-100 text-green-700 px-4 py-3 mb-6" role="alert">
              Registration successful! You can now log in with your credentials.
            </div>
          )}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 gap-y-6">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <input
                id="username"
                className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              {error.username && <div className="text-red-500 mt-1">{error.username[0]}</div>}
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                Email:
              </label>
              <input
                id="email"
                className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {error.email && <div className="text-red-500 mt-1">{error.email[0]}</div>}
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                Password:
              </label>
              <input
                id="password"
                className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {error.password && <div className="text-red-500 mt-1">{errors.password[0]}</div>}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-4"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            Already registered? <Link to="/" className="text-indigo-600 hover:underline">Log in here</Link>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
