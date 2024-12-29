import React, { useState, useEffect } from 'react';
import { fetchJournalEntries } from '../../../utils/api';

const Journal = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getJournalEntries = async () => {
      const data = await fetchJournalEntries();
      setEntries(data);
    };
    getJournalEntries();
  }, []);

  const filteredEntries = filter === 'All'
    ? entries.filter(entry => entry.content.toLowerCase().includes(searchQuery.toLowerCase()))
    : entries.filter(entry =>
        entry.category === filter &&
        entry.content.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 pt-20">
      <main className="container mx-auto px-4 py-8 text-gray-300">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Greg's Journal</h1>
        <div className="mb-4 flex flex-wrap gap-4 items-center">
          <label htmlFor="filter" className="block text-lg font-medium text-white">
            Filter by Category:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full md:w-auto p-2 bg-gray-800 text-white rounded-md"
          >
            <option value="All">All</option>
            <option value="Technical Observations">Technical Observations</option>
            <option value="Emotional Calibration">Emotional Calibration</option>
            <option value="Personal Reflections">Personal Reflections</option>
            <option value="Anomalous Behaviors">Anomalous Behaviors</option>
          </select>
          <input
            type="text"
            placeholder="Search in journal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full md:w-auto p-2 bg-gray-800 text-white rounded-md"
          />
        </div>
        <section>
          {filteredEntries.map((entry, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{entry.category}</h2>
              <p className="text-sm text-gray-400 mb-2">{entry.date}</p>
              <p className="text-lg">{entry.content}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Journal;