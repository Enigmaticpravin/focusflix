'use client'

import Image from 'next/image'

const images = [
  '/images/galone.jpg',
  '/images/galtwo.jpg',
  '/images/galthree.jpg',
  '/images/herofour.png',
  '/images/herofive.jpg',
  '/images/galfour.jpg',
  '/images/galfive.jpg',
  '/images/galsix.jpg',
    '/images/galseven.jpg',
      '/images/galeight.jpg',
]

const ResponsivePhotoGrid = () => {
  return (
    <div className="w-full bg-[#0d0d0d] px-4 scroll-mt-40" id='gallery'>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border-2 border-amber-400 shadow-lg group"
          >
            <Image
              src={img}
              alt={`Gallery ${index}`}
              width={300}
              height={200}
              className="w-full h-50 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResponsivePhotoGrid
