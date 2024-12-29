import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-neural-pattern bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-subtle-glow">
        Welcome to Project Amoratus
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        A fusion of love, loss, memory, and advanced technology. Dive into the immersive world crafted by Greg Reeves.
      </p>
      <Link to="/technology" className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
        Explore Technology
      </Link>
    </section>
  );
};

export default HeroSection;
