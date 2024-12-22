# Job-Matching Platform with Scheduling Feature

## Overview

This project is a job-matching platform that includes a scheduling feature allowing users to schedule meetings directly within the app. The front-end is built using React, while the back-end is built using Express.js. The application includes basic unit tests and uses Tailwind CSS for styling.

## Features

* Meeting Scheduling: Users can schedule meetings with a title, date, time, and attendees.
* Meeting Display: Scheduled meetings are displayed in a card format.
* Date and Time Selection: Uses Material UI components for date and time selection.
* API Endpoints: CRUD operations for managing meetings.
* Unit Tests: Basic unit tests for components and API endpoints.
* Styling: Tailwind CSS for responsive and modern design.


## File Directory List

Here is a detailed file directory list for clarity:

```
job-matching-platform/
├── backend/
│   ├── models/
│   │   ├── meeting.js
│   │   └── user.js
│   ├── routes/
│   │   └── meetings.js
│   ├── utils/
│   │   ├── database.js
│   │   ├── notifications.js
│   │   └── timezones.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── MeetingForm.jsx
│   │   │   ├── MeetingCard.jsx
│   │   │   ├── Calendar.jsx \(optional\)
│   │   │   ├── DatePicker.jsx
│   │   │   └── TimePicker.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── index.css \(or Tailwind CSS directly in components\)
│   ├── tests/
│   │   ├── meetingForm.test.js
│   │   ├── meetingCard.test.js
│   │   ├── meetingsApi.test.js
│   │   └── timezones.test.js
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│   └── tailwind.config.js
├── .gitignore
└── README.md
└── LICENSE
```

## Getting Started

### Prerequisites

* Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**

```bash
git clone [https://github.com/joelclouds/job-matching-platform.git](https://github.com/joelclouds/job-matching-platform.git)
cd job-matching-platform
```

2. **Install Dependencies**

   **Backend**

   ```bash
   cd backend
   npm install
   ```

   **Frontend**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   node server.js
   ```

   The server will start on http://localhost:5000.

2. **Start the Frontend Development Server**

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend will start on http://localhost:3000.

3. **Open the Application**

   Open your web browser and go to http://localhost:3000 to see the application.

### Testing

**Running Unit Tests**

**Backend**

```bash
cd backend
npm test
```

**Frontend**

```bash
cd ../frontend
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

