'use client'

import Image from 'next/image'

const images = [
  '/images/herosix.jpg',
  '/images/herotwo.png',
  '/images/herothree.png',
  '/images/herofour.png',
  '/images/herofive.jpg',
]

const InfiniteGallery = () => {
  return (
    <div className="overflow-hidden w-full bg-[#0d0d0d]">
      <div className="relative w-max animate-slide flex gap-2 md:gap-6">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="md:min-w-[200px] md:h-[200px] h-[150px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-amber-400">
            <Image
              src={img}
              alt={`Gallery ${index}`}
              width={300}
              height={200}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default InfiniteGallery
