```markdown
project-amoratus-website/
├── .github/
│   └── copilot-instructions.md - Custom instructions for GitHub Copilot.
├── .gitignore - Files and folders to be ignored by Git.
├── architectural-notes.md - Key architectural decisions and notes.
├── functional-requirements.md - Detailed functional requirements.
├── fileNames.md - This file! Map of project file structure.
├── gemini/
│   ├── gemini_system_prompt.md - System prompt for Gemini.
│   └── technology_page_prompt.md - Example feature-specific prompt for Gemini (for the technology page).
├── package.json - Project dependencies and scripts.
├── public/
│   ├── index.html - Main HTML file.
│   └── favicon.ico - Favicon for the website
├── README.md - Project overview and development guide.
├── src/
│   ├── App.js - Main application component.
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── index.js - Main file for Button component.
│   │   │   │   └── Button.module.css - Button component specific styles.
│   │   │   ├── Header/
│   │   │   │   ├── index.js - Main file for Header component
│   │   │   │   └── Header.module.css - Header component styles
│   │   │   ├── Footer/
│   │   │   │   ├── index.js - Main file for Footer component
│   │   │   │   └── Footer.module.css - Footer component styles
│   │   │   └── Navigation/
│   │   │   │   ├── index.js - Main file for Navigation.
│   │   │   │   └── Navigation.module.css - Navigation styles.
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── index.js - Main file for the Home page.
│   │   │   │   └── Home.module.css - Home page specific styles.
│   │   │   ├── Story/
│   │   │   │   ├── index.js - Main file for the Story page.
│   │   │   │   └── Story.module.css - Story page specific styles.
│   │   │   ├── Technology/
│   │   │   │   ├── index.js - Main file for the Technology page.
│   │   │   │   └── Technology.module.css - Technology page specific styles.
│   │   │   ├── Journal/
│   │   │   │   ├── index.js - Main file for the Journal page.
│   │   │   │   └── Journal.module.css - Journal page specific styles.
│   │   │   └── About/
│   │   │   │   ├── index.js - Main file for the About page.
│   │   │   │   └── About.module.css - About page specific styles.
│   │   ├── layout/
│   │   │   ├── PageLayout/
│   │   │   │   ├── index.js - Main file for Page Layout.
│   │   │   │   └── PageLayout.module.css - Page Layout specific styles.
│   │   │   └── SectionLayout/
│   │   │   	   ├── index.js - Main file for Section Layout.
│   │   │   	   └── SectionLayout.module.css - Section Layout styles.
│   │   └── data/
│   │       ├── journalEntries.json - JSON data for Greg's journal entries
│   │       └── characterProfiles.json - JSON data for character details
│   ├── index.js - Entry point for the React application.
│   ├── styles/
│   │   └── globals.css - Global styles.
│   └── utils/
│       └── api.js - Utility functions for fetching data.
└── ...
```
