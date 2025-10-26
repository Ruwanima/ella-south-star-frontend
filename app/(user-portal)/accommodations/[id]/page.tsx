'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Bath,
  Wifi,
  Tv,
  Coffee,
  Utensils,
  Wind,
  Droplet,
  Package,
  Clock,
  Star,
  ChevronLeft,
} from 'lucide-react';
import LandingHeader from '@/components/landing-header';

interface RoomData {
  id: string;
  title: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  guests: number;
  beds: number;
  bathrooms: number;
  sqft: number;
  rating: number;
  reviews: number;
  amenities: string[];
  facilities: {
    bathAndPersonalCare: string[];
    mediaAndEntertainment: string[];
    other: string[];
  };
}

const roomsData: Record<string, RoomData> = {
  'family-balcony': {
    id: 'family-balcony',
    title: 'Family Room with Balcony',
    price: 75,
    description: 'Spacious family room with scenic mountain view and private balcony',
    fullDescription:
      'Experience comfort and elegance in our Family Room with Balcony. This spacious room features a private balcony overlooking the stunning mountain landscape of Ella. Perfect for families or small groups looking for a memorable stay with all modern amenities.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800',
    ],
    guests: 4,
    beds: 2,
    bathrooms: 1,
    sqft: 350,
    rating: 4.8,
    reviews: 145,
    amenities: ['Private Balcony', 'Mountain View', 'Air Conditioning', 'Free WiFi', 'Hot Water'],
    facilities: {
      bathAndPersonalCare: [
        'Rainfall Showerhead',
        'Premium Bath Towels',
        'Complimentary Toiletries',
        'Hair Dryer',
      ],
      mediaAndEntertainment: [
        'LED TV with Cable',
        'High-speed Internet Access',
        'Bluetooth Speaker',
      ],
      other: ['Work Desk', 'Minibar', 'Safe Box', 'Room Service'],
    },
  },
  'family-mountain': {
    id: 'family-mountain',
    title: 'Family Room with Mountain View',
    price: 85,
    description: 'Luxurious family room with stunning mountain landscape vistas',
    fullDescription:
      'Indulge in luxury with our Family Room featuring panoramic mountain views. This room offers the perfect blend of comfort and nature, with floor-to-ceiling windows showcasing the breathtaking landscapes of Ella. An ideal choice for guests seeking tranquility and natural beauty.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800',
      'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800',
    ],
    guests: 4,
    beds: 2,
    bathrooms: 1,
    sqft: 380,
    rating: 4.9,
    reviews: 128,
    amenities: [
      'Panoramic Views',
      'Mountain Landscape',
      'Air Conditioning',
      'Free WiFi',
      'Complimentary Breakfast',
    ],
    facilities: {
      bathAndPersonalCare: [
        'Rainfall Showerhead',
        'Premium Bath Towels',
        'Complimentary Toiletries',
        'Hair Dryer',
      ],
      mediaAndEntertainment: [
        'Smart TV with Streaming',
        'High-speed Internet',
        'Sound System',
      ],
      other: ['Work Desk', 'Mini Fridge', 'Safe Box', 'Concierge Service'],
    },
  },
  'triple-balcony': {
    id: 'triple-balcony',
    title: 'Triple Room with Balcony',
    price: 65,
    description: 'Comfortable triple room perfect for small groups with balcony access',
    fullDescription:
      'Perfect for small groups or travelers seeking additional space, our Triple Room with Balcony offers comfort and convenience. With a private balcony and comfortable bedding arrangement, this room provides excellent value without compromising on quality and amenities.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
      'https://images.unsplash.com/photo-1598928506242-824f4f059010?w=800',
    ],
    guests: 3,
    beds: 1,
    bathrooms: 1,
    sqft: 300,
    rating: 4.7,
    reviews: 98,
    amenities: ['Balcony Access', 'Valley View', 'Air Conditioning', 'WiFi', 'Desk Area'],
    facilities: {
      bathAndPersonalCare: [
        'Shower with Glass Enclosure',
        'Quality Towels',
        'Toiletries',
        'Mirror',
      ],
      mediaAndEntertainment: [
        'LED TV',
        'Internet Connection',
        'USB Charging Ports',
      ],
      other: ['Writing Desk', 'Wardrobe', 'Safe Locker', 'Room Service'],
    },
  },
  'deluxe-suite': {
    id: 'deluxe-suite',
    title: 'Deluxe Family Suite',
    price: 120,
    description: 'Premium suite with separate living area and luxury amenities',
    fullDescription:
      'Our flagship Deluxe Family Suite offers unparalleled luxury with a separate living area, elegant furnishings, and premium amenities. Perfect for those seeking the ultimate comfort experience with extra space to relax and unwind in style.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800',
    ],
    guests: 5,
    beds: 2,
    bathrooms: 2,
    sqft: 550,
    rating: 5.0,
    reviews: 156,
    amenities: [
      'Separate Living Area',
      'Private Bathroom',
      'Premium Bedding',
      'WiFi',
      'Butler Service',
    ],
    facilities: {
      bathAndPersonalCare: [
        'Luxury Bathroom',
        'Premium Toiletries',
        'Bathrobes',
        'Hair Dryer',
      ],
      mediaAndEntertainment: [
        '55-inch Smart TV',
        'Home Theater System',
        'High-speed WiFi',
      ],
      other: ['Executive Desk', 'Mini Bar', 'Safe Deposit', 'Concierge 24/7'],
    },
  },
  'front-ella-rock': {
    id: 'front-ella-rock',
    title: 'Front Ella Rock Double',
    price: 95,
    description: 'Intimate double room with front view of iconic Ella rock formation',
    fullDescription:
      'Wake up to the iconic view of Ella Rock in this intimate double room. Featuring a front-facing window with one of the most spectacular views in Ella, this room offers a unique and memorable experience combining comfort with natural beauty.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
      'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800',
      'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800',
    ],
    guests: 2,
    beds: 1,
    bathrooms: 1,
    sqft: 280,
    rating: 4.9,
    reviews: 167,
    amenities: ['Ella Rock View', 'Double Bed', 'Private Bathroom', 'WiFi', 'Work Station'],
    facilities: {
      bathAndPersonalCare: [
        'Ensuite Bathroom',
        'Premium Toiletries',
        'Quality Towels',
        'Hair Dryer',
      ],
      mediaAndEntertainment: [
        '40-inch LED TV',
        'Streaming Services',
        'High-speed WiFi',
      ],
      other: ['Study Desk', 'Mini Fridge', 'Safe Box', 'Room Service'],
    },
  },
};

