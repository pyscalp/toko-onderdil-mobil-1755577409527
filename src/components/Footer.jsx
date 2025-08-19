import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-secondary text-white p-8 mt-12"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">OnderdilKu</h3>
          <p className="text-sm">
            Solusi terbaik untuk kebutuhan onderdil mobil Anda. Kualitas terjamin, harga bersaing.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent transition-colors duration-300">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors duration-300">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors duration-300">Layanan</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Jl. Onderdil No. 123, Kota Otomotif
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> (021) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@onderdilku.com
            </li>
            <li className="flex items-center gap-2">
              <Globe size={18} /> www.onderdilku.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-indigo-700 mt-8 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} OnderdilKu. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;