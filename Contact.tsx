import React from 'react';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch for bookings, collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-purple-900/20 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-900/40 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-900/40 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-purple-900/20 rounded-full hover:bg-purple-900/40 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Management</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-400" />
                  booking@harmonicfusion.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
