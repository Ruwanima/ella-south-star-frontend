'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Users, Bed, Star } from 'lucide-react';
import LandingHeader from '@/components/landing-header';

interface Room {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  guests: number;
  beds: number;
  rating: number;
  reviews: number;
}

export default function AccommodationsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const rooms: Room[] = [
    {
      id: 'family-balcony',
      title: 'Family Room with Balcony',
      description: 'Spacious family room with scenic mountain view and private balcony',
      price: 75,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
      guests: 4,
      beds: 2,
      rating: 4.8,
      reviews: 145,
    },
    {
      id: 'family-mountain',
      title: 'Family Room with Mountain View',
      description: 'Luxurious family room with stunning mountain landscape vistas',
      price: 85,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
      guests: 4,
      beds: 2,
      rating: 4.9,
      reviews: 128,
    },
    {
      id: 'triple-balcony',
      title: 'Triple Room with Balcony',
      description: 'Comfortable triple room perfect for small groups with balcony access',
      price: 65,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600',
      guests: 3,
      beds: 1,
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 'deluxe-suite',
      title: 'Deluxe Family Suite',
      description: 'Premium suite with separate living area and luxury amenities',
      price: 120,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
      guests: 5,
      beds: 2,
      rating: 5.0,
      reviews: 156,
    },
    {
      id: 'front-ella-rock',
      title: 'Front Ella Rock Double',
      description: 'Intimate double room with front view of iconic Ella rock formation',
      price: 95,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600',
      guests: 2,
      beds: 1,
      rating: 4.9,
      reviews: 167,
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
              "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600')",
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Accommodations</h2>
          <p className="text-xl max-w-2xl">
            Choose from our carefully curated selection of comfortable rooms and suites
          </p>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Link
                href={`/accommodations/${room.id}`}
                key={room.id}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full">
                  {/* Room Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ${room.price}/night
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2 text-emerald-800">{room.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{room.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(room.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {room.rating} ({room.reviews} reviews)
                      </span>
                    </div>

                    {/* Room Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-emerald-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-700" />
                        <span className="text-sm text-gray-600">{room.guests} guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-emerald-700" />
                        <span className="text-sm text-gray-600">{room.beds} bed(s)</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = `/accommodations/${room.id}`;
                        }}
                        className="flex-1 bg-emerald-700 text-white py-2 rounded-md hover:bg-emerald-800 transition font-medium cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.location.href = '/booking';
                        }}
                        className="flex-1 border-2 border-emerald-700 text-emerald-700 py-2 rounded-md hover:bg-emerald-50 transition font-medium text-center cursor-pointer"
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12 text-emerald-800">
            Why Choose Our Rooms?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                Scenic Location
              </h3>
              <p className="text-gray-600">
                Nestled in the heart of Ella with breathtaking mountain and valley views
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                Premium Comfort
              </h3>
              <p className="text-gray-600">
                Modern amenities, premium bedding, and personalized service in every room
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                Best Value
              </h3>
              <p className="text-gray-600">
                Competitive rates with exceptional value and exclusive amenities included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-emerald-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-serif mb-4">Ready to Book Your Stay?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Reserve your perfect room today and experience the beauty of Ella South Star
          </p>
          <button className="bg-white text-emerald-700 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold text-lg">
            Book Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Ella</h3>
              <p className="text-emerald-200 text-sm">
                Your gateway to tranquility in Sri Lanka&apos;s beautiful hill country
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><a href="#accommodations" className="hover:text-white transition">Accommodations</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-emerald-200 text-sm">+94 XX XXX XXXX</p>
              <p className="text-emerald-200 text-sm">info@ellasouthstar.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <p className="text-emerald-200 text-sm">
                Ella Road, Ella 90090<br />Sri Lanka
              </p>
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
