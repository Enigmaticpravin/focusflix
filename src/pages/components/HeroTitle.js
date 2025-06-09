'use client'

import { useEffect, useState } from 'react'
import { Smile, Baby, User2, Heart, Camera } from 'lucide-react'
import Image from 'next/image'

const services = [
  { title: 'Wedding Photography', image: '/images/wedding.jpg' },
  { title: 'Pre Weddings', image: '/images/prewedding.JPG' },
  { title: 'Events Photography', image: '/images/events.jpg' },
  { title: 'Maternity Shoot', image: '/images/maternity.webp' },
  { title: 'Baby Shoot', image: '/images/baby.jpg' },
]


const HeroTitle = () => {
  const words = ['Weddings', 'Events', 'Fashion', 'Films']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const poppins = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold'
  }

  return (
    <div className='w-full py-20 text-white flex flex-col items-center justify-center'>
      <h1
        className='text-4xl md:text-[98px] font-bold text-center leading-snug'
        style={poppins}
      >
        We Shoot{' '}
        <span
          className='relative inline-block h-[1em] text-amber-400 font-bold'
          style={{
            minWidth: '7ch',
            display: 'inline-block',
            textAlign: 'left'
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={`absolute left-0 top-0 transition-opacity duration-700 ease-in-out ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ width: '100%' }}
            >
              {word}
            </span>
          ))}
        </span>
      </h1>
      <p className=' text-sm md:text-xl text-gray-300 text-center uppercase tracking-wider max-w-2xl'>
        Professional photography & videography for weddings, events & brands.
      </p>
      <div className='flex items-center justify-center space-x-4 mt-8'>
        {/* WhatsApp Circular Button */}
        <a
          href='https://wa.me/919999999999' // Replace with your number
          target='_blank'
          rel='noopener noreferrer'
          className='relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-green-400 shadow-xl hover:shadow-green-400/50 transition-all duration-300 group'
        >
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' // Use official WhatsApp SVG or optimized PNG
            alt='WhatsApp'
            className='w-6 h-6 z-10'
          />
          {/* Green Glow */}
          <span className='absolute inset-0 rounded-full bg-green-400 opacity-20 blur-xl group-hover:opacity-30 transition duration-300'></span>
          <span className='absolute -inset-px rounded-full bg-green-400 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500' />
        </a>

        {/* Contact Us Button */}
        <button className='relative cursor-pointer px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-amber-400 text-amber-300 font-semibold text-lg shadow-xl hover:shadow-amber-400/40 transition-all duration-300 overflow-hidden group'>
          <span className='relative z-10'>Contact Us</span>
          <span className='absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 opacity-20 blur-lg group-hover:opacity-30 transition duration-300'></span>
          <span className='absolute -inset-px rounded-full bg-amber-400 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500' />
        </button>
      </div>
      <div className='w-full justify-center text-center items-center flex flex-col mt-20'>
        <p className='text-lg text-white'>
          Our{' '}
          <span className='text-amber-400 font-bold my-class'>Services</span>{' '}
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
       <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
      {services.map((service, i) => (
        <div
          key={i}
          className="relative w-34 h-40 md:w-54 md:h-70 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold p-2 text-center rounded-b-2xl">
            {service.title}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HeroTitle
