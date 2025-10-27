'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Users, Zap } from 'lucide-react';
import LandingHeader from '@/components/landing-header';

interface Vehicle {
  id: string;
  name: string;
  type: string;
  price: number;
  priceUnit: string;
  image: string;
  description: string;
  features: string[];
  imagePosition?: 'left' | 'right';
}

export default function VehiclesPage() {
  const vehicles: Vehicle[] = [
    {
      id: 'tvs-125',
      name: '125cc TVS',
      type: 'Two-wheeler',
      price: 1000,
      priceUnit: 'Rs. 1,000 per day',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      description:
        'Explore Ella with our reliable and affordable 125cc TVS. Perfect for solo travelers or couples looking to discover scenic routes and hidden attractions. Fuel efficient and easy to ride.',
      features: [
        'Fuel efficient',
        'Easy to maneuver',
        'Comfortable seating',
        'Reliable performance',
      ],
      imagePosition: 'right',
    },
    {
      id: 'tvs-hunk-125',
      name: 'TVS Ntorq 125',
      type: 'Two-wheeler',
      price: 1500,
      priceUnit: 'Rs. 1,500 per day',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600',
      description:
        'Experience style and comfort with our TVS Ntorq 125. A sporty two-wheeler designed for comfort and performance. Perfect for exploring Ella\'s winding roads and enjoying the scenic beauty.',
      features: [
        'Sporty design',
        'Advanced features',
        'Comfortable ride',
        'Great for sightseeing',
      ],
      imagePosition: 'left',
    },
    {
      id: 'tvs-ntorq',
      name: 'TVS Ntorq 125',
      type: 'Two-wheeler',
      price: 1800,
      priceUnit: 'Rs. 1,800 per day',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600',
      description:
        'A premium two-wheeler option featuring advanced technology and superior comfort. Ideal for travelers who want a blend of style, performance, and reliability. Experience Ella in style.',
      features: [
        'Premium comfort',
        'Advanced technology',
        'Excellent performance',
        'Stylish appearance',
      ],
      imagePosition: 'right',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600')",
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Rent a Vehicle</h2>
          <p className="text-xl max-w-2xl">
            Explore Ella at your own pace with our reliable vehicle rental service
          </p>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.id}>
                {/* Vehicle Card */}
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  {/* Left Column - Image or Text */}
                  {vehicle.imagePosition === 'left' ? (
                    <>
                      {/* Image - Left */}
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content - Right */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-serif text-emerald-800 mb-2">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-600 text-sm font-medium">{vehicle.type}</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">
                          {vehicle.description}
                        </p>

                        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6">
                          <p className="text-gray-600 text-sm mb-3 font-semibold">FEATURES:</p>
                          <ul className="space-y-2">
                            {vehicle.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700"
                              >
                                <span className="text-emerald-700 text-lg">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-gray-600 text-sm">Price per day</p>
                            <p className="text-2xl font-bold text-emerald-700">
                              {vehicle.priceUnit}
                            </p>
                          </div>
                          <Link
                            href={`/booking?vehicle=${vehicle.id}`}
                            className="ml-auto bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition font-semibold"
                          >
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content - Left */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-serif text-emerald-800 mb-2">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-600 text-sm font-medium">{vehicle.type}</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">
                          {vehicle.description}
                        </p>

                        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6">
                          <p className="text-gray-600 text-sm mb-3 font-semibold">FEATURES:</p>
                          <ul className="space-y-2">
                            {vehicle.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700"
                              >
                                <span className="text-emerald-700 text-lg">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-gray-600 text-sm">Price per day</p>
                            <p className="text-2xl font-bold text-emerald-700">
                              {vehicle.priceUnit}
                            </p>
                          </div>
                          <Link
                            href={`/booking?vehicle=${vehicle.id}`}
                            className="ml-auto bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition font-semibold"
                          >
                            Rent Now
                          </Link>
                        </div>
                      </div>

                      {/* Image - Right */}
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Divider */}
                {index < vehicles.length - 1 && (
                  <div className="my-16 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-emerald-800 mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Select a Vehicle</h3>
              <p className="text-gray-600 text-sm">
                Browse through our range of scooters and choose the one that suits your needs
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Book Online</h3>
              <p className="text-gray-600 text-sm">
                Reserve your vehicle online in just a few clicks. Easy and hassle-free.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Pick Up</h3>
              <p className="text-gray-600 text-sm">
                Pick up your vehicle from our convenient location next to the hotel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-serif mb-4">Ella</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Your gateway to exploring Ella with our reliable vehicle rental services.
                Travel at your own pace and discover hidden gems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>
                  <Link href="/landingpage" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/accommodations" className="hover:text-white transition">
                    Accommodations
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="hover:text-white transition">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="/vehicles" className="hover:text-white transition">
                    Vehicles
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <ul className="space-y-3 text-sm text-emerald-200">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>Ella Road, Ella 90090, Sri Lanka</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+94XXXXXXXX" className="hover:text-white transition">
                    +94 XX XXX XXXX
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:info@ellasouthstar.com" className="hover:text-white transition">
                    info@ellasouthstar.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Rental Info */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Rental Info</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>
                  <span className="block font-semibold">Operating Hours</span>
                  <span>Daily - 7:00 AM to 8:00 PM</span>
                </li>
                <li>
                  <span className="block font-semibold mt-3">Requirements</span>
                  <span>Valid ID & Helmet mandatory</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-200">
              <p>&copy; 2025 Ella South Star. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
