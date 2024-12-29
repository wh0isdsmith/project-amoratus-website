import React, { useState, useEffect } from 'react';
import { fetchJournalEntries } from '../../../utils/api';
import 'path-to-handwriting-font.css'; // Ensure handwriting font is imported

const Journal = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null); // Add error state
  const [dateRange, setDateRange] = useState({ start: '', end: '' }); // Add date range state

  useEffect(() => {
    const getJournalEntries = async () => {
      try {
        const data = await fetchJournalEntries();
        setEntries(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch journal entries. Please try again later.');
      }
    };
    getJournalEntries();
  }, []);

  const filteredEntries = entries.filter(entry => {
    const matchesCategory = filter === 'All' || entry.category === filter;
    const matchesSearch = entry.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStartDate = dateRange.start ? new Date(entry.date) >= new Date(dateRange.start) : true;
    const matchesEndDate = dateRange.end ? new Date(entry.date) <= new Date(dateRange.end) : true;
    return matchesCategory && matchesSearch && matchesStartDate && matchesEndDate;
  });

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

          {/* Date Range Filtering */}
          <label htmlFor="startDate" className="block text-lg font-medium text-white">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="block w-full md:w-auto p-2 bg-gray-800 text-white rounded-md"
          />
          <label htmlFor="endDate" className="block text-lg font-medium text-white">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="block w-full md:w-auto p-2 bg-gray-800 text-white rounded-md"
          />

          <input
            type="text"
            placeholder="Search in journal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full md:w-auto p-2 bg-gray-800 text-white rounded-md"
          />
        </div>

        <section>
          {/* Display error message if fetch fails */}
          {error && (
            <div className="mb-6 p-4 bg-red-800 text-white rounded-lg">
              <p>{error}</p>
            </div>
          )}

          {filteredEntries.map((entry, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 journal-entry">
              <h2 className="text-2xl font-bold text-white mb-2 journal-entry__title">{entry.category}</h2>
              <p className="text-sm text-gray-400 mb-2 journal-entry__date">{entry.date}</p>
              <p className="text-lg journal-entry__content">{entry.content}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Journal;