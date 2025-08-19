import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

function Gallery() {
  const galleryImages = [
    { id: 1, src: '/images/gallery1.svg', alt: 'Mesin Mobil' },
    { id: 2, src: '/images/gallery2.svg', alt: 'Sistem Rem' },
    { id: 3, src: '/images/gallery3.svg', alt: 'Kelistrikan Mobil' },
    { id: 4, src: '/images/gallery4.svg', alt: 'Suspensi Mobil' },
    { id: 5, src: '/images/product1.svg', alt: 'Filter Udara' },
    { id: 6, src: '/images/product2.svg', alt: 'Busi Mobil' },
    { id: 7, src: '/images/product3.svg', alt: 'Kampas Rem' },
    { id: 8, src: '/images/product4.svg', alt: 'Oli Mesin' },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Galeri Produk Kami"
          subtitle="Jelajahi koleksi onderdil mobil berkualitas tinggi yang kami sediakan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;