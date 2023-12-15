import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const navigator = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors on each submission attempt

    let validationErrors = {};

    // Validation for 'name'
    if (name.trim() === '') {
      validationErrors.name = ['Name is required'];
    }

    // Validation for 'email'
    if (email.trim() === '') {
      validationErrors.email = ['Email is required'];
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = ['Invalid email format'];
    }

    // Validation for 'password'
    if (password.trim() === '') {
      validationErrors.password = ['Password is required'];
    } else if (password.length < 6) {
      validationErrors.password = ['Password must be at least 6 characters long'];
    }

    // Validation for 'gender'
    if (gender === '') {
      validationErrors.gender = ['Gender is required'];
    }

    // Validation for 'dateOfBirth'
    if (dateOfBirth === '') {
      validationErrors.dateOfBirth = ['Date of Birth is required'];
    }

    // Validation for 'address'
    if (address.trim() === '') {
      validationErrors.address = ['Address is required'];
    }

    // Validation for 'phone'
    if (phone.trim() === '') {
      validationErrors.phone = ['Contact Number is required'];
    }

    // Validation for 'bloodType'
    if (bloodType === '') {
      validationErrors.bloodType = ['Blood Type is required'];
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        email,
        password,
        gender,
        dateOfBirth,
        address,
        phone,
        bloodType,
        role_id: "1",
      });

      console.log('User registered:', response.data.success);
      setIsRegistered(true); // Set the success state to true
      // Navigate to the login page after successful registration
      navigator('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrors(error.response.data.error);
      } else {
        console.error('An error occurred during registration:', error);
      }
    }
  };

  // If successfully registered, redirect to login page
  if (isRegistered) {
    return <Link to="/success" />;
  }

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Bloodbank Register</h2>
        {isRegistered && (
          <div className="bg-green-100 text-green-700 px-4 py-3 mb-6" role="alert">
            Registration successful! You can now log in with your credentials.
          </div>
        )}
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-2xl" onSubmit={handleRegister}>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              id="name"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            {errors.name && <div className="text-red-500 mt-1">{errors.name[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
            {errors.email && <div className="text-red-500 mt-1">{errors.email[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
            {errors.password && <div className="text-red-500 mt-1">{errors.password[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
              Gender:
            </label>
            <select
              id="gender"
              className="form-select w-full border rounded-md py-2 px-4 bg-white text-gray-900 focus:outline-none focus:shadow-outline"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="text-red-500 mt-1">{errors.gender[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth:
            </label>
            <input
              id="dateOfBirth"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            {errors.dateOfBirth && <div className="text-red-500 mt-1">{errors.dateOfBirth[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
              Address:
            </label>
            <input
              id="address"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <div className="text-red-500 mt-1">{errors.address[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Contact Number:
            </label>
            <input
              id="phone"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <div className="text-red-500 mt-1">{errors.phone[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="bloodType" className="block text-gray-700 text-sm font-bold mb-2">
              Blood Type:
            </label>
            <select
              id="bloodType"
              className="form-select w-full border rounded-md py-2 px-4 bg-white text-gray-900 focus:outline-none focus:shadow-outline"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="" disabled hidden>
                Select Blood Type
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodType && <div className="text-red-500 mt-1">{errors.bloodType[0]}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-4"
          >
            Register
          </button>
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
