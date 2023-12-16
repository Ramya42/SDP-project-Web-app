import React, { useState } from 'react';
import config from '../config';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Please enter your name';
        }

        if (!formData.email || !validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Please enter your phone number';
        }

        if (!formData.message) {
            newErrors.message = 'Please enter your message';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            try {
                const response = await axios.post(`${config.API_ENDPOINT}/submit-form`, formData);
                console.log('Form submitted:', response.data);
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <div className="border rounded-lg shadow-md px-8 py-6">
                    <h2 className="text-3xl font-bold mb-6 text-center text-[#07074D]">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                            {errors.name && <p className="text-red-500 text-sm"><b>{errors.name}</b></p>}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                            {errors.email && <p className="text-red-500 text-sm"><b>{errors.email}</b></p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phoneNumber" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm"><b>{errors.phoneNumber}</b></p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm"><b>{errors.message}</b></p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
