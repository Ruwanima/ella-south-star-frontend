'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Star, Menu, X, Wifi, MapPin, Utensils, Car, Calendar, Users, Mail, Phone, User, Facebook, Instagram, Twitter } from 'lucide-react';

export default function EllaSouthStarPage() {
  useEffect(() => {
    document.title = "Ella SOUTH STAR";
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'deluxe',
    specialRequests: '',
  });
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    email: '',
    review: '',
  });
  const [reviewRating, setReviewRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingFormData({
      ...bookingFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReviewFormData({
      ...reviewFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', bookingFormData);
    alert('Booking request submitted! We will contact you soon.');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData = { ...reviewFormData, rating: reviewRating };
    console.log('Review submitted:', reviewData);
    alert('Thank you for your review!');
    setReviewFormData({ name: '', email: '', review: '' });
    setReviewRating(0);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#accommodations', label: 'Accommodations' },
    { href: '#services', label: 'Services' },
    
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif text-emerald-700">Ella</div>

            <ul className="hidden md:flex space-x-8 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-emerald-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button className="hidden md:block bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
              Book Now
            </button>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block py-2 hover:text-emerald-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="w-full bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
                    Book Now
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600')",
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-serif mb-4">
              Ella
              <span className="block text-4xl md:text-5xl mt-2">SOUTH STAR</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl">
            Experience tranquility in the heart of Sri Lanka's hill country
          </p>
          <button className="mt-8 bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition text-lg">
            Explore Our Rooms
          </button>
        </div>
      </section>

      {/* About Section - Ella South Star */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-emerald-800">Ella South Star</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nestled in the misty mountains of Ella, South Star offers an unparalleled escape into nature's embrace.
              Our boutique resort combines modern luxury with traditional Sri Lankan hospitality, creating an experience
              that rejuvenates both body and soul.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wake up to breathtaking views of lush tea plantations, enjoy authentic local cuisine, and immerse yourself
              in the serene beauty that has made Ella one of Sri Lanka's most treasured destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Relaxing Pleasure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-emerald-800">Relaxing Pleasure</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Indulge in moments of pure tranquility as you unwind in our carefully designed spaces. Each corner of
                Ella South Star is crafted to provide you with the ultimate relaxation experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From our infinity pool overlooking the valley to our spa services using local herbs and oils, every
                detail is designed to help you disconnect from the world and reconnect with yourself.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></span>
                  Panoramic mountain views from every room
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></span>
                  Traditional Ayurvedic spa treatments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></span>
                  Yoga and meditation sessions at dawn
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
                alt="Relaxing space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-emerald-800">Accommodations</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed rooms and suites, each offering unique comfort and stunning views
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Deluxe Room */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600"
                  alt="Deluxe Room"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-700 text-white px-4 py-2 rounded-md">
                  $120/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Deluxe Room</h3>
                <p className="text-gray-600 mb-4">
                  Spacious rooms with stunning valley views, king-size bed, and private balcony.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    350 sq ft
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    Mountain view
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    En-suite bathroom
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    Complimentary breakfast
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition">
                    View Details
                  </button>
                  <button className="flex-1 border border-emerald-700 text-emerald-700 py-3 rounded-md hover:bg-emerald-50 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Suite */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600"
                  alt="Premium Suite"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-700 text-white px-4 py-2 rounded-md">
                  $220/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Premium Suite</h3>
                <p className="text-gray-600 mb-4">
                  Luxurious suite with separate living area, outdoor bathtub, and panoramic views.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    600 sq ft
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    180° panoramic view
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    Outdoor bathtub
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    Living room & balcony
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition">
                    View Details
                  </button>
                  <button className="flex-1 border border-emerald-700 text-emerald-700 py-3 rounded-md hover:bg-emerald-50 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Private Villa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
                  alt="Private Villa"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-700 text-white px-4 py-2 rounded-md">
                  $450/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Private Villa</h3>
                <p className="text-gray-600 mb-4">
                  Exclusive villa with private pool, garden, and personalized service.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    1000 sq ft
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    Private pool & garden
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    2 bedrooms
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 mr-2">•</span>
                    Butler service
                  </li>
                </ul>
                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition">
                    View Details
                  </button>
                  <button className="flex-1 border border-emerald-700 text-emerald-700 py-3 rounded-md hover:bg-emerald-50 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-emerald-800">Services</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of amenities to make your stay comfortable and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
                <Utensils className="w-10 h-10 text-emerald-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 transition-colors">Restaurant</h3>
              <p className="text-gray-600 text-sm">Authentic Sri Lankan and international cuisine</p>
            </div>

            {/* Service 2 */}
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
                <Wifi className="w-10 h-10 text-emerald-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 transition-colors">
                24 Hour Hosting
              </h3>
              <p className="text-gray-600 text-sm">Round-the-clock service for your comfort</p>
            </div>

            {/* Service 3 */}
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
                <MapPin className="w-10 h-10 text-emerald-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 transition-colors">Sightseeing</h3>
              <p className="text-gray-600 text-sm">Guided tours to Ella's best attractions</p>
            </div>

            {/* Service 4 */}
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
                <Car className="w-10 h-10 text-emerald-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 transition-colors">
                Vehicle Parking
              </h3>
              <p className="text-gray-600 text-sm">Secure parking for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Feedback Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-emerald-800">Reviews & Feedback</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our guests have to say about their experience
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  JD
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">John Davis</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">2 weeks ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely stunning location with breathtaking views. The staff went above and beyond to make our stay
                memorable. The rooms were immaculate and the food was exceptional.
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  SM
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Sarah Miller</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">1 month ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A perfect retreat for anyone seeking peace and tranquility. The spa services were incredible, and waking
                up to the mountain views was magical. Highly recommend!
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  RP
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Rajesh Patel</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">3 weeks ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Best hotel experience in Sri Lanka. The attention to detail, hospitality, and the overall ambiance made
                this trip unforgettable. Can't wait to return!
              </p>
            </div>
          </div>

          {/* Write Your Feedback Form */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif mb-6 text-center text-emerald-800">Write Your Feedback</h3>

            <form onSubmit={handleReviewSubmit} className="space-y-6">
              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium mb-3 text-center text-gray-700">
                  Rate Your Experience
                </label>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || reviewRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {reviewRating > 0 && (
                  <p className="text-center text-sm text-gray-600 mt-2">
                    You rated {reviewRating} out of 5 stars
                  </p>
                )}
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={reviewFormData.name}
                  onChange={handleReviewChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={reviewFormData.email}
                  onChange={handleReviewChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Your Review *</label>
                <textarea
                  name="review"
                  value={reviewFormData.review}
                  onChange={handleReviewChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Share your experience..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={reviewRating === 0}
                className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-serif mb-4">Ella</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Your gateway to tranquility in Sri Lanka's beautiful hill country. Experience luxury, comfort, and
                natural beauty.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#accommodations" className="hover:text-white transition">
                    Accommodations
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
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
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="tel:+94XXXXXXXX" className="hover:text-white transition">
                    +94 XX XXX XXXX
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="mailto:info@ellasouthstar.com" className="hover:text-white transition">
                    info@ellasouthstar.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-emerald-200 text-sm">Stay updated with our latest offers and news!</p>
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
                <a href="#" className="hover:text-white transition">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
