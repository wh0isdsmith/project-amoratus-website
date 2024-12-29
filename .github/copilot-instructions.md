# GitHub Copilot Custom Instructions: Project Amoratus Website

This file provides custom instructions for GitHub Copilot to tailor its assistance to the specific needs and constraints of the Project Amoratus Website project.

## Project-Specific Context

"Project Amoratus Website" is a web application that brings to life the fictional world of Project Amoratus, a deeply personal endeavor by the character Greg Reeves. The project explores themes of love, loss, memory, and the ethical implications of advanced technology. The website aims to create an immersive and engaging experience for users by presenting both the technical details of the project (quantum computing, neural networks, AR/VR) and the emotional story of its creator. Key features include a simulated GregOS interface, interactive exploration of technical documents, and a narrative-driven design. The visual style is clean, modern, and slightly futuristic, with a color palette of blues, purples, and soft yellows.

## Coding Style and Conventions

*   **Language:** JavaScript
*   **Framework:** React
*   **Component Style:** React functional components with hooks.
*   **Styling:** Tailwind CSS
*   **State Management:** Context API with `useReducer`
*   **Formatting:**
    *   Indentation: 2 spaces
    *   Quotes: single quotes
    *   Spacing: spaces around operators, after keywords
*   **Naming Conventions:**
    *   Components: PascalCase (e.g., `HomePage`, `QuantumMindDiagram`)
    *   Files: camelCase (e.g., `homePage.js`, `quantumMindDiagram.js`)
    *   Variables and Functions: camelCase (e.g., `handleClick`, `fetchJournalEntries`)
    *   CSS Classes: BEM with kebab-case (e.g., `journal-entry__title`, `button--primary`)
*   **Comments:** Use comments to explain complex logic, the purpose of functions, and the reasoning behind design choices.
*   **Error Handling:** Handle errors gracefully using try-catch blocks where appropriate. Log errors to the console during development.
*   **Accessibility:** Adhere to WCAG 2.1 Level AA guidelines. Use semantic HTML, ARIA attributes, and ensure keyboard navigability.

## Development Environment Constraints

*   We are using a **Local Development Environment**
*   There are **NO CONSTRAINTS** in the local development environment.

## Test Generation Instructions

*   **Framework:** Jest and React Testing Library
*   **Focus:** Prioritize testing component behavior, interactions, and edge cases. Ensure that components render correctly and respond to user interactions as expected.
*   **Coverage:** Aim for high test coverage, particularly for complex components and utility functions.
*   **Test Files:** Name test files as `[ComponentName].test.js` and place them in the same directory as the component they are testing.

## Code Review Instructions

*   **Accessibility:** Ensure that all UI elements are accessible, with appropriate ARIA attributes, keyboard navigation support, and sufficient color contrast.
*   **Coding Style:** Verify that the code adheres to the project's coding style and conventions (formatting, naming, comments).
*   **Performance:** Look for potential performance bottlenecks, such as unnecessary re-renders or large data sets being processed inefficiently.
*   **Error Handling:** Ensure that errors are handled gracefully and that the application does not crash unexpectedly.
*   **Security:** N/A for this project.
*   **Maintainability:** Ensure the code is modular, well-structured, and easy to understand.

## Commit Message Instructions

*   **Format:** Use imperative mood in the subject line (e.g., "Add feature X," "Fix bug Y"). Keep the subject line under 50 characters.
*   **Subject Line Length:** Under 50 characters.
*   **Body:** Provide a more detailed description of the changes in the commit message body, if necessary. Explain the motivation for the change and any relevant context.
*   **References:** If applicable, reference related issues or pull requests using their numbers (e.g., "Fixes #123").

## Specific to Project Amoratus Website

*   When generating code for components that display technical information (e.g., `TechnologyPage`, `QuantumMindDiagram`), ensure that the content is accurate according to the project documentation and presented in a visually engaging way.
*   If the generated code involves simulating elements of the GregOS interface, make sure it aligns with the overall aesthetic and functionality described in the project documentation.
*   Use the `journal-entry` and `character-profile` CSS classes (and their variations) to style content related to journal entries and character profiles, respectively.
*   Prioritize the use of Tailwind CSS utility classes for styling.
*   When working with state, prefer the use of the Context API with `useReducer` for global state and `useState` for local component state.
*   For data fetching, use the `fetch` API and the utility functions provided in `src/utils/api.js`.
*   Remember that this project has an emotional core. When generating code or content, consider how it contributes to the overall narrative and the themes of love, loss, and memory.

## Examples

**Example 1: Generating a new React component:**

```javascript
// src/components/pages/Story/StoryPage.js
import React from 'react';

// Create a functional component called StoryPage that displays the main narrative of Project Amoratus.
// Fetch the story content from a local JSON file (e.g., 'storyData.json') in the 'src/data' directory.
// Use Tailwind CSS classes for styling, and divide the story into sections based on the data.
// Add appropriate headings and paragraphs to structure the content.
const StoryPage = () => {
    // Your code here, and Copilot will assist based on the comment above
};

export default StoryPage;
```

**Example 2: Implementing a specific function:**

```javascript
// src/utils/api.js

/**
 * Fetches journal entries from a local JSON file.
 * Returns an array of journal entry objects.
 * Handles errors by logging them to the console and returning an empty array.
 */
export const fetchJournalEntries = async () => {
  // Your code here, Copilot will use the JSDoc comment for guidance
};
```

**Example 3: Adding a CSS animation in Tailwind:**

```javascript
// src/components/common/Button.js
import React from 'react';

// Create a Button component that uses Tailwind CSS for styling.
// Add a hover effect that slightly increases the button's scale and changes its background color.
const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

**Example 4: Using `localStorage` for data persistence:**

```javascript
// src/utils/storageUtils.js

// Create a function to save the user's current section in the Story page to localStorage.
// The function should take the section name (a string) as an argument.
export const saveCurrentSection = (sectionName) => {
    // Your code here
};

// Create a function to load the user's current section in the Story page from localStorage.
// It should return null if no section is found.
export const loadCurrentSection = () => {
    // Your code here
};
```

**Example 5: Implementing State Management with Context API and useReducer:**

```javascript
// src/context/ThemeContext.js
import React, { createContext, useReducer } from 'react';

// Create a ThemeContext using createContext.
export const ThemeContext = createContext();

// Define the initial state for the theme (e.g., light or dark).
const initialState = {
  mode: 'light',
};

// Create a reducer function that handles a 'TOGGLE_THEME' action.
const themeReducer = (state, action) => {
  // Your code here
};

// Create a ThemeProvider component that uses useReducer and provides the theme state and dispatch to its children.
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

**Example 6: Writing a test with React Testing Library:**

```javascript
// src/components/pages/Journal/JournalPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JournalPage from './JournalPage';

// Mock the api module
jest.mock('../../../utils/api');

// Test that JournalPage renders correctly with journal entries.
test('renders JournalPage with entries', async () => {
  // Mock the return value of fetchJournalEntries
  const mockEntries = [
    { id: 1, date: '2023-10-26', content: 'Entry 1', category: 'Technical' },
    { id: 2, date: '2023-10-27', content: 'Entry 2', category: 'Personal' },
  ];
  require('../../../utils/api').fetchJournalEntries.mockResolvedValue(mockEntries);

  render(<JournalPage />);

  // Wait for the entries to be displayed
  const entry1 = await screen.findByText(/Entry 1/i);
  const entry2 = await screen.findByText(/Entry 2/i);

  expect(entry1).toBeInTheDocument();
  expect(entry2).toBeInTheDocument();
});
```