export default function RoomDetailPage() {
  const params = useParams();
  const roomId = params.id as string;
  const room = roomsData[roomId];

  if (!room) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-emerald-800 mb-4">Room Not Found</h1>
          <p className="text-gray-600 mb-6">The room you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/accommodations" className="bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
            Back to Accommodations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LandingHeader />

      {/* Image Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={room.image}
              alt={room.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {room.images.slice(1).map((img, idx) => (
            <div key={idx} className="relative h-44 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={`Room ${idx + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Room Title and Basic Info */}
      <section className="max-w-6xl mx-auto px-6 py-8 border-b border-emerald-100">
        <h1 className="text-4xl font-serif text-emerald-800 mb-4">{room.title}</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(room.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-lg text-gray-600">
            {room.rating} ({room.reviews} reviews)
          </span>
          <span className="text-3xl font-bold text-emerald-700">${room.price}/night</span>
        </div>
        <p className="text-gray-600 mt-4 text-lg">{room.fullDescription}</p>
      </section>

      {/* Room Details Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-serif text-emerald-800 mb-6">Room Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-gray-700">Guests</span>
              <span className="font-semibold text-emerald-700">{room.guests} guests</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-gray-700">Beds</span>
              <span className="font-semibold text-emerald-700">{room.beds} bed(s)</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-gray-700">Bathrooms</span>
              <span className="font-semibold text-emerald-700">{room.bathrooms}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-gray-700">Room Size</span>
              <span className="font-semibold text-emerald-700">{room.sqft} sqft</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-emerald-800 mb-6">Main Amenities</h2>
          <div className="space-y-3">
            {room.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Facilities */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-serif text-emerald-800 mb-8 text-center">Room Facilities</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bath & Personal Care */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Bath className="w-6 h-6 text-emerald-700" />
              <h3 className="text-xl font-semibold text-emerald-800">Bath & Personal Care</h3>
            </div>
            <ul className="space-y-3">
              {room.facilities.bathAndPersonalCare.map((facility, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-emerald-700 mt-1">◆</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Media & Entertainment */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Tv className="w-6 h-6 text-emerald-700" />
              <h3 className="text-xl font-semibold text-emerald-800">Media & Entertainment</h3>
            </div>
            <ul className="space-y-3">
              {room.facilities.mediaAndEntertainment.map((facility, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-emerald-700 mt-1">◆</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Package className="w-6 h-6 text-emerald-700" />
              <h3 className="text-xl font-semibold text-emerald-800">Other</h3>
            </div>
            <ul className="space-y-3">
              {room.facilities.other.map((facility, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-emerald-700 mt-1">◆</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif text-emerald-800 mb-6">Booking Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Check-in: 3:00 PM</p>
                    <p className="text-sm text-gray-600">Early check-in subject to availability</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Check-out: 11:00 AM</p>
                    <p className="text-sm text-gray-600">Late check-out available upon request</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-emerald-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Complimentary WiFi</p>
                    <p className="text-sm text-gray-600">High-speed internet throughout</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-4">Cancellation Policy</h4>
                <p className="text-gray-700 mb-6">
                  Free cancellation up to 48 hours before arrival. Cancellations within 48 hours will be charged one night&apos;s rate.
                </p>
              </div>
              <Link href="/booking" className="w-full bg-emerald-700 text-white py-4 rounded-lg hover:bg-emerald-800 transition font-semibold text-lg text-center">
                Reserve Now
              </Link>
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
                Your gateway to tranquility in Sri Lanka&apos;s beautiful hill country
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/accommodations" className="hover:text-white transition">Accommodations</Link></li>
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
