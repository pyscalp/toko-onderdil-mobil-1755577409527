import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-center gap-4">
                <Phone size={24} className="text-accent" />
                <div>
                  <span className="font-semibold">Telepon:</span>
                  <p>(021) 123-4567</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-accent" />
                <div>
                  <span className="font-semibold">Email:</span>
                  <p>info@onderdilku.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={24} className="text-accent" />
                <div>
                  <span className="font-semibold">Alamat:</span>
                  <p>Jl. Onderdil No. 123, Blok A-B, Kota Otomotif, 12345</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={24} className="text-accent" />
                <div>
                  <span className="font-semibold">Jam Operasional:</span>
                  <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                  <p>Sabtu: 08:00 - 14:00 WIB</p>
                  <p>Minggu: Tutup</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan Kepada Kami</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-primary mb-6">Lokasi Kami</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.388701890069!2d106.827137314769!3d-6.21287999550389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40e0b0e0b0b%3A0x123456789abcdef!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Toko Onderdil Mobil"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;