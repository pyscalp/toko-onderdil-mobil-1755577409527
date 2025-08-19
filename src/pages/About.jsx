import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Tentang OnderdilKu"
          subtitle="Dedikasi kami untuk menyediakan onderdil mobil terbaik sejak tahun 2005."
        />

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              src="/images/about.svg"
              alt="Tentang Kami"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-gray-700"
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Visi & Misi Kami</h3>
            <p className="mb-4 leading-relaxed">
              OnderdilKu didirikan dengan visi untuk menjadi pusat onderdil mobil terkemuka yang menyediakan produk berkualitas tinggi dan layanan pelanggan yang tak tertandingi. Kami percaya bahwa setiap kendaraan berhak mendapatkan onderdil terbaik untuk performa dan keamanan optimal.
            </p>
            <p className="leading-relaxed">
              Misi kami adalah untuk terus memperluas jangkauan produk, memastikan ketersediaan onderdil langka, dan memberikan pengalaman berbelanja yang mudah dan menyenangkan bagi setiap pelanggan. Kami berinvestasi dalam teknologi dan sumber daya manusia untuk mencapai tujuan ini.
            </p>
          </motion.div>
        </div>

        <SectionHeader
          title="Nilai-Nilai Kami"
          subtitle="Prinsip yang memandu setiap langkah dan keputusan kami."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-primary mb-3">Integritas</h4>
            <p className="text-gray-600">Berbisnis dengan jujur dan transparan.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-primary mb-3">Kualitas</h4>
            <p className="text-gray-600">Hanya menyediakan produk terbaik.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-primary mb-3">Pelanggan</h4>
            <p className="text-gray-600">Kepuasan pelanggan adalah prioritas utama.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;