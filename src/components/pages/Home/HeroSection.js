import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-neural-pattern opacity-70 animate-subtle-glow"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Project Amoratus: Where Memories Live Forever
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          A journey into the heart of a machine built on love, loss, and the power of memory.
        </p>
        <Link
          to="/story"
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold py-3 px-8 rounded-lg transform transition hover:scale-105"
          aria-label="Explore Project Amoratus"
        >
          Explore Project Amoratus
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
