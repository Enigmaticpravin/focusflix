import React, { useState, useEffect } from 'react';
import { Camera, Video, Heart, Star, Award, Users, Calendar, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import logo from '@/../public/images/Focus Flix.png' 
import Footer from './components/Footer';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah & Michael",
      text: "Absolutely magical! They captured every precious moment of our special day with such artistry and emotion.",
      rating: 5,
      location: "Tuscany Wedding"
    },
    {
      name: "Emma & James",
      text: "Professional, creative, and so easy to work with. Our wedding film still gives us goosebumps every time we watch it.",
      rating: 5,
      location: "Beach Wedding"
    },
    {
      name: "Priya & Arjun",
      text: "They didn't just document our wedding - they created a timeless piece of art that we'll treasure forever.",
      rating: 5,
      location: "Garden Wedding"
    }
  ];

  const stats = [
    { number: "500+", label: "Weddings Captured", icon: Heart },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Happy Couples", icon: Users },
    { number: "24/7", label: "Available Support", icon: Calendar }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
        <Navbar logo={logo} />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  We shoot masterpieces through
                  <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    Visual Storytelling
                  </span>
                </h2>
                <p className="text-lg text-white leading-relaxed mb-6">
                  Founded by a passionate artist who believe every love story deserves to be told with breathtaking beauty, 
                  we have dedicated our lives to capturing the magic of your most precious moments.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  With an eye for detail and a heart for romance, we blend cinematic techniques with timeless photography 
                  to create heirloom pieces that will make your grandchildren fall in love with your love story.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-500 to-slate-600 p-6 rounded-2xl border border-rose-100">
                  <Camera className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="font-bold text-white mb-2">Artistic Vision</h3>
                  <p className="text-gray-100 text-sm">Every frame tells a story of love, laughter, and timeless elegance</p>
                </div>
                <div className="bg-gradient-to-br from-slate-500 to-slate-600 p-6 rounded-2xl border border-pink-100">
                  <Video className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="font-bold text-white mb-2">Cinematic Magic</h3>
                  <p className="text-gray-100 text-sm">Hollywood-quality films that capture the essence of your celebration</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
             
             <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl flex items-center justify-center">
                  <Image src={"/images/herotwo.png"} alt="About Us" width={400} height={400} className="rounded-2xl object-cover h-full w-full" />
                </div>
            </div>
          </div>
        </div>

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <div className='w-full justify-center text-center items-center flex flex-col mt-10'>
        <p className='md:text-2xl text-xl text-white'>
          Let&apos;s create{' '}
          <span className='text-amber-400 font-bold my-class'>Magic</span>{' '}
          together
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
          </div>
           <div className="flex md:space-y-8 gap-2 md:gap-6 justify-center flex-wrap mt-5 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-500 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Call Us</p>
                      <p className="text-gray-300">+91 99105 53381</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email Us</p>
                      <p className="text-gray-300">hello@focusflix.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Visit Our Studio</p>
                      <p className="text-gray-300">Sashtri Nagar<br />Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-fit bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/focus_flix_studio/" className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-full hover:scale-110 transition-transform">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

                </div>
      </div>
      <Footer/>
    </div>
  );
}