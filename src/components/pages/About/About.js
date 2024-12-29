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
        <section className="mb-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 pr-8 mb-6 md:mb-0">
            <img
              src="/images/greg-reeves-placeholder.jpg" // Placeholder image added
              alt="Greg Reeves"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-white mb-4">Meet Greg Reeves</h2>
            <p className="text-lg mb-4">
              Greg Reeves is the visionary behind Project Amoratus. With a background in music as the lead guitarist for the band "Digital Ghosts," Greg transitioned into technology driven by personal loss and a quest to preserve memories that matter most. His unique blend of artistic creativity and technical expertise has been instrumental in developing the sophisticated systems at the core of Project Amoratus.
            </p>
            <p className="text-lg">
              Beyond his technical prowess, Greg is known for his deep empathy and relentless pursuit of knowledge. His personal experiences have shaped the emotional core of Project Amoratus, ensuring that the technology not only advances scientific boundaries but also touches the human spirit. Greg's dedication to his family and his ability to merge emotion with innovation make him a remarkable figure in both the technological and personal realms.
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