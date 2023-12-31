Backend for the event planner This repository contains the backend for the Event
Planner service. It provides an API for event and schedule management.

After installing Node.js, clone this repository to your local machine:

(https://github.com/Ra4kovi4/event_planner_backend.git). Navigate to the project
directory:

cd app-event-planner-backend Install the project dependencies:

npm install Configuration The application uses two environment variables:
DB_HOST and PORT. These can be set in an .env file in the config directory.

Below is an example .env file:

DB_HOST=mongodb://localhost:27017/mydatabase

PORT=3000

Usage You can start the server using the following command:

npm start The server will be started in production mode.

For development mode, use:

npm run dev Endpoints Deploy
https://damp-sierra-19444-ce61428c5941.herokuapp.com

The following is a list of available endpoints:

Events: POST /api/events: Add a new event GET /api/events: Get all events GET
/api/events/:id: Get events by id GET /api/events/search search for event by
title DELETE /api/events/search delete event
