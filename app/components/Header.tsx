'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setIsMenuOpen(false); // Close mobile menu if open
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-24">
              <Image
                src="/images/rock-garden-border.jpg"
                alt="Premium Edge Curbing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Premium Edge Curbing
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'} transition-colors`}>
              Services
            </Link>
            <Link href="#benefits" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'} transition-colors`}>
              Benefits
            </Link>
            <Link href="#gallery" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'} transition-colors`}>
              Gallery
            </Link>
            <Link href="#contact" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'} transition-colors`}>
              Contact
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100092278278851"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'} transition-colors`}
              aria-label="Visit our Facebook page"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <button 
              onClick={scrollToContact}
              className="bg-[#d8f84a] text-stone-900 px-6 py-2 rounded-md hover:bg-[#c4e842] transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 pb-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link href="#services" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'}`}>
              Services
            </Link>
            <Link href="#benefits" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'}`}>
              Benefits
            </Link>
            <Link href="#gallery" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'}`}>
              Gallery
            </Link>
            <Link href="#contact" className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'}`}>
              Contact
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100092278278851"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-[#d8f84a]'} inline-flex items-center space-x-2`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <button 
              onClick={scrollToContact}
              className="bg-[#d8f84a] text-stone-900 px-6 py-2 rounded-md hover:bg-[#c4e842] transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
} 