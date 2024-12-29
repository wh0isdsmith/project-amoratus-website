# Architectural Notes: Project Amoratus Website

This document outlines the key architectural decisions, technical considerations, and development strategies for the Project Amoratus website.

## 1. Overview

The Project Amoratus website is designed to be an immersive and informative experience that brings the fictional world of Project Amoratus to life. It serves as a portal into the story of Greg Reeves and his creation, blending technical details with a compelling personal narrative. The website's architecture prioritizes a clean, modular design, enabling maintainability and future expansion. Key design principles include:

*   **Narrative-Driven Design:** The architecture should support a strong narrative flow, guiding the user through Greg's story and the project's technical aspects.
*   **Immersive Experience:** The design should aim to create an immersive experience, drawing users into the world of Project Amoratus through visual design, interactive elements, and potentially simulated OS features.
*   **Accessibility:** The website must be accessible to all users, adhering to WCAG guidelines.
*   **Maintainability:** The architecture should be modular and well-structured to facilitate ongoing development and updates.

## 2. Technology Stack

### 2.1 Frontend Framework: React

**Rationale:**

*   **Component-based architecture:** React's component-based approach aligns well with the project's modular design and facilitates code reusability.
*   **Performance:** React's virtual DOM and efficient rendering contribute to a smooth and responsive user experience.
*   **Community support:** React has a large and active community, providing ample resources, support, and third-party libraries.
*   **Ecosystem:** React's ecosystem offers a wide range of tools and libraries for state management, styling, and testing.
*   **Familiarity:**  I am most familiar and comfortable using React.

### 2.2 State Management: Context API & useReducer

**Rationale:**

*   **Complexity of state management needs:** The project's state management needs are relatively straightforward, and the Context API combined with `useReducer` provides a sufficient solution without the added complexity of external libraries like Redux.
*   **Scalability:** For this project's scope, the Context API is scalable enough to manage the application's state effectively.
*   **Performance:** Using `useReducer` can help optimize performance by providing more control over state updates.
*   **Integration:** Built into React, so integration is seamless.

### 2.3 Styling: Tailwind CSS

**Rationale:**

*   **Development speed:** Tailwind's utility-first approach allows for rapid prototyping and styling.
*   **Maintainability:** Tailwind's consistent naming conventions and pre-defined classes promote maintainability.
*   **Customizability:** Tailwind is highly customizable through its configuration file.
*   **Performance:** Tailwind generates optimized CSS, minimizing the file size and improving loading times.

### 2.4 Data Fetching and Storage

*   **Data Fetching:** `fetch` API
    *   **Rationale:**  The built-in `fetch` API is sufficient for fetching data from local JSON files or potentially a simple backend in the future.
*   **Data Storage:** Local JSON files, potentially local storage for user preferences
    *   **Rationale:** Initially, the project's data (journal entries, character profiles, technical specs) can be stored in local JSON files. Local storage can be used to store user preferences or progress if needed.

### 2.5 Testing

*   **Unit Testing:** Jest
*   **Component Testing:** React Testing Library
*   **End-to-End Testing:** Cypress

### 2.6 Other Libraries

*   **react-router-dom:** For routing and navigation within the website.
*   **framer-motion:** For animations and transitions, enhancing the user experience.
*   **react-helmet-async:** For managing the document head (title, meta tags) for SEO.
*   **axios:** Might be considered if more complex data-fetching logic is required in the future.

## 3. Development Environment: Local Development

*   The development environment will be a standard local setup using Node.js and npm (or yarn).
*   **Constraints:** None
*   **Implications:** This allows for a flexible and efficient development process.

## 4. AI Assistants: Gemini and Copilot

### 4.1 Google Gemini - The "Software Architect"

*   **Role:** Gemini will serve as a high-level architectural consultant, providing guidance on design decisions, technology choices, and overall project structure. It will also assist in generating content outlines, brainstorming ideas, and refining the narrative.
*   **Integration:** Gemini will be consulted throughout the development process, primarily through interactive conversations and document reviews.

### 4.2 GitHub Copilot - The "Code Assistant"

*   **Role:** Copilot will assist with code generation, autocompletion, and refactoring, helping to accelerate the development process.
*   **Integration:** Copilot will be integrated directly into the VS Code editor, providing real-time code suggestions and assistance.
*   **Guidance:** Copilot will be guided through clear comments, well-defined function names, and existing code patterns to ensure that it generates relevant and accurate code.

## 5. Design Patterns and Conventions

### 5.1 Component-Based Architecture

*   The website will be structured as a collection of reusable React components.
*   Components will be designed to be modular, independent, and responsible for a single piece of UI or functionality.
*   Components will be organized into logical folders based on their purpose (e.g., `components/common`, `components/pages`, `components/layout`).

### 5.2 Naming Conventions

*   **Components:** PascalCase (e.g., `Header`, `JournalEntry`, `QuantumMindDiagram`)
*   **Files:** camelCase (e.g., `header.js`, `journalEntry.js`, `quantumMindDiagram.js`)
*   **Variables and Functions:** camelCase (e.g., `handleClick`, `fetchData`, `currentSection`)
*   **CSS Classes:** BEM with kebab-case (e.g., `block__element--modifier`)

### 5.3 Code Style

*   **Consistency:** ESLint and Prettier will be used to enforce consistent code style and formatting.
*   **Readability:** Code will be written with a focus on clarity and readability, using meaningful variable names, comments, and clear function structures.
*   **Modularity:** Code will be organized into small, reusable modules to improve maintainability and reduce complexity.

### 5.4 State Management

*   **Global State:**  Application-wide state (e.g., current theme, user progress) will be managed using the Context API.
*   **Local State:** Component-level state will be managed using the `useState` or `useReducer` hooks.
*   **State Immutability:** State updates will be performed immutably to ensure predictable behavior and easier debugging.
*   **Data Flow:** Data will generally flow down from parent to child components, while events will bubble up.

## 6. Error Handling

*   **Graceful Degradation:** The website will be designed to handle errors gracefully, preventing crashes and providing informative error messages to the user when possible.
*   **Error Boundaries:** Error boundaries (React's mechanism for catching JavaScript errors in component trees) will be used to prevent errors in one part of the UI from crashing the entire application.
*   **Logging:** Errors will be logged to the console during development and potentially to a remote logging service in production.

## 7. Accessibility

*   **WCAG Guidelines:** The website will be developed with accessibility in mind, adhering to WCAG (Web Content Accessibility Guidelines) 2.1 Level AA standards.
*   **Semantic HTML:** Semantic HTML elements (e.g., `header`, `nav`, `main`, `article`, `footer`) will be used to provide structure and meaning to the content.
*   **ARIA Attributes:** ARIA attributes will be used to enhance the accessibility of dynamic content and interactive elements.
*   **Keyboard Navigation:** The website will be fully navigable using the keyboard alone.
*   **Color Contrast:** Sufficient color contrast will be maintained between text and background elements.
*   **Text Alternatives:** Text alternatives (e.g., alt text for images) will be provided for non-text content.

## 8. Specific Considerations for Project Amoratus

*   **Simulated OS Elements:** The website may incorporate elements that mimic a simulated operating system, such as windows, icons, and a file system. These elements should be implemented in a way that is both visually appealing and accessible.
*   **Immersive Storytelling:** The website's architecture should support a strong narrative flow, guiding the user through Greg's story and the project's technical aspects. This may involve using animations, transitions, and interactive elements to create a more engaging experience.
*   **Data Visualization:** The technical aspects of Project Amoratus, such as the QuantumMind and the GregOS Core Machine, may be visualized using diagrams, animations, or interactive models. These visualizations should be designed to be both informative and aesthetically pleasing.
*   **Emotional Design:** The website's design should evoke the emotional themes of the project (love, loss, memory) through the use of color, typography, imagery, and sound.

## 9. Conclusion

These architectural notes serve as a living document that will guide the development of the Project Amoratus website. They will be revisited and updated as needed throughout the development process. The chosen architecture prioritizes a clean, modular design, enabling maintainability, scalability, and a compelling user experience. The combination of React, Tailwind CSS, and the chosen state management approach provides a solid foundation for building a dynamic and engaging website that effectively tells the story of Project Amoratus.