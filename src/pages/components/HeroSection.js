'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const services = [
  { title: 'Wedding Photography', image: '/images/wedding.jpg' },
  { title: 'Pre Weddings', image: '/images/prewedding.JPG' },
  { title: 'Events Photography', image: '/images/events.jpg' },
  { title: 'Maternity Shoot', image: '/images/maternity.webp' },
  { title: 'Baby Shoot', image: '/images/baby.jpg' },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const words = ['Weddings', 'Events', 'Fashion', 'Films'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const poppins = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold'
  };

  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      
      {/* Main GIF Background */}
      <div className='absolute inset-0'>
        <img
          src='/images/focusvideo.gif'
          alt='Wedding Video Trailer'
          className='w-full h-full object-cover'
          onLoad={() => setIsLoaded(true)}
        />
                     
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30' />
        <div className='absolute inset-0 bg-black/10' />
      </div>
 <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d0d0d] via-black/30 to-transparent pointer-events-none' />
        
      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
  
        <div className={`text-center max-w-5xl mx-auto transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

          <h1 className={`text-5xl md:text-8xl lg:text-8xl xl:text-8xl font-bold transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ ...poppins, transitionDelay: '0.5s' }}>
            <span className='block text-white drop-shadow-2xl'>
              We Shoot
            </span>
            <span className='relative inline-block h-[1.2em] min-w-[7ch] text-amber-400 drop-shadow-2xl'>
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`absolute left-1/2 top-0 transform -translate-x-1/2 transition-opacity duration-700 my-class ease-in-out ${
                    i === wordIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ width: '100%' }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

           <div className={`inline-flex items-center space-x-2 px-4 py-2 mb-6 mt-6 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-full transform transition-all duration-700 ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <div className='w-2 h-2 bg-amber-400 rounded-full animate-pulse' />
            <span className='text-white/90 md:text-sm md:flex hidden font-medium tracking-wider'>PREMIUM PHOTOGRAPHY & VIDEOGRAPHY FOR <br></br>WEDDINGS, EVENTS AND BRANDS</span>
             <span className='text-white/90 md:text-sm text-xs md:hidden flex font-medium tracking-wider'>PREMIUM PHOTOGRAPHY & VIDEOGRAPHY FOR WEDDINGS, EVENTS AND BRANDS</span>
            <div className='w-2 h-2 bg-amber-400 rounded-full animate-pulse' />
          </div>
<div
  className={`flex items-center justify-center gap-4 sm:gap-6 mb-12 transform transition-all duration-700 ${
    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
  }`}
  style={{ transitionDelay: '0.9s' }}
>
  {/* WhatsApp Button */}
  <a
    href='https://wa.me/919999999999'
    target='_blank'
    rel='noopener noreferrer'
    className='relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-green-400 shadow-xl hover:shadow-green-400/50 transition-all duration-300 group hover:scale-110'
  >
    <img
      src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
      alt='WhatsApp'
      className='w-6 h-6 z-10'
    />
    <span className='absolute inset-0 rounded-full bg-green-400 opacity-20 blur-xl group-hover:opacity-30 transition duration-300'></span>
    <span className='absolute -inset-px rounded-full bg-green-400 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500' />
  </a>

            <button className='relative cursor-pointer px-4 py-2 md:px-8 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-400 text-amber-300 font-semibold text-lg shadow-xl hover:shadow-amber-400/40 transition-all duration-300 overflow-hidden group hover:scale-105'>
              <span className='relative z-10'>Contact Us</span>
              <span className='absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 opacity-20 blur-lg group-hover:opacity-30 transition duration-300'></span>
              <span className='absolute -inset-px rounded-full bg-amber-400 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500' />
            </button>
          </div>
        </div>
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '1.3s' }}>
          <div className='flex flex-col items-center space-y-2'>
            <span className='text-white/70 text-sm font-medium'>Scroll to explore</span>
            <div className='w-6 h-10 border-2 border-white/40 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce' />
            </div>
          </div>
        </div>
      </div>


      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;