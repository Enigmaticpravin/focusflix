// pages/gallery/[category].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import logo from '@/../public/images/Focus Flix.png'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, X, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const imageData = {
  wedding: [
    { id: 1, src: '/images/wedding/wedding1.jpg', alt: 'Beautiful Wedding Ceremony', width: 800, height: 600 },
    { id: 2, src: '/images/wedding/wedding2.jpg', alt: 'Bride and Groom Portrait', width: 800, height: 600 },
    { id: 3, src: '/images/wedding/wedding3.JPG', alt: 'Wedding Reception Dance', width: 800, height: 600 },
    { id: 4, src: '/images/wedding/wedding4.JPG', alt: 'Exchange of Vows', width: 800, height: 600 },
    { id: 5, src: '/images/wedding/wedding5.JPG', alt: 'Wedding Party Group Photo', width: 800, height: 600 },
    { id: 6, src: '/images/wedding/wedding6.jpg', alt: 'Romantic Couple Shot', width: 800, height: 600 },
    { id: 7, src: '/images/wedding/wedding7.jpg', alt: 'Wedding Cake Cutting', width: 800, height: 600 },
    { id: 8, src: '/images/wedding/wedding8.JPG', alt: 'First Dance Moment', width: 800, height: 600 },
  ],
  'pre-wedding': [
    { id: 1, src: '/images/pre-wedding/pre-wedding-1.jpg', alt: 'Romantic Outdoor Session', width: 800, height: 600 },
    { id: 2, src: '/images/pre-wedding/pre-wedding-2.jpg', alt: 'Sunset Couple Portrait', width: 800, height: 600 },
    { id: 3, src: '/images/pre-wedding/pre-wedding-3.jpg', alt: 'Casual Fun Moments', width: 800, height: 600 },
    { id: 4, src: '/images/pre-wedding/pre-wedding-4.jpg', alt: 'Intimate Close-up Shot', width: 800, height: 600 },
    { id: 5, src: '/images/pre-wedding/pre-wedding-5.jpg', alt: 'Beach Romance Session', width: 800, height: 600 },
    { id: 6, src: '/images/pre-wedding/pre-wedding-6.jpg', alt: 'Garden Love Story', width: 800, height: 600 },
      { id: 7, src: '/images/pre-wedding/pre-wedding-7.jpg', alt: 'Garden Love Story', width: 800, height: 600 },
    { id: 8, src: '/images/pre-wedding/pre-wedding-8.jpg', alt: 'Cityscape Couple Shot', width: 800, height: 600 },
  ],
  events: [
    { id: 1, src: '/images/events/event-1.JPG', alt: 'Corporate Event Photography', width: 800, height: 600 },
    { id: 2, src: '/images/events/event-2.JPG', alt: 'Birthday Party Celebration', width: 800, height: 600 },
    { id: 3, src: '/images/events/event-3.JPG', alt: 'Conference and Seminars', width: 800, height: 600 },
    { id: 4, src: '/images/events/event-4.jpg', alt: 'Social Gathering Moments', width: 800, height: 600 },
    { id: 5, src: '/images/events/event-5.JPG', alt: 'Festival and Cultural Events', width: 800, height: 600 },
    { id: 6, src: '/images/events/event-6.JPG', alt: 'Award Ceremony Coverage', width: 800, height: 600 },
    { id: 7, src: '/images/events/event-7.JPG', alt: 'Concert and Live Events', width: 800, height: 600 },
    { id: 8, src: '/images/events/event-8.JPG', alt: 'Family Reunion Photography', width: 800, height: 600 },
  ],
  maternity: [
    { id: 1, src: '/images/maternity/maternity-1.JPG', alt: 'Beautiful Expectant Mother', width: 800, height: 600 },
    { id: 2, src: '/images/maternity/maternity-2.JPG', alt: 'Couple Maternity Session', width: 800, height: 600 },
    { id: 3, src: '/images/maternity/maternity-3.JPG', alt: 'Outdoor Maternity Portrait', width: 800, height: 600 },
    { id: 4, src: '/images/maternity/maternity-4.JPG', alt: 'Studio Maternity Shoot', width: 800, height: 600 },
    { id: 5, src: '/images/maternity/maternity-5.JPG', alt: 'Family Maternity Photos', width: 800, height: 600 },
    { id: 6, src: '/images/maternity/maternity-6.JPG', alt: 'Maternity with Props', width: 800, height: 600 },
  ],
  'baby-shoot': [
    { id: 1, src: '/images/baby-shoot/baby-1.JPG', alt: 'Newborn Baby Portrait', width: 800, height: 600 },
    { id: 2, src: '/images/baby-shoot/baby-2.JPG', alt: 'Baby with Parents', width: 800, height: 600 },
    { id: 3, src: '/images/baby-shoot/baby-3.JPG', alt: 'Cute Baby Expressions', width: 800, height: 600 },
    { id: 4, src: '/images/baby-shoot/baby-4.JPG', alt: 'Baby Milestone Photos', width: 800, height: 600 },
    { id: 5, src: '/images/baby-shoot/baby-5.JPG', alt: 'Sibling with New Baby', width: 800, height: 600 },
    { id: 6, src: '/images/baby-shoot/baby-6.JPG', alt: 'Baby in Creative Props', width: 800, height: 600 },
  ],
};

const categoryTitles = {
  wedding: 'Wedding Photography',
  'pre-wedding': 'Pre-Wedding Sessions',
  events: 'Event Photography',
  maternity: 'Maternity Photography',
  'baby-shoot': 'Baby Photography',
};

export default function CategoryGallery() {
  const router = useRouter();
  const { category } = router.query;
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category && imageData[category]) {
      setImages(imageData[category]);
      setLoading(false);
    } else if (category) {
      setImages([]);
      setLoading(false);
    }
  }, [category]);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedIndex < images.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const prevImage = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(images[newIndex]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, selectedIndex]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  if (!category || !imageData[category]) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Category Not Found</h1>
          <p className="text-gray-300 mb-8">The requested category does not exist.</p>
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">

<Navbar logo={logo} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {images.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <div className="aspect-w-4 aspect-h-3 relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
                <div className="absolute inset-0 ring-1 ring-yellow-400/20 rounded-xl group-hover:ring-yellow-400/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full View Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-full mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {selectedIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {selectedIndex < images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image Container */}
            <div className="relative max-h-[90vh] flex items-center justify-center p-4">
              <div className="relative max-w-6xl max-h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{selectedImage.alt}</h3>
                  <p className="text-gray-300 text-sm">{categoryTitles[category]}</p>
                </div>
                <div className="text-yellow-400 text-sm">
                  {selectedIndex + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Optional: Add getStaticPaths and getStaticProps for better SEO and performance
export async function getStaticPaths() {
  const categories = Object.keys(imageData);
  const paths = categories.map(category => ({
    params: { category }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  
  if (!imageData[category]) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      category,
      images: imageData[category],
      title: categoryTitles[category]
    }
  };
}