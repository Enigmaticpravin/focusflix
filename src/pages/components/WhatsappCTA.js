'use client';

import { useState, useEffect } from 'react';

const WhatsAppCTA = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(true);

  useEffect(() => {
    // Show tooltip after 2 seconds of page load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);

    // Hide tooltip after 8 seconds, then show periodically
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    // Show tooltip periodically every 30 seconds
    const intervalTimer = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    setPulseAnimation(false);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setShowTooltip(false), 1000);
    setPulseAnimation(true);
  };

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3'>

      <div className={`relative transition-all duration-700 ease-out transform ${
        showTooltip 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>

        <div className='relative'>
          
          <div className='absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-2xl blur opacity-40 animate-pulse'></div>
 
          <div className='relative px-5 py-3 bg-gradient-to-br from-white via-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-2xl backdrop-blur-sm'>

            <div className='flex items-center space-x-3'>
              <div className='relative'>
                <div className='w-3 h-3 bg-green-400 rounded-full animate-ping absolute'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>

              <div className='flex flex-col'>
                <span className='text-gray-800 font-bold text-sm whitespace-nowrap'>
                  Start Your Journey!
                </span>
                <span className='text-gray-600 text-xs font-medium'>
                  Chat with us now
                </span>
              </div>

              <div className='text-yellow-400 animate-bounce text-lg'>✨</div>
            </div>
          </div>
 
          <div className='absolute -bottom-2 right-8 w-4 h-4 bg-gradient-to-br from-white to-green-50 border-b border-r border-green-200 transform rotate-45'></div>
        </div>

        <div className='absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60'></div>
        <div className='absolute -top-4 right-4 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-80'></div>
      </div>

      <div className='relative group'>

        <div className='absolute -inset-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500'></div>
        <div className='absolute -inset-2 bg-green-500 rounded-full blur opacity-60 group-hover:opacity-80 transition-all duration-300'></div>

        {pulseAnimation && (
          <>
            <div className='absolute -inset-4 border-2 border-green-400 rounded-full animate-ping opacity-30'></div>
            <div className='absolute -inset-6 border border-green-300 rounded-full animate-ping opacity-20 animation-delay-1000'></div>
          </>
        )}

        <a
          href='https://wa.me/919910553381'
          target='_blank'
          rel='noopener noreferrer'
          className='relative block bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:rotate-12 group overflow-hidden'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >

          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

          <div className='relative z-10 transform group-hover:scale-110 transition-transform duration-300'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
              alt='WhatsApp'
              className='w-7 h-7 drop-shadow-lg'
            />
          </div>

          <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </a>

        <div className='absolute inset-0 rounded-full bg-green-400 opacity-0 group-active:opacity-30 group-active:scale-150 transition-all duration-300'></div>
      </div>

      <div className={`absolute -top-16 right-0 flex space-x-1 transition-all duration-500 ${
        showTooltip ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce'></div>
        <div className='w-2 h-2 bg-emerald-400 rounded-full animate-bounce animation-delay-200'></div>
        <div className='w-2 h-2 bg-green-500 rounded-full animate-bounce animation-delay-500'></div>
      </div>
    </div>
  );
};

export default WhatsAppCTA;