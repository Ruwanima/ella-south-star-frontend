'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/landingpage', label: 'Home' },
    { href: '/landingpage#about', label: 'About Us' },
    { href: '/accommodations', label: 'Accommodations' },
    { href: '/packages', label: 'Packages' },
    { href: '/vehicles', label: 'Vehicles' },
    { href: '/landingpage#services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/landingpage" className="text-2xl font-serif text-emerald-700 hover:text-emerald-800 transition-colors">
            Ella
          </Link>

          <ul className="hidden md:flex space-x-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.includes('#') ? (
                  <a href={link.href} className="hover:text-emerald-700 transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:text-emerald-700 transition-colors">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link href="/booking" className="hidden md:block bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition">
            Book Now
          </Link>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.includes('#') ? (
                    <a
                      href={link.href}
                      className="block py-2 hover:text-emerald-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 hover:text-emerald-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/booking" className="block w-full bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition text-center">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
