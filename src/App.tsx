import React, { useState, useEffect } from 'react';
import { Anchor, Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Calculate the transform based on scroll position
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
    transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)'
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Navbar - Completely Transparent */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img
            src="/companylogo.svg"
            alt="Black Hawk Marine Logo"
            className="h-12 w-auto filter invert"
          />
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition"
          >
            Call for Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-rib6.jpg"
            alt="Luxury RIB Boat"
            className="w-full h-full object-cover"
            style={parallaxStyle}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 tracking-tight font-futuristic">
                BLACK HAWK MARINE
              </h1>
              <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed font-tech">
                Gold Coast's leading specialists in Rigid Inflatable Boats. 
                Contact us now so we can Custom Build your new RIB.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#contact"
                  className="px-8 py-4 backdrop-blur-md bg-white/20 border border-gray-400/50 text-white rounded-lg hover:bg-white/30 transition flex items-center font-light"
                >
                  <Anchor className="h-5 w-5 mr-2" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Interested in learning more about our custom RIB boats? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="/companylogo.svg"
                alt="Black Hawk Marine Logo"
                className="h-12 w-auto filter invert"
              />
              <p className="mt-2 text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Black Hawk Marine. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-black transition">Home</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;