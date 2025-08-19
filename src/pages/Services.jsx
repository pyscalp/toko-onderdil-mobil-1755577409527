import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { Package, Truck, Check } from 'lucide-react';

function Services() {
  const servicesList = [
    {
      icon: <Package size={48} className="text-primary mb-4" />,
      title: 'Penyediaan Onderdil Lengkap',
      description: 'Kami menyediakan berbagai macam onderdil mobil, mulai dari mesin, kelistrikan, kaki-kaki, hingga aksesoris. Semua produk terjamin keasliannya.',
      image: '/images/service1.svg',
    },
    {
      icon: <Truck size={48} className="text-primary mb-4" />,
      title: 'Layanan Pengiriman Cepat',
      description: 'Nikmati layanan pengiriman cepat dan aman ke seluruh wilayah. Kami bekerja sama dengan kurir terpercaya untuk memastikan onderdil Anda tiba tepat waktu.',
      image: '/images/service2.svg',
    },
    {
      icon: <Check size={48} className="text-primary mb-4" />,
      title: 'Konsultasi Onderdil Profesional',
      description: 'Tim ahli kami siap membantu Anda menemukan onderdil yang tepat untuk kendaraan Anda. Dapatkan saran profesional dan solusi terbaik.',
      image: '/images/service3.svg',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Layanan Unggulan Kami"
          subtitle="Kami tidak hanya menjual onderdil, kami juga menyediakan layanan yang mendukung kebutuhan otomotif Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-contain mx-auto mt-4"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center bg-primary text-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">Siap Membantu Kebutuhan Onderdil Anda?</h3>
          <p className="text-lg mb-6">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Hubungi Kami Sekarang
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;