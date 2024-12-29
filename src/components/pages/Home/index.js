import React from 'react';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import FeaturedCards from './FeaturedCards';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 pt-20">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <IntroSection />
        <FeaturedCards />
      </main>
    </div>
  );
};

export default Home;
