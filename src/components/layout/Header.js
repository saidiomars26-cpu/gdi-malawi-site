// src/components/layout/Header.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-900 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3"> {/* smaller height */}
          {/* Logo – smaller */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Global Drive Imports"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav – more stylish */}
          <nav className="hidden md:flex items-center space-x-12 text-base font-medium">
            {[
              { href: '/', label: 'Home' },
              { href: '/buy', label: 'Buy Cars' },
              { href: '/sell', label: 'Sell Your Car' },
              { href: '/services', label: 'Services' },
              { href: '/imports', label: 'Imports' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 px-1 text-white transition-all duration-300 hover:text-blue-200 group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 rounded transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-950/95 backdrop-blur-sm z-40 flex flex-col transition-transform duration-400 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-blue-800">
          <Link href="/" onClick={toggleMenu}>
            <img
              src="/images/logo.png"
              alt="Global Drive Imports"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button onClick={toggleMenu} className="text-white text-4xl font-light">
            ×
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-grow space-y-10 text-2xl font-medium">
          <Link href="/" onClick={toggleMenu} className="hover:text-blue-300 transition">Home</Link>
          <Link href="/buy" onClick={toggleMenu} className="hover:text-blue-300 transition">Buy Cars</Link>
          <Link href="/sell" onClick={toggleMenu} className="hover:text-blue-300 transition">Sell Your Car</Link>
          <Link href="/services" onClick={toggleMenu} className="hover:text-blue-300 transition">Services</Link>
          <Link href="/imports" onClick={toggleMenu} className="hover:text-blue-300 transition">Imports</Link>
          <Link href="/about" onClick={toggleMenu} className="hover:text-blue-300 transition">About</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-300 transition">Contact</Link>
        </nav>

        <div className="p-6 text-center text-sm border-t border-blue-800">
          <p>Blantyre, Malawi</p>
          <p>+265 999 15 45 56 (WhatsApp)</p>
          <p className="mt-2">© {new Date().getFullYear()} Global Drive Imports</p>
        </div>
      </div>
    </header>
  );
}