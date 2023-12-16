import React, { useState } from 'react';
import config from '../config';
import axios from 'axios';

const InstitutionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    complaint: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    institution: '',
    complaint: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    if (formData.institution === '') {
      newErrors.institution = 'Select an option';
      valid = false;
    }
    if (formData.complaint.trim() === '') {
      newErrors.complaint = 'Complaint cannot be empty';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${config.API_ENDPOINT}/submit-form`, formData);
        console.log('Form submitted:', response.data);
        setFormData({
          name: '',
          email: '',
          institution: '',
          complaint: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Institution Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Select Institution</label>
            <select
              name="institution"
              id="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select an option</option>
              <option value="wildlife">Wildlife</option>
              <option value="forest">Forest</option>
            </select>
            {formErrors.institution && <p className="text-red-500 text-sm">{formErrors.institution}</p>}
          </div>
          <div>
            <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">Complaint</label>
            <textarea
              rows="6"
              name="complaint"
              id="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Type your complaint here"
              className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
            ></textarea>
            {formErrors.complaint && <p className="text-red-500 text-sm">{formErrors.complaint}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default InstitutionForm;
