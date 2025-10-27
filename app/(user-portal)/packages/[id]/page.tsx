'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import LandingHeader from '@/components/landing-header';

interface PackageDetail {
  id: string;
  name: string;
  image: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  includes: string[];
  duration: string;
  checkInTime: string;
  checkOutTime: string;
}

const packageDetails: Record<string, PackageDetail> = {
  'room-only': {
    id: 'room-only',
    name: 'Room Only',
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=900',
    description: 'Comfortable family room with a private balcony, ideal for a casual getaway with natural views of Ella.',
    originalPrice: 45,
    discountedPrice: 35,
    discount: 22,
    includes: [
      'Mountain View',
      'Balcony',
      'Free WiFi',
      'Ensuite Bathroom',
      'Garden View',
    ],
    duration: '1 Night',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
  },
  'bed-breakfast': {
    id: 'bed-breakfast',
    name: 'Bed & Breakfast',
    image: 'https://images.unsplash.com/photo-1555521760-cb7bbe6a187a?w=900',
    description: 'Comfortable room with delicious breakfast included. Perfect for a morning start before exploring Ella.',
    originalPrice: 60,
    discountedPrice: 50,
    discount: 17,
    includes: [
      'Room Accommodation',
      'Complimentary Breakfast',
      'Free WiFi',
      'Room Service',
      'Premium Bedding',
    ],
    duration: '1 Night',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
  },
  'half-board': {
    id: 'half-board',
    name: 'Half Board',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900',
    description: 'Comfortable family room with a private balcony, with breakfast and dinner included.',
    originalPrice: 80,
    discountedPrice: 53,
    discount: 34,
    includes: [
      'Room Accommodation',
      'Breakfast & Dinner',
      'Free WiFi',
      'Room Service',
      'TV with Cable',
    ],
    duration: '1 Night',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
  },
};

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = params.id as string;
  const pkg = packageDetails[packageId];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    expiryMonth: '',
    expiryYear: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
    alert(`Payment of $${pkg?.discountedPrice} processed successfully!`);
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-emerald-800 mb-4">Package Not Found</h1>
          <Link href="/packages" className="bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LandingHeader />

      {/* Package Details */}
      <section className="relative h-96">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
        />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Package Info */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-serif text-emerald-800 mb-4">{pkg.name}</h1>
            <p className="text-gray-600 text-lg mb-8">{pkg.description}</p>

            {/* What's Included */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-emerald-800 mb-6">What&apos;s Included:</h2>
              <ul className="space-y-3">
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-emerald-700 text-xl">◎</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Package Details */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 text-sm mb-2">Duration</p>
                <p className="text-lg font-semibold text-emerald-800">{pkg.duration}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 text-sm mb-2">Check-in</p>
                <p className="text-lg font-semibold text-emerald-800">{pkg.checkInTime}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 text-sm mb-2">Check-out</p>
                <p className="text-lg font-semibold text-emerald-800">{pkg.checkOutTime}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="md:col-span-1">
            <div className="bg-emerald-50 rounded-lg p-8 sticky top-24">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
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
                    className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                    placeholder="Enter your phone"
                  />
                </div>

                {/* Check-in and Check-out */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Divider */}
                <div className="border-t border-emerald-200 pt-4 mt-4">
                  <h3 className="font-semibold text-emerald-800 mb-4">Make a Payment</h3>

                  {/* Expiry Date */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Month</label>
                      <select
                        name="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-sm"
                      >
                        <option value="">MM</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Security Code</label>
                      <select
                        name="expiryYear"
                        value={formData.expiryYear}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-sm"
                      >
                        <option value="">YY</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                      </select>
                    </div>
                  </div>

                  {/* Total Due */}
                  <div className="bg-white p-4 rounded-md mb-4 border border-emerald-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Total Due:</span>
                      <span className="text-2xl font-bold text-emerald-700">${pkg.discountedPrice}.67</span>
                    </div>
                  </div>

                  {/* Pay Button */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition font-semibold text-lg"
                  >
                    Pay ${pkg.discountedPrice}.67
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Ella</h3>
              <p className="text-emerald-200 text-sm">
                Experience tranquility in the heart of Sri Lanka&apos;s beautiful hill country
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Category</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><Link href="/accommodations" className="hover:text-white transition">Hotel</Link></li>
                <li><Link href="/packages" className="hover:text-white transition">Packages</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
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

          <div className="border-t border-emerald-800 pt-8 text-center text-emerald-200 text-sm">
            <p>&copy; 2025 Ella South Star. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
