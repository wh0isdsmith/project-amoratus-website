import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, to, image }) => (
  <Link to={to}>
    <div className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 flex flex-col items-center">
      {image && (
        <div className="w-full h-48 mb-4 flex justify-center items-center">
          {image}
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2 mt-2">{title}</h3>
      <p className="text-gray-300 mb-4 text-center">{description}</p>
      <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
        Learn More →
      </button>
    </div>
  </Link>
);

const FeaturedCards = () => {
  const cards = [
    {
      title: 'The Story',
      description: 'Discover the emotional journey of Greg Reeves and the creation of Project Amoratus.',
      to: '/story',
      image: <img src="/images/story-card-image.jpg" alt="Image representing the story of Project Amoratus" className="w-full h-full object-cover rounded-lg" />,
    },
    {
      title: 'The Technology',
      description: 'Explore the groundbreaking technologies behind Project Amoratus, from quantum computing to neural interfaces.',
      to: '/technology',
      image: <img src="/images/technology-card-image.jpg" alt="Image representing the advanced technology powering Project Amoratus" className="w-full h-full object-cover rounded-lg" />,
    },
    {
      title: "Greg's Journal",
      description: 'Delve into the personal notes and technical logs of Greg Reeves, the creator of Project Amoratus.',
      to: '/journal',
      image: <img src="/images/journal-card-image.jpg" alt="Image representing Greg's personal notes and logs" className="w-full h-full object-cover rounded-lg" />,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
};

export default FeaturedCards;
