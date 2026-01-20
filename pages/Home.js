import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../lib/data';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section - Asymmetric Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] min-h-[80vh] w-full">
        <div className="relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
        </div>
        <div className="bg-[#f9f9f9] p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4 block">Spring / Summer 2024</span>
            <h1 className="text-5xl font-bold tracking-tighter leading-[0.9] mb-8">
              ESSENCE <br /> OF FORM
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-xs">
              Exploring the intersection of architectural silhouettes and fluid textiles.
            </p>
            <Link 
              to="/shop"
              className="inline-block px-10 py-4 bg-black text-white text-xs uppercase tracking-widest rounded-[6px] hover:bg-gray-800 transition-colors"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-24 px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-2xl font-bold tracking-tighter uppercase">Featured Pieces</h2>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-100">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover"
            alt="Editorial"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 max-w-xs text-center rounded-[6px]">
              <h3 className="font-bold uppercase tracking-tighter mb-2">The Materiality</h3>
              <p className="text-xs text-gray-600">Sustainable sourcing meets avant-garde construction.</p>
            </div>
          </div>
        </div>
        <div className="aspect-square relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover"
            alt="Editorial"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white/90 backdrop-blur-sm p-8 max-w-xs text-center rounded-[6px]">
              <h3 className="font-bold uppercase tracking-tighter mb-2">Craftsmanship</h3>
              <p className="text-xs text-gray-600">Every stitch is a testament to our legacy of quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}