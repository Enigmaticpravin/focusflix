'use client'

import Image from 'next/image'
import { useState } from 'react'

const services = [
  { title: 'Wedding Photography', image: '/images/wedding.jpg' },
  { title: 'Pre Weddings', image: '/images/prewedding.JPG' },
  { title: 'Events Photography', image: '/images/events.jpg' },
  { title: 'Maternity Shoot', image: '/images/maternity.webp' },
  { title: 'Baby Shoot', image: '/images/baby.jpg' },
]

const ServicesSection = () => {
  const [clickedIndex, setClickedIndex] = useState(null)

  const handleClick = (index) => {
    setClickedIndex(index)
    setTimeout(() => setClickedIndex(null), 600)
  }

  return (
<div id='services' className="flex flex-wrap justify-center gap-4 md:gap-6 pb-10 md:px-6 md:py-10" style={{background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 100%)'}}>
      <div className='w-full justify-center text-center items-center flex flex-col mt-10'>
        <p className='md:text-2xl text-xl text-white'>
          Check Out our{' '}
          <span className='text-amber-400 font-bold my-class'>Services</span>{' '}
          Portfolio
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
      
      {services.map((service, i) => (
        <div
          key={i}
          className={`
            relative w-37 h-50 md:w-56 md:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer
            transition-all duration-500 ease-out transform-gpu
            hover:scale-105 hover:-translate-y-2 hover:rotate-1
            hover:shadow-2xl hover:shadow-blue-500/20
            ${clickedIndex === i ? 'animate-bubble-click' : 'hover:animate-bubble-hover'}
          `}
          onClick={() => handleClick(i)}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className={`
            w-full h-full relative transition-all duration-500 ease-out
            ${clickedIndex === i ? 'animate-bubble-press' : ''}
          `}>
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className={`
                rounded-2xl transition-all duration-500 ease-out
                hover:brightness-110 hover:contrast-105
                ${clickedIndex === i ? 'scale-95 brightness-90' : ''}
              `}
            />
            
            {/* Glass effect overlay */}
            <div className={`
              absolute inset-0 rounded-2xl transition-all duration-500 ease-out
              bg-gradient-to-br from-white/5 via-transparent to-blue-500/10
              hover:from-white/10 hover:to-blue-500/20
              ${clickedIndex === i ? 'from-white/20 to-blue-500/30' : ''}
            `} />
            
            {/* Bubble ripple effect */}
            <div className={`
              absolute inset-0 rounded-2xl pointer-events-none
              ${clickedIndex === i ? 'animate-ripple' : ''}
            `} style={{
              background: clickedIndex === i ? 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)' : 'none'
            }} />
            
            <div className={`
              absolute bottom-0 w-full bg-white/10 backdrop-blur-md text-white 
              text-sm font-semibold p-2 text-center rounded-b-2xl
              transition-all duration-300 ease-out
              hover:bg-white/20 hover:backdrop-blur-lg
              ${clickedIndex === i ? 'bg-white/30 backdrop-blur-xl' : ''}
            `}>
              {service.title}
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes bubble-hover {
          0%, 100% { transform: translateZ(0) rotateX(0) rotateY(0); }
          25% { transform: translateZ(10px) rotateX(2deg) rotateY(-1deg); }
          50% { transform: translateZ(15px) rotateX(-1deg) rotateY(2deg); }
          75% { transform: translateZ(10px) rotateX(1deg) rotateY(-1deg); }
        }
        
        @keyframes bubble-click {
          0% { transform: translateZ(0) rotateX(0) rotateY(0) scale(1); }
          30% { transform: translateZ(-20px) rotateX(-8deg) rotateY(4deg) scale(0.95); }
          60% { transform: translateZ(25px) rotateX(6deg) rotateY(-3deg) scale(1.05); }
          100% { transform: translateZ(0) rotateX(0) rotateY(0) scale(1); }
        }
        
        @keyframes bubble-press {
          0% { transform: translateZ(0) scale(1); }
          50% { transform: translateZ(-15px) scale(0.98); }
          100% { transform: translateZ(0) scale(1); }
        }
        
        @keyframes ripple {
          0% { 
            transform: scale(0); 
            opacity: 1; 
          }
          100% { 
            transform: scale(2); 
            opacity: 0; 
          }
        }
        
        .animate-bubble-hover {
          animation: bubble-hover 2s ease-in-out infinite;
        }
        
        .animate-bubble-click {
          animation: bubble-click 0.6s ease-out;
        }
        
        .animate-bubble-press {
          animation: bubble-press 0.6s ease-out;
        }
        
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ServicesSection