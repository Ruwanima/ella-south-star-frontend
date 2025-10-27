'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, DollarSign } from 'lucide-react';
import LandingHeader from '@/components/landing-header';

interface Package {
  id: string;
  name: string;
  description: string;
  image: string;
  guests: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  includes: string[];
}

export default function PackagesPage() {
  const packages: Package[] = [
    {
      id: 'room-only',
      name: 'Room Only',
      description: 'Comfortable family room with a private balcony, ideal for a casual getaway with natural views of Ella.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600',
      guests: 4,
      originalPrice: 45,
      discountedPrice: 35,
      discount: 22,
      includes: ['Room accommodation', 'WiFi', 'Room service'],
    },
    {
      id: 'bed-breakfast',
      name: 'Bed & Breakfast',
      description: 'Comfortable room with delicious breakfast included. Perfect for a morning start before exploring Ella.',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
      guests: 2,
      originalPrice: 60,
      discountedPrice: 50,
      discount: 17,
      includes: ['Room accommodation', 'Breakfast', 'WiFi', 'Room service'],
    },
    {
      id: 'half-board',
      name: 'Half Board',
      description: 'Comfortable family room with a private balcony, with breakfast and dinner included.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
      guests: 4,
      originalPrice: 80,
      discountedPrice: 53,
      discount: 34,
      includes: ['Room accommodation', 'Breakfast', 'Dinner', 'WiFi', 'Room service'],
    },
  ];

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
              "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600')",
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-serif mb-4">Packages</h1>
          <p className="text-xl max-w-2xl">Choose the perfect package for your stay at Ella South Star</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Link
                href={`/packages/${pkg.id}`}
                key={pkg.id}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full cursor-pointer">
                  {/* Package Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Package Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-emerald-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                    {/* Guests */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-emerald-100">
                      <Users className="w-5 h-5 text-emerald-700" />
                      <span className="text-sm text-gray-600">{pkg.guests} guests</span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-emerald-700">${pkg.discountedPrice}</span>
                        <span className="text-lg text-gray-400 line-through">${pkg.originalPrice}</span>
                        <span className="bg-emerald-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          SAVE {pkg.discount}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>

                    {/* Includes */}
                    <div className="mb-6 pb-6 border-b border-emerald-100">
                      <p className="text-xs text-gray-600 mb-2 font-semibold">INCLUDES:</p>
                      <ul className="space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                            <span className="text-emerald-700">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = `/packages/${pkg.id}`;
                        }}
                        className="bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition font-medium text-sm cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = `/packages/${pkg.id}`;
                        }}
                        className="bg-emerald-700 text-white py-2 rounded-md hover:bg-emerald-800 transition font-medium text-sm cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
