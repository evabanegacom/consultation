// src/components/LandingPage.tsx

import React from 'react';
import ContactForm from './contact-form';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Business Legitimacy</span>
              <span className="block text-indigo-600">Consultation Services</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              We provide expert consultation to help you verify and confirm business legitimacy in Nigeria.
            </p>
          </div>
        </div>
      </main>

      {/* Contact Form Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Business Legitimacy Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
