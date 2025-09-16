'use client';

import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-400 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to newsletter to receive exclusive offers and the latest news
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-grow px-6 py-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-white mt-6">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;