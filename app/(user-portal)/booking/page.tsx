'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Users, Calendar, Utensils, Wifi, MapPin as MapPinIcon, Car, Home, Plane } from 'lucide-react';
import LandingHeader from '@/components/landing-header';

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    alert('Booking enquiry submitted! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section with Booking Form */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600')",
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Booking Card */}
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-2 text-emerald-800">Booking</h1>
            <p className="text-gray-600 mb-8">Find the best choice to make your stay more comfortable</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Check-in and Check-out Row */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Check-in Date */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Check In Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Check-out Date */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Check out date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              {/* No. of Guests */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">No. of guests</label>
                <select
                  name="guests"
                  value={bookingData.guests}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6+ Guests</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-md transition duration-300 text-lg"
              >
                BOOK NOW / ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Room Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-emerald-800">Room Facilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">WiFi Internet</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Delicious Breakfast</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Parking Available</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Hot Water Supply</h3>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Air-Conditioning</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">24/7 Room Service</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Premium Bed Linen</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm">◆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Smart TV</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto text-center">
            {/* Corporate Office */}
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Corporate Office</h3>
              <p className="text-sm text-gray-600">Ella Road, Ella 90090</p>
              <p className="text-sm text-gray-600">Sri Lanka</p>
            </div>

            {/* Call To Schedule */}
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Call To Schedule</h3>
              <p className="text-sm text-gray-600">+94 XX XXX XXXX</p>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </div>

            {/* Send Us An Email */}
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Send Us An Email</h3>
              <p className="text-sm text-gray-600">info@ellasouthstar.com</p>
              <p className="text-sm text-gray-600">We reply within 24 hours</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-emerald-800">Services</h2>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              {/* Delicious Breakfast */}
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-800">Delicious Breakfast</h3>
              </div>

              {/* 24 Hour Parking */}
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-800">24 Hour Parking</h3>
              </div>

              {/* Free Transport */}
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-800">Free Transport</h3>
              </div>

              {/* WiFi Internet */}
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-800">WiFi Internet</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
