import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../lib/data';
import { useCart } from '../lib/store';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) return <div className="pt-32 px-6 text-center">Product not found.</div>;

  return (
    <div className="pt-24 px-6">
      <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity">
        <ArrowLeft size={14} /> Back to Shop
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-[6px]"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{product.category}</span>
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-8">${product.price}</p>
          
          <div className="border-t border-b border-gray-100 py-8 mb-8">
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
             <button 
              onClick={() => addToCart(product)}
              className="w-full py-4 bg-black text-white text-xs uppercase tracking-widest rounded-[6px] hover:bg-gray-800 transition-colors"
            >
              Add to Shopping Bag
            </button>
            <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">Complimentary standard shipping on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}