import React from 'react';

const InfiniteGallery = () => {

  const sampleImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop'
  ];

  const GalleryRow = ({ images, direction, duration = 30 }) => {

    const tripleImages = [...images, ...images, ...images];
    
    return (
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div 
          className={`flex gap-6 ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}
          style={{
            animationDuration: `${duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            width: 'max-content'
          }}
        >
          {tripleImages.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <img
                  src={img}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-72 h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style jsx global>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation-name: slide-left;
        }

        .animate-slide-right {
          animation-name: slide-right;
        }
      `}</style>
      
      <div className="min-h-screen overflow-hidden">
        {/* Header */}
       
        <div className="space-y-8">
          {/* Row 1: Left to Right */}
          <GalleryRow images={sampleImages} direction="left" duration={35} />
          
          {/* Row 2: Right to Left */}
          <GalleryRow images={sampleImages} direction="right" duration={40} />
          
          {/* Row 3: Left to Right */}
          <GalleryRow images={sampleImages} direction="left" duration={32} />
          
          {/* Row 4: Right to Left */}
          <GalleryRow images={sampleImages} direction="right" duration={38} />
        </div>

      </div>
    </>
  );
};

export default InfiniteGallery;