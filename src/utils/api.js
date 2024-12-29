export const fetchJournalEntries = async () => {
  try {
    const response = await fetch('/data/journalEntries.json');
    if (!response.ok) throw new Error('Failed to fetch journal entries');
    return await response.json();
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    return [];
  }
};

export const fetchCharacterProfiles = async () => {
  try {
    const response = await fetch('/data/characterProfiles.json');
    if (!response.ok) throw new Error('Failed to fetch character profiles');
    return await response.json();
  } catch (error) {
    console.error('Error fetching character profiles:', error);
    return [];
  }
};
