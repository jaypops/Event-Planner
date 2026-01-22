# Event Planner

A full-featured event management application built with React, TypeScript, and Vite. This application allows users to create, view, edit, and manage events with user authentication.

## Features

- **User Authentication**: Secure login and registration system
- **Event Management**: Create, read, update, and delete events
- **Protected Routes**: Route protection for authenticated users
- **Responsive Design**: Mobile-friendly interface
- **Form Validation**: Client-side validation using schemas
- **Context API**: State management for authentication and events

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Context API** - State management
- **Yup** - Schema validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm 

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd event-planner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
event-planner/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Logo.jsx
│   │   ├── Navigation.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/         # Context providers
│   │   ├── AuthContext.jsx
│   │   └── EventsContext.jsx
│   ├── pages/           # Page components
│   │   ├── CreateEvent.jsx
│   │   ├── EditEvent.jsx
│   │   ├── EventList.jsx
│   │   ├── Help.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── schemas/         # Validation schemas
│   │   ├── auth.js
│   │   └── event.js
│   ├── styles/          # CSS stylesheets
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage

### Register an Account

1. Navigate to the Register page
2. Fill in your email, password, and confirm password
3. Submit the form to create your account

### Login

1. Navigate to the Login page
2. Enter your email and password
3. Submit the form to authenticate

### Manage Events

- **Create Event**: Navigate to Create Event and fill in event details
- **View Events**: Browse all events on the Event List page
- **Edit Event**: Click on an event to view and edit its details
- **Delete Event**: Remove events you no longer need

## Development

### ESLint Configuration

The project uses ESLint for code linting. The configuration can be found in `eslint.config.js`.

### Adding New Features

1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routes in `App.jsx`
4. Add corresponding styles in `src/styles/`

