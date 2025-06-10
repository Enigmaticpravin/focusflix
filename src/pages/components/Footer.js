import {
  Facebook,
  Instagram,
  Youtube,
  PhoneCall,
  Mail,
  MapPin,
  Camera,
  Video,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const services = [
    { name: 'Wedding Photography', icon: Camera },
    { name: 'Event Coverage', icon: Video },
    { name: 'Pre-Wedding Shoots', icon: Heart },
    { name: 'Corporate Events', icon: Camera }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
        { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about-us' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/focus_flix_studio/',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://youtube.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <div className="group">
                <Image 
                  src="/images/Focus Flix.png" 
                  alt="Focus Flix Logo" 
                  width={180} 
                  height={50} 
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Capturing timeless moments through weddings, events, and life&apos;s most cherished stories. 
                Based in Delhi, available nationwide for your special occasions.
              </p>
              
              {/* Services Quick Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div 
                      key={index} 
                      className="group flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-amber-400/50 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-amber-400/50 transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
              </h4>
              <ul className="space-y-3 md:block">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-all duration-300 py-1"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
              </h4>
              
              <div className="space-y-4">
                <a 
                  href="tel:+919876543210" 
                  className="group flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300"
                >
                  <div className="p-2 bg-amber-400/20 rounded-full group-hover:bg-amber-400/30 transition-colors">
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p>
                    <p className="text-white font-medium">+91 99105 53381</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>

                <a 
                  href="mailto:hello@focusflix.in" 
                  className="group flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300"
                >
                  <div className="p-2 bg-amber-400/20 rounded-full group-hover:bg-amber-400/30 transition-colors">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium">hello@focusflix.in</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>

                <div className="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="p-2 bg-amber-400/20 rounded-full">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Delhi, India</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/919910553381?text=I%20would%20like%20to%20get%20a%20quote%20for%20my%20event." 
                target="_blank"
                className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-400/25"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px" />
          <div className="mx-6 h-px bg-white/10" />
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} Focus Flix. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              </div>
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </div>
    </footer>
  )
}

export default Footer