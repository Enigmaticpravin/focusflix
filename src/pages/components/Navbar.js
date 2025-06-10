'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PhoneCall, Instagram, Youtube, Menu, X } from 'lucide-react';

const Navbar = ({ logo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About Us', href: '#about-us' }
  ];

  const socialLinks = [
    { icon: PhoneCall, href: 'tel:+919910553381', label: 'Phone' },
    { icon: Instagram, href: 'https://www.instagram.com/focus_flix_studio/?hl=en', target: '_blank', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', target: '_blank', label: 'YouTube' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
    window.location.href = 'tel:+919910553381';

  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <div className={`max-w-7xl mx-auto transition-all duration-700 ease-out transform ${
          scrolled 
            ? 'backdrop-blur-sm bg-gradient-to-r from-white/25 via-white/20 to-white/25 shadow-2xl shadow-black/10 border border-white/30' 
            : 'backdrop-blur-sm bg-gradient-to-r from-white/15 via-white/10 to-white/15 shadow-xl shadow-black/5 border border-white/20'
        } rounded-2xl ${scrolled ? 'scale-[0.98]' : 'scale-100'}`}>
          
          <div className={`flex items-center justify-between px-6 lg:px-8 transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Logo with Animation */}
            <div className="flex-shrink-0 z-50">
              <div className="transform transition-all duration-500 hover:scale-110">
                <Image 
                  src={logo} 
                  alt="Focus Flix Logo" 
                  width={scrolled ? 120 : 140} 
                  height={scrolled ? 34 : 40}
                  className="transition-all duration-500 drop-shadow-lg"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group px-4 py-2 text-white/90 hover:text-white transition-all duration-500 font-medium text-sm rounded-xl hover:bg-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100"></div>
                  <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-500 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-2 backdrop-blur-sm border border-white/10">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target={social.target}
                    rel={social.target ? 'noopener noreferrer' : undefined}
                    className="text-white/80 hover:text-amber-400 transition-all duration-500 hover:scale-125 p-2 rounded-full hover:bg-white/10 hover:rotate-12"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <a href="tel:+919910553381" className="inline-block cursor-pointer">
   <button className="relative group bg-gradient-to-r cursor-pointer from-amber-400 via-amber-500 to-amber-400 text-black px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-amber-400/50 overflow-hidden">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              </button>
</a>
              
           
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-50 p-3 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 transition-all duration-500 hover:bg-white/25 hover:scale-110 hover:rotate-180 group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 text-white transition-all duration-700 transform ${
                    isMobileMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 text-white transition-all duration-700 transform ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Top to Bottom Animation */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            isMobileMenuOpen 
              ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md' 
              : 'bg-black/0 backdrop-blur-none'
          }`}
          onClick={closeMobileMenu}
        />
        
        <div className={`absolute top-0 left-4 right-4 mt-24 rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl shadow-2xl border border-white/50 transform transition-all duration-1000 ease-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : '-translate-y-full opacity-0 scale-95'
        }`}>
          
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          <div className="p-8">
            
            <div className="space-y-3 mb-8">
              {menuItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-700 ease-out ${
                    isMobileMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 0.1 + 0.3}s` : '0s' 
                  }}
                >
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group block px-6 py-4 text-gray-800 hover:text-amber-600 rounded-2xl transition-all duration-500 font-medium text-lg relative overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                    <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-amber-400 to-amber-500 group-hover:h-8 transition-all duration-500 transform -translate-y-1/2 rounded-r-full"></div>
                  </a>
                </div>
              ))}
            </div>

            <div className={`h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8 transform transition-all duration-700 ${
              isMobileMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '0.8s' : '0s' }}></div>

            <div className={`flex items-center justify-center space-x-6 mb-8 transform transition-all duration-700 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '0.9s' : '0s' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.target}
                  rel={social.target ? 'noopener noreferrer' : undefined}
                  className="group text-gray-700 hover:text-amber-600 transition-all duration-500 hover:scale-125 p-4 rounded-2xl hover:bg-gradient-to-br from-amber-50 to-amber-100 hover:rotate-12"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6 transition-all duration-500 group-hover:drop-shadow-lg" />
                </a>
              ))}
            </div>

            <div className={`transform transition-all duration-700 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '1s' : '0s' }}>
              <button 
                className="group relative w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-black px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-700 hover:scale-[1.02] overflow-hidden"
                onClick={closeMobileMenu}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;