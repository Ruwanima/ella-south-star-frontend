'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

export default function ActivitiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#accommodations', label: 'Accommodations' },
    { href: '#activities', label: 'Activities' },
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

      {/* Page Title Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-4 text-emerald-800">
              Activities & Experiences
            </h1>
            <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the rich culture and breathtaking beauty of Ella. From scenic train rides 
              to ancient temples, discover unforgettable experiences that will make your stay truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Activity 1 - Scenic Train Ride */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif mb-4 text-emerald-800">Scenic Train Ride</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience one of the most scenic train journeys in the world. The train ride from Ella to Nuwara Eliya 
                takes you through misty mountains, lush tea plantations, and cascading waterfalls. Watch the landscape 
                transform as you travel through the heart of Sri Lanka's hill country.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hang out from the train doors (safely!), feel the cool mountain breeze, and capture stunning photographs 
                of the picturesque countryside. The iconic Nine Arch Bridge is a highlight you won't want to miss.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Duration: 2-3 hours one way</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Best time: Early morning for clearest views</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>What to bring: Camera, comfortable clothing</span>
                </li>
              </ul>
              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition inline-flex items-center gap-2">
                Book This Experience
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800"
                alt="Scenic train ride through Sri Lankan mountains"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity 2 - Little Adam's Peak */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Hiking Little Adam's Peak"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-4 text-emerald-800">Little Adam's Peak</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Embark on an easy hiking adventure to Little Adam's Peak, one of Ella's most popular attractions. 
                This relatively easy climb offers spectacular 360-degree views of the surrounding valleys, tea plantations, 
                and the famous Ella Gap.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The trail winds through vibrant green tea estates and offers numerous photo opportunities along the way. 
                At the summit, you'll be rewarded with panoramic vistas that stretch as far as the eye can see. 
                It's particularly magical at sunrise or sunset.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Duration: 45 minutes to 1 hour round trip</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Difficulty: Easy to moderate</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Best time: Early morning or late afternoon</span>
                </li>
              </ul>
              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition inline-flex items-center gap-2">
                Get Directions
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 3 - Explore Ella */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif mb-4 text-emerald-800">Explore Ella</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Discover the charming town of Ella at your own pace. Rent a bike or tuk-tuk and explore the winding 
                roads, hidden cafes, and local markets. Meet friendly locals, sample authentic Sri Lankan street food, 
                and immerse yourself in the laid-back atmosphere.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Visit the famous Nine Arch Bridge, explore ancient temples, or simply relax in one of the many 
                restaurants with stunning valley views. Ella is small enough to explore in a day but offers endless 
                discoveries around every corner.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Visit Nine Arch Bridge and Rawana Falls</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Explore local tea factories</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2"></span>
                  <span>Try local cuisine at family-run restaurants</span>
                </li>
              </ul>
              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition inline-flex items-center gap-2">
                View Town Map
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800"
                alt="Exploring Ella town"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Inspirational Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
            alt="Ella landscape"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Adventure awaits in the heart of Sri Lanka's hill country. 
              Let Ella capture your heart.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Create memories that will last a lifetime
            </p>
            <button className="bg-white text-emerald-800 px-8 py-4 rounded-md hover:bg-gray-100 transition text-lg font-semibold">
              Explore All Activities
            </button>
          </div>
        </div>
      </section>

      {/* Additional Activities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-emerald-800">More Experiences</h2>
            <div className="w-20 h-1 bg-emerald-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more exciting activities and experiences during your stay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Experience 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600"
                  alt="Ravana Falls"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Ravana Falls</h3>
                <p className="text-gray-600 mb-4">
                  Visit one of Sri Lanka's widest waterfalls, surrounded by myth and legend. A perfect spot for 
                  photos and a refreshing dip.
                </p>
                <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600"
                  alt="Tea plantation tour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Tea Plantation Tour</h3>
                <p className="text-gray-600 mb-4">
                  Learn about Ceylon tea production from leaf to cup. Visit working tea factories and sample 
                  fresh brews with mountain views.
                </p>
                <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600"
                  alt="Yoga and meditation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Yoga & Meditation</h3>
                <p className="text-gray-600 mb-4">
                  Find inner peace with morning yoga sessions overlooking the valley. Expert instructors guide 
                  you through meditation and breathing.
                </p>
                <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600"
                  alt="Local cuisine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Cooking Class</h3>
                <p className="text-gray-600 mb-4">
                  Master authentic Sri Lankan dishes with our cooking classes. Learn to prepare traditional 
                  curries, hoppers, and more.
                </p>
                <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600"
                  alt="Wildlife watching"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Wildlife Watching</h3>
                <p className="text-gray-600 mb-4">
                  Spot exotic birds, monkeys, and other wildlife in their natural habitat. Early morning treks 
                  offer the best sightings.
                </p>
                <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Experience 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
                  alt="Ella Rock"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-emerald-800">Ella Rock Hike</h3>
                <p className="text-gray-600 mb-4">
                  Challenge yourself with this moderate hike to Ella Rock. The rewarding summit offers 
                  breathtaking 360-degree views.
                </p>
                <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ready for Your Ella Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your stay with us and let our team help you plan the perfect itinerary for your visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-md hover:bg-gray-100 transition text-lg font-semibold">
              Book Your Stay
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-emerald-700 transition text-lg font-semibold">
              Contact Us
            </button>
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
                Your gateway to unforgettable experiences in Sri Lanka's beautiful hill country.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>
                  <a href="/" className="hover:text-white transition">
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
                  <a href="#activities" className="hover:text-white transition">
                    Activities
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
              <p className="text-emerald-200 text-sm">Stay updated with our latest offers!</p>
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