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
import AchievementStrip from './components/AchievementStrip'

const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    budget: '',
    message: ''
  });

  // Show form after 1 second if not already submitted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formSubmitted) {
        setShowForm(true);
      }
    }, 1000);

    const toastTimer = setTimeout(() => {
      if (formSubmitted) {
        setShowToast(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [formSubmitted]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.eventType || !formData.budget) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Here you would typically send the data to your API
    console.log('Wedding inquiry submitted:', formData);
    
    // Hide form and mark as submitted
    setShowForm(false);
    setFormSubmitted(true);
    setShowToast(true);
    
    // Reset form data
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      budget: '',
      message: ''
    });
  };

  const closeForm = () => {
    setShowForm(false);
  };

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
        <p className='md:text-2xl text-xl text-white'>
          Explore{' '}
          <span className='text-amber-400 font-bold my-class'>Delhi&apos;s</span>{' '}
          best wedding <br></br>videography and photography agency
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>
      <InfiniteGallery></InfiniteGallery>
      <Testimonials></Testimonials>
      <AchievementStrip />
      <WhatsAppCTA />
        {showForm && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-t-2xl p-6 text-white relative">
              <h3 className="text-2xl font-bold mb-2">Get Your Quote</h3>
              <p className="text-pink-100">Tell us about your special event</p>
            </div>

            {/* Form Body */}
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="roka">Roka</option>
                  <option value="pre-wedding">Pre-Wedding</option>
                  <option value="events">Events</option>
                  <option value="corporate">Corporate</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                >
                  <option value="">Select your budget</option>
                  <option value="under-50k">Under ₹10,000</option>
                  <option value="50k-1l">₹20,000 - ₹50,000</option>
                  <option value="1l-2l">₹50,000 - ₹2,00,000</option>
                  <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                  <option value="above-5l">Above ₹5,00,000</option>
                  <option value="discuss">Let&apos;s Discuss</option>
                </select>
              </div>
              {/* Form Actions */}
              <div className="pt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get My Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Thank you! We&apos;ll be in touch soon.
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  )
}

export default HeroCarousel
