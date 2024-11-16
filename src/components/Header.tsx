import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-primary-light to-primary-dark shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Logo - Centered on mobile */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center mx-auto sm:mx-0"
          >
            <Image
              src="/images/govtphones-logo.png"
              alt="GovtPhones Logo"
              width={160}
              height={40}
              className="w-auto h-10"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Empty div for mobile layout balance */}
          <div className="w-8 sm:hidden"></div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;