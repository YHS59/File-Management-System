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







