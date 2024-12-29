import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCards = () => {
  const cards = [
    {
      title: 'Technology',
      description: 'Explore the cutting-edge technologies behind Project Amoratus.',
      link: '/technology',
      image: '/images/technology-feature.jpg',
    },
    {
      title: 'Journal',
      description: 'Dive into Greg Reeves\' personal journal and his journey.',
      link: '/journal',
      image: '/images/journal-feature.jpg',
    },
    {
      title: 'Story',
      description: 'Uncover the emotional and narrative-driven story of Project Amoratus.',
      link: '/story',
      image: '/images/story-feature.jpg',
    },
    {
      title: 'About',
      description: 'Learn more about Greg Reeves and the vision behind Project Amoratus.',
      link: '/about',
      image: '/images/about-feature.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Link to={card.link} key={index} className="transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={card.image} alt={`${card.title} Feature`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCards;
