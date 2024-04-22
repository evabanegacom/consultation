// src/components/ContactForm.tsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import EMAILJS_CONFIG from '../emailjs.-config';

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        {
          fullName,
          email,
          phone,
          request,
        },
        EMAILJS_CONFIG.userID
      );

      setSubmitSuccess(true);
      setIsSubmitting(false);
      // Reset form fields
      setFullName('');
      setEmail('');
      setPhone('');
      setRequest('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 focus:outline-none block w-full shadow-sm sm:text-sm rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 focus:outline-none block w-full shadow-sm sm:text-sm rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 border border-gray-300 focus:outline-none block w-full shadow-sm sm:text-sm rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="request" className="block text-sm font-medium text-gray-700">
            Business Legitimacy Request
          </label>
          <textarea
            id="request"
            name="request"
            rows={5}
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className="mt-1 p-2 border border-gray-300 focus:outline-none block w-full shadow-sm sm:text-sm rounded-md"
            required
          ></textarea>
        </div>
        <div className='mb-3 text-center'>
            <p className="text-sm text-gray-500">
                By submitting this form, you consent to having your submitted data stored on our servers to process your request.
            </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
              isSubmitting ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        {submitSuccess && (
          <p className="mt-4 text-green-600 text-center">Your request has been submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
