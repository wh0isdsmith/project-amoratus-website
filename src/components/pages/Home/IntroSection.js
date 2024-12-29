import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Welcome to Project Amoratus
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-prose mx-auto">
          Project Amoratus is a deeply personal endeavor by Greg Reeves, a
          former musician turned tech whiz. Driven by a desire to preserve his
          most cherished memories, Greg built a revolutionary system that
          blends quantum computing, neural networks, and augmented reality.
          This is a journey into the heart of a machine built on love, loss, and
          the enduring power of memory.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;