import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/../public/images/Focus Flix.png' 
import { PhoneCall, Instagram, Youtube } from 'lucide-react'
import AnimatedGallery from './components/AnimatedGallery'
import HeroTitle from './components/HeroTitle'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import InfiniteGallery from './components/InfiniteGallery'
import Navbar from './components/Navbar'
import WhatsAppCTA from './components/WhatsappCTA'
import HeroSection from './components/HeroSection'

const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const heroImages = [
    {
      url: '/images/heroone.png',
      title: 'Elegant Royal Ceremony',
      subtitle: 'Where Dreams Meet Reality'
    },
    {
      url: '/images/herotwo.png',
      title: 'Timeless Love Stories',
      subtitle: 'Captured in Golden Moments'
    },
    {
      url: '/images/herothree.png',
      title: 'Majestic Wedding Tales',
      subtitle: 'Every Frame a Masterpiece'
    },
    {
      url: '/images/herofour.png',
      title: 'Royal Romance Unveiled',
      subtitle: 'Forever in Perfect Light'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className='w-full bg-[#0d0d0d]'>
      <Navbar logo={logo} />
     <HeroSection />

      <div className='w-full justify-center items-center h-[600px] hidden'>
        {' '}
    
        <div className='w-1/2 h-full overflow-hidden flex items-center justify-center'>
          <div
            className='flex transition-transform duration-700 ease-in-out h-full'
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div
                key={index}
                className='min-w-full h-full flex justify-center items-center'
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  width={960}
                  height={600}
                  className='w-full h-full object-cover rounded-xl border-2 border-amber-400 shadow-lg'
                  unoptimized
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <img
            src='/images/focusvideo.gif'
            alt='Focus GIF'
            className='w-full h-full object-cover rounded-xl border-2 border-amber-400 shadow-lg'
          />
                        <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[
#0d0d0d] via-black/30 to-transparent pointer-events-none' />
        </div>
      </div>

      <div className='w-full justify-center text-center items-center flex flex-col mt-10'>
        <p className='text-lg text-white'>
          Explore{' '}
          <span className='text-amber-400 font-bold my-class'>Delhi's</span>{' '}
          best wedding <br></br>videography and photography agency
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
      <InfiniteGallery></InfiniteGallery>
      <Testimonials></Testimonials>
      <WhatsAppCTA />
     

      <Footer></Footer>
    </div>
  )
}

export default HeroCarousel
