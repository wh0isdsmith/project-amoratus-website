import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 pt-20">
      <main className="container mx-auto px-4 py-8 text-gray-300">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About Project Amoratus</h1>
        <section className="mb-8">
          <p className="text-lg">
            Project Amoratus is a deeply personal endeavor by Greg Reeves, a former musician turned tech whiz. Driven by a desire to preserve his most cherished memories, Greg built a revolutionary system that blends quantum computing, neural networks, and augmented reality. This is a journey into the heart of a machine built on love, loss, and the enduring power of memory.
          </p>
        </section>
        <section className="mb-8 flex items-center">
          <div className="w-1/3 pr-8">
            <img
              src="/images/greg-reeves.jpg"
              alt="Greg Reeves"
              className="rounded-lg"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-semibold text-white mb-4">Meet Greg Reeves</h2>
            <p className="text-lg">
              Greg Reeves is the visionary behind Project Amoratus. With a background in music and technology, Greg's unique perspective has driven him to create a system that transcends traditional boundaries. His dedication to preserving memories and exploring the depths of human emotion through technology is at the core of Project Amoratus.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-lg">
            For inquiries or more information about Project Amoratus, please contact us at{' '}
            <a
              href="mailto:info@projectamoratus.com"
              className="text-yellow-400 hover:text-yellow-300"
            >
              info@projectamoratus.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;