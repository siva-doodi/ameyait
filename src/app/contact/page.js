'use client';
import { useState } from 'react';
import Text from '../components/common/Text'
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-16 bg-primary-bg mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-gray-50 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary-text mb-4">Get in Touch</h2>
              <Text variant='p'>
                We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, our team is ready to help.
              </Text>
              <ul className="space-y-3 text-gray-700 mt-6">
                <li>📍 123 Main Street, Hyderabad, India</li>
                <li>📧 contact@example.com</li>
                <li>📞 +91 98765 43210</li>
              </ul>
            </div>

            {/* Right side - Form */}
            <div className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b72960]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b72960]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b72960]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#b72960] hover:bg-[#a21c4b] text-white py-3 rounded-lg font-semibold shadow-md cursor-pointer transition-transform transform hover:scale-105"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
