'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, MapPinIcon, Users } from 'lucide-react';

export default function ActivitiesDetailPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#accommodations', label: 'Accommodations' },
     { href: '/packages', label: 'Packages' },
    { href: '/user-vehicles', label: 'Vehicles' },
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

      {/* Hero Image Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
            alt="Ella landscape"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
              Things To Do In Ella
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Discover the best experiences in Sri Lanka's hill country
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-800 mb-6">
              Explore the Magic of Ella
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. 
              It is approximately 200 km east of Colombo and is situated at an elevation of 1,041 metres above sea level. 
              The area has a rich bio-diversity, dense with numerous varieties of flora and fauna.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ella is surrounded by the hill country's gorgeous greenery. The town has a cooler climate than surrounding 
              lowlands and villages, due to its elevation. The temperature is typically around 15-25°C year-round. 
              Ella has grown in popularity as a tourist destination, particularly among backpackers, for its laid-back 
              atmosphere and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Activity 1 - Nine Arch Bridge - Image Left */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800"
                alt="Nine Arch Bridge"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Nine Arch Bridge</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>30-45 minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>2 km from town</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Nine Arch Bridge is one of the best examples of colonial-era railway construction in Sri Lanka. 
                Built entirely out of brick, rock and cement, without the use of any steel, the bridge is located 
                in Demodara, between Ella and Demodara railway stations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The surrounding area has seen a steady increase of tourism due to the bridge's architectural ingenuity 
                and the profuse greenery in the nearby hillsides. The best time to visit is early morning when you can 
                see the train passing through, creating a spectacular sight with the mist-covered mountains in the background.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Walk along the tracks (safely!) or hike through the tea plantations to reach various viewpoints. 
                The bridge is especially photogenic during the morning golden hour and when trains cross, typically 
                around 6:30 AM and 11:30 AM.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 2 - Little Adam's Peak - Image Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Little Adam's Peak</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>45-60 minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>1.5 km from town</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Little Adam's Peak is a relatively easy and popular hike that offers stunning panoramic views of the 
                Ella Gap and the surrounding valleys. Named after the sacred Adam's Peak (Sri Pada) in central Sri Lanka 
                because of its similar shape, this peak provides a more accessible alternative.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The trek to the summit takes about 30-45 minutes along a well-maintained path through tea estates. 
                Along the way, you'll pass through vibrant green tea plantations where you can observe tea pickers at work 
                and learn about the tea-making process.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At the peak, you'll be rewarded with 360-degree views of the valley, Ella Rock, and the distant plains. 
                The summit is particularly magical at sunrise or sunset, though it can get crowded. Early morning visits 
                offer cooler temperatures and often clearer views before the afternoon mist rolls in.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Get Directions
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Little Adam's Peak"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity 3 - Ella Rock - Image Left */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
                alt="Ella Rock"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Ella Rock</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>2-3 hours round trip</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>5 km from town</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ella Rock is one of the most rewarding hikes in the area, offering spectacular views from its summit 
                at 1,041 meters above sea level. The trek is more challenging than Little Adam's Peak but equally 
                rewarding for those seeking a proper hiking adventure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The hike starts from Ella town and takes you through pine forests, tea plantations, and along the 
                railway track. The path can be tricky to navigate, so it's recommended to hire a local guide or join 
                a small group. The journey takes about 1.5-2 hours to reach the top.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From the summit, you'll enjoy breathtaking 360-degree views of the surrounding mountains, valleys, 
                and on clear days, you can see all the way to the southern coast. Early morning hikes are preferred 
                to catch the sunrise and avoid the midday heat. Remember to bring plenty of water, snacks, and sun protection.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Book a Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 4 - Ravana Falls - Image Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Ravana Falls</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>6 km from Ella</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ravana Falls is a popular sightseeing attraction in Sri Lanka, located on the Ella-Wellawaya road. 
                It currently ranks as one of the widest falls in the country. The falls are approximately 25 meters 
                high and cascade down from an oval-shaped concave rock formation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                According to legend, this waterfall is named after King Ravana from the Hindu epic Ramayana. The cave 
                behind the falls is said to be where he hid Princess Sita after abducting her. During the rainy season, 
                the falls are at their most spectacular, though swimming is more enjoyable during drier months.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The falls are easily accessible by road and have become a popular stop for tourists traveling between 
                Ella and the southern beaches. There's a small pool at the base where you can take a refreshing dip. 
                Vendors nearby sell fresh king coconuts and snacks. Visit early morning to avoid crowds.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Get Directions
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800"
                alt="Ravana Falls"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity 5 - Ravana Cave - Image Left */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="Ravana Cave"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Ravana Cave</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>1-1.5 hours</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>10 km from Ella</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ravana Cave is an ancient cave located near Ella town that holds significant archaeological and 
                historical importance. The cave is believed to date back to the prehistoric era, with evidence 
                suggesting it was inhabited over 25,000 years ago.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                According to the Ramayana, this cave complex served as King Ravana's hideout where he kept Princess 
                Sita captive. The cave system consists of several chambers, with the main cave extending deep into 
                the mountain. Inside, you'll find ancient stone formations and evidence of early human habitation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The trek to the cave involves climbing stairs up the hillside, offering panoramic views of the 
                surrounding landscape. The entrance fee is minimal, and local guides are available to explain the 
                history and mythology. Bring a flashlight and wear sturdy shoes as some parts can be slippery. 
                The cave offers a cool respite from the tropical heat and combines adventure with cultural exploration.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 6 - Train Ride - Image Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Scenic Train Journey</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>2-3 hours</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>Ella to Kandy/Nuwara Eliya</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The train journey from Ella to Kandy or Nuwara Eliya is considered one of the most scenic train 
                rides in the world. This spectacular journey takes you through the heart of Sri Lanka's hill country, 
                offering breathtaking views of tea plantations, misty mountains, and lush valleys.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The route passes through numerous tunnels, over impressive bridges including the famous Nine Arch Bridge, 
                and alongside dramatic cliff edges. Passengers often hang out of the open doors to feel the cool mountain 
                breeze and capture stunning photographs of the passing scenery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Book tickets in advance, especially for 2nd or 3rd class where you can sit by the windows or doors. 
                The journey is best experienced during clear mornings when visibility is optimal. Trains run several 
                times daily, with the morning departure offering the best lighting for photography. This is an authentic 
                Sri Lankan experience not to be missed.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Check Train Schedule
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800"
                alt="Train journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity 7 - Dowa Temple - Image Left */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                alt="Dowa Temple"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Dowa Temple</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>7 km from Ella</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Dowa Rock Temple is an ancient Buddhist temple located near Bandarawela, about 7 kilometers from Ella. 
                The temple is famous for its 4-meter high Buddha statue carved into the rock face, believed to date 
                back to the 1st century BC during the reign of King Walagamba.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The temple complex features a unique blend of natural rock formations and religious architecture. 
                Legend has it that the Buddha statue was carved by King Walagamba himself during his 14-year exile 
                from Anuradhapura. The statue's unfinished state adds to its mystique and historical significance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The temple is still an active place of worship and offers insights into Sri Lankan Buddhist culture 
                and art. The site is peaceful and less crowded than other tourist attractions. Remember to dress modestly 
                (covering shoulders and knees) and remove shoes before entering the temple premises. Photography is allowed 
                but be respectful of worshippers.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 8 - Flying Ravana - Image Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Flying Ravana Mega Zipline</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>2-3 hours total</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>5 km from Ella</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Experience the thrill of Sri Lanka's first mega zipline adventure! Flying Ravana offers an adrenaline-pumping 
                journey across the Ella valley with stunning aerial views. The main zipline stretches over 500 meters 
                with a vertical drop of about 80 meters, reaching speeds of up to 80 km/h.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The adventure park features two ziplines - the longer "Superman" style where you fly face-down, and 
                a shorter seated option for those who prefer a gentler experience. All equipment is international 
                standard, and experienced guides ensure your safety throughout.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Along with ziplining, the facility offers other activities including rope courses and a mini museum 
                about the Ramayana. The entire experience takes about 2-3 hours including safety briefing and training. 
                Minimum age is 4 years with parental supervision. Book in advance during peak season. Not recommended 
                for those with heart conditions or fear of heights.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Book Adventure
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
                alt="Zipline adventure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity 9 - Tea Plantation - Image Left */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800"
                alt="Tea plantation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Tea Plantation Tours</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>1-2 hours</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>Various locations</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ella and its surroundings are famous for Ceylon tea production. Take a guided tour of a working tea 
                plantation and factory to learn about the fascinating journey from leaf to cup. Watch skilled tea 
                pluckers at work in the verdant hillsides and understand the grading and processing methods.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most factories offer free tours explaining the withering, rolling, oxidation, drying, and sorting 
                processes. You'll see the massive machinery used in production and learn to distinguish between 
                different tea grades. The tour usually concludes with a tasting session where you can sample 
                various types of Ceylon tea.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Popular tea factories near Ella include Halpewatte Tea Factory and Uva Halpewatte. Tours typically 
                don't require advance booking, though it's best to visit during processing hours (morning to mid-afternoon). 
                You can purchase fresh tea directly from the factory at reasonable prices. Don't miss trying a cup of 
                Ceylon tea while enjoying panoramic views of the tea estates.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Find Tea Tours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity 10 - Lipton's Seat - Image Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-emerald-800">Lipton's Seat</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Half day trip</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>30 km from Ella</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Lipton's Seat is a viewpoint located at Dambatenne Tea Estate, named after Sir Thomas Lipton, the 
                famous tea magnate who used to survey his tea empire from this spot. Situated at 1,970 meters above 
                sea level, it offers one of the most spectacular panoramic views in Sri Lanka.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                On clear days, you can see up to seven provinces from this vantage point. The surrounding tea estates 
                create a patchwork of green covering the mountainsides. The journey to Lipton's Seat is an adventure 
                itself, taking you through winding mountain roads with stunning vistas at every turn.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The best time to visit is early morning (before 9 AM) when visibility is clearest and before clouds 
                roll in. You can drive up or hike from the base, which takes about 2-3 hours. The Dambatenne Tea Factory 
                nearby offers tours where you can learn about Sir Thomas Lipton's legacy and tea production. Combine 
                both visits for a full cultural and scenic experience. Bring warm clothes as it can be quite chilly at the top.
              </p>

              <button className="bg-emerald-700 text-white px-8 py-3 rounded-md hover:bg-emerald-800 transition">
                Plan Your Visit
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Lipton's Seat view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-emerald-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Helpful Tips for Your Visit
            </h2>
            <p className="text-xl text-white/90">
              Make the most of your Ella adventure with these local insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Best Time to Visit</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                The best time to visit Ella is from December to March when the weather is dry and clear. 
                April to September brings occasional rain but fewer crowds. July to August sees the most tourists.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Getting Around</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Ella is small and walkable. For longer distances, rent a tuk-tuk for the day (negotiable rates) 
                or hire a scooter if you're comfortable. Local buses are cheap but infrequent.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">What to Pack</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Bring comfortable hiking shoes, light layers for cool mornings, sun protection, and rain gear. 
                A good camera is essential for capturing the stunning scenery. Modest clothing for temple visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald-800 mb-6">
            Ready to Explore Ella?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your stay with us and let our team help you create the perfect itinerary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-md hover:bg-emerald-800 transition text-lg font-semibold">
              Check Availability
            </button>
            <button className="bg-white border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-md hover:bg-emerald-50 transition text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Ella</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Your gateway to unforgettable experiences in Sri Lanka's beautiful hill country.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#accommodations" className="hover:text-white transition">Accommodations</a></li>
                <li><a href="#activities" className="hover:text-white transition">Activities</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
              <ul className="space-y-3 text-sm text-emerald-200">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>Ella Road, Ella 90090, Sri Lanka</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="tel:+94XXXXXXXX" className="hover:text-white transition">+94 XX XXX XXXX</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="mailto:info@ellasouthstar.com" className="hover:text-white transition">
                    info@ellasouthstar.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex gap-4 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-emerald-200 text-sm">Stay updated with our latest offers!</p>
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