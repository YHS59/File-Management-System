### Repository Link
[👉 GitHub Repository](https://github.com/YHS59/File-Management-System.git)

### Prerequisites
Install following software
- Node.js & npm
- Git

### Installation
1. Clone the repository

2. Install project dependencies
- npm install

### Running the Application
Two parts are needed to run concurrently: the Node.js backend and the Vue.js frontend

1. Start the Backend Server: Navigate to your backend folder and run the server. Your API will run on http://localhost:5000.
 - cd backend
 - node server.js

2. Run the Vue.js Frontend:
Open a separate terminal window. Navigate to your frontend folder and start the development server. The application will be running on http://localhost:5173 or a similar port.
 - cd frontend
 - npm run dev


### Project Structure
- Vue
    - backend
        - server.js (Node.js/Express server)
        - notes.db (The SQLite database file)
    - frontend
        - src (source code)
            - components
                - NoteItem.vue
                - Notes.vue
            - services
                - api.js (API client)
            - App.vue
            - index.css
            - main.js
        - postcss.config.js
        - tailwind.config.js
        - vite.config.js

### Built With
 - Vue.js: The progressive JavaScript framework.
 - Tailwind CSS: A utility-first CSS framework for building custom designs.
 - Axios: A promise-based HTTP client for the browser and Node.js.
 - Express.js: A minimal and flexible Node.js web application framework.
 - SQLite3: A file-based database.


### Development Process — AI Usage
Here are examples of how AI (ChatGPT) assisted and how I adapted the outputs:

Example 1 — Inline editing in Vue
- *Prompt:* `How to implement inline editing in Vue 3 using contenteditable without text jumping issues?`
- *AI Output:* Suggested using `refs`, setting `innerText` on mount, and updating state with `@input`.
- *My Changes:* Applied it to `titleRef` and `contentRef`, added reset on cancel, and tested typing/deletion for stable behavior.
- *Why:* Fixed the issue where text jumped around after the first letter and gave a smooth inline-edit UX.

Example 2 — Tailwind layout
- *Prompt:* `Generate a Tailwind CSS card layout with hover animations.`
- *AI Output:* A card with `rounded-xl`, `shadow-lg`, `hover:shadow-xl`, and gradient background.
- *My Changes:* Reduced animation intensity, adjusted spacing, and matched gradient colors to the app.
- *Why:* The AI design was flashy but too strong for a notes app, so I simplified it for better usability and theme consistency.





