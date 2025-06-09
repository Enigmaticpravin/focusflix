import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import React from 'react'

export default function AchievementStrip () {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    years: 0,
    weddings: 0,
    events: 0,
    clients: 0
  })

  const stripRef = useRef(null)

  const achievements = [
    {
      id: 'years',
      icon: '🏆',
      number: 8,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Capturing memories'
    },
    {
      id: 'weddings',
      icon: '💒',
      number: 500,
      suffix: '+',
      label: 'Weddings Shot',
      description: 'Beautiful ceremonies'
    },
    {
      id: 'events',
      icon: '🎉',
      number: 1200,
      suffix: '+',
      label: 'Events Covered',
      description: 'Special moments'
    },
    {
      id: 'clients',
      icon: '⭐',
      number: 98,
      suffix: '%',
      label: 'Happy Clients',
      description: '5-star reviews'
    }
  ]

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (stripRef.current) {
      observer.observe(stripRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation function
  const animateCounters = () => {
    achievements.forEach(achievement => {
      let current = 0
      const increment = achievement.number / 50 // 50 steps for smooth animation
      const timer = setInterval(() => {
        current += increment
        if (current >= achievement.number) {
          setCounters(prev => ({
            ...prev,
            [achievement.id]: achievement.number
          }))
          clearInterval(timer)
        } else {
          setCounters(prev => ({
            ...prev,
            [achievement.id]: Math.floor(current)
          }))
        }
      }, 40) // 40ms interval for smooth animation
    })
  }

  return (
    <div className='min-h-screen '>
      <div
        ref={stripRef}
        className='relative overflow-hidden bg-gradient-to-r from-[#ffa908] via-[#ff9d00] to-[#ffaf37] py-16 shadow-inner'
      >
        {/* Optional subtle shimmer overlay */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none mix-blend-soft-light' />

        {/* Animated Background Elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10 w-20 h-20 rounded-full bg-white animate-pulse'></div>
          <div className='absolute top-20 right-20 w-16 h-16 rounded-full bg-white animate-pulse delay-1000'></div>
          <div className='absolute bottom-10 left-1/4 w-12 h-12 rounded-full bg-white animate-pulse delay-500'></div>
          <div className='absolute bottom-20 right-1/3 w-14 h-14 rounded-full bg-white animate-pulse delay-1500'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4'>
          <div className='w-full justify-center text-center items-center flex flex-col mb-10'>
            <p className='md:text-2xl text-xl text-white'>
              Here's our{' '}
              <span className='text-black font-bold my-class'>Journey</span> in
              Numbers
            </p>
            <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon Container */}
                <div className='relative mb-6'>
                  <div className='w-20 h-20 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 transform hover:scale-110 transition-transform duration-300'>
                    <span className='text-3xl'>{achievement.icon}</span>
                  </div>
                  {/* Pulse Ring */}
                  <div className='absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-white border-opacity-30 animate-ping'></div>
                </div>

                {/* Counter Display */}
                <div className='mb-4'>
                  <div className='text-5xl lg:text-6xl font-bold text-white mb-2 font-mono'>
                    {counters[achievement.id]}
                    <span className='text-black'>{achievement.suffix}</span>
                  </div>
                  <div
                    className='h-1 w-16 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full transform scale-x-0 animate-pulse'
                    style={{
                      animation: isVisible
                        ? 'scaleX 1s ease-out forwards'
                        : 'none',
                      animationDelay: `${index * 200 + 800}ms`
                    }}
                  ></div>
                </div>

                {/* Labels */}
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {achievement.label}
                </h3>
                <p className='text-pink-100 text-sm'>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <div className='mt-16 text-center'>
            <div className='inline-flex items-center space-x-2 text-white'>
              <div className='w-8 h-0.5 bg-gradient-to-r from-transparent to-black'></div>
              <span className='text-black text-sm font-medium'>
                Trusted by couples across India
              </span>
              <div className='w-8 h-0.5 bg-gradient-to-l from-transparent to-black'></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce opacity-60'></div>
          <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-pink-200 rounded-full animate-bounce opacity-80 delay-300'></div>
          <div className='absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-200 rounded-full animate-bounce opacity-70 delay-700'></div>
        </div>
      </div>

      {/* Content Below Strip */}
      <div className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='w-full flex justify-center items-center mb-10'>
            <div className='relative flex gap-6'>
              {/* Left Image */}
              <div className='relative w-[200px] h-[200px] md:w-[300px] md:h-[400px] transform rotate-[-6deg] shadow-2xl rounded-xl overflow-hidden border-4 border-white z-10'>
                <Image
                  src='/images/heroseven.jpg'
                  alt='Photo 1'
                  fill
                  className='object-cover'
                />
              </div>

              {/* Right Image (slightly overlapping back) */}
              <div className='relative w-[200px] h-[200px] md:w-[300px] md:h-[400px] -ml-12 transform rotate-[6deg] shadow-xl rounded-xl overflow-hidden border-4 border-white z-0'>
                <Image
                  src='/images/heroeight.jpg'
                  alt='Photo 2'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        <div className='w-full justify-center text-center items-center flex flex-col mt-10'>
        <p className='md:text-2xl text-xl text-white'>
          Why{' '}
          <span className='text-amber-400 font-bold my-class'>Choose</span>{' '}
          Us
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
          <p className='text-lg text-gray-200 leading-relaxed'>
            With years of experience and hundreds of successful events, we bring
            unmatched expertise to every wedding and celebration. Our commitment
            to excellence has earned us the trust of couples throughout India,
            making us one of the most sought-after wedding photography and
            videography teams in the industry.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  )
}
