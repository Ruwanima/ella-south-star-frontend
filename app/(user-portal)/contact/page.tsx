'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import LandingHeader from '@/components/landing-header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '2',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      checkInDate: '',
      checkOutDate: '',
      guests: '2',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative h-80">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880732093-d19672b54ad7?w=1600')",
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-serif mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl">We&apos;d love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-6">
                <div className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+94 XXXXX XXXX</p>
                  <p className="text-gray-600">Call us / WhatsApp</p>
                  <p className="text-gray-600 text-sm mt-1">Daily - 7:00AM - 10:00PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6">
                <div className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Email</h3>
                  <p className="text-gray-600">info@ellasouthstar.com</p>
                  <p className="text-gray-600 text-sm mt-1">We reply within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-6">
                <div className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Location</h3>
                  <p className="text-gray-600">Ella Road, Ella 90090</p>
                  <p className="text-gray-600">Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-emerald-800 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Check-in and Check-out Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      placeholder="yyyy-mm-dd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      placeholder="yyyy-mm-dd"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Tell us about your plans or ask any questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Ella</h3>
              <p className="text-emerald-200 text-sm">
                Experience tranquility in the heart of Sri Lanka&apos;s beautiful hill country
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#facebook" className="hover:text-emerald-300 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#instagram" className="hover:text-emerald-300 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#linkedin" className="hover:text-emerald-300 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Category</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="#" className="hover:text-white transition">Hotel</a></li>
                <li><a href="#" className="hover:text-white transition">Packages</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/accommodations" className="hover:text-white transition">Accommodations</Link></li>
                <li><Link href="/booking" className="hover:text-white transition">Book Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-emerald-200 text-sm mb-2">+94 XXXXX XXXX</p>
              <p className="text-emerald-200 text-sm mb-2">info@ellasouthstar.com</p>
              <p className="text-emerald-200 text-sm">Ella Road, Ella 90090</p>
            </div>
          </div>

          <div className="border-t border-emerald-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-200">
              <p>&copy; 2025 Ella South Star. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
