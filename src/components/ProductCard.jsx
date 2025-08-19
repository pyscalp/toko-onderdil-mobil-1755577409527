import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">{product.price}</span>
          <button className="bg-accent hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors duration-300">
            <ShoppingCart size={16} /> Beli
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;