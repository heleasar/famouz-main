import React from 'react';
import { Phone, MapPin, Mail, Star, Menu } from 'lucide-react';

function App() {
  const services = [
    {
      title: "Impound Services",
      image: "assets/car.jpg",
      description: "Professional impound services for all vehicle types"
    },
    {
      title: "Toolbox Services",
      image: "assets/toolbox.jpg",
      description: "Complete toolbox and equipment transportation"
    },
    {
      title: "Low Clearance",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      description: "Specialized service for low clearance vehicles"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="assets/logo.png" 
                 alt="Logo" 
                 className="w-12 h-12 rounded-full" />
            <span className="text-xl font-bold">Next Tow</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <Menu className="md:hidden" />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1617038220319-4ec2d5a16c05?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-50"
            alt="Hero background" 
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              All Houston Towing Service
            </h1>
            <p className="text-xl mb-8">
              Located in Pasadena/South Houston area. Available 24/7 for all your towing needs.
            </p>
            <div className="flex gap-4">
              <a href="tel:+18328002131" 
                 className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg flex items-center gap-2 transition">
                <Phone size={20} />
                Call Now
              </a>
              <a href="#services" 
                 className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-xl mb-8">
              "Next Tow & Recovery LLC stands out in the industry for its exceptional reliability,
              speed, and customer care. Their team is committed to providing safe, reliable, and
              affordable towing solutions for any situation."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                alt="Customer"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <p className="font-bold">Hugo Benavides</p>
                <p className="text-gray-400">Founder of Famous Towing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                <p className="font-bold mb-2">Phone</p>
                <a href="tel:+18328002131" className="text-gray-400 hover:text-cyan-400">
                  (832) 800-2131
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                <p className="font-bold mb-2">Address</p>
                <p className="text-gray-400">
                  4415 Shaver St, Pasadena, TX USA
                </p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                <p className="font-bold mb-2">Email</p>
                <a href="mailto:kevinvaladez@gmail.com" className="text-gray-400 hover:text-cyan-400">
                  hugobenaviides21@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Famouz Co. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-cyan-400 transition">Home</a>
              <a href="#services" className="hover:text-cyan-400 transition">Services</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;