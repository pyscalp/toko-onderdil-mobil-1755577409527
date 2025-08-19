import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Filter Udara Premium',
      description: 'Meningkatkan performa mesin dan efisiensi bahan bakar.',
      price: 'Rp 150.000',
      image: '/images/product1.svg',
    },
    {
      id: 2,
      name: 'Busi Iridium Set',
      description: 'Pembakaran lebih sempurna, awet dan tahan lama.',
      price: 'Rp 280.000',
      image: '/images/product2.svg',
    },
    {
      id: 3,
      name: 'Kampas Rem Keramik',
      description: 'Pengereman halus dan minim debu, performa maksimal.',
      price: 'Rp 450.000',
      image: '/images/product3.svg',
    },
    {
      id: 4,
      name: 'Oli Mesin Sintetik',
      description: 'Perlindungan optimal untuk mesin modern.',
      price: 'Rp 120.000',
      image: '/images/product4.svg',
    },
  ];

  return (
    <div className="pt-16">
      <Hero />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Produk Unggulan Kami"
            subtitle="Temukan onderdil mobil terbaik yang kami tawarkan, dipilih khusus untuk kualitas dan performa."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Mengapa Memilih Kami?"
            subtitle="Kami berkomitmen untuk memberikan yang terbaik bagi kendaraan Anda."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 rounded-lg shadow-md bg-blue-50"
            >
              <img src="/images/check.svg" alt="Kualitas Terjamin" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Produk asli dan bergaransi dari merek terkemuka.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 rounded-lg shadow-md bg-blue-50"
            >
              <img src="/images/truck.svg" alt="Pengiriman Cepat" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pesanan Anda akan sampai dengan aman dan tepat waktu.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 rounded-lg shadow-md bg-blue-50"
            >
              <img src="/images/users.svg" alt="Layanan Pelanggan" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Layanan Pelanggan</h3>
              <p className="text-gray-600">Tim kami siap membantu Anda dengan ramah dan profesional.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;