# JWT Authentication Tutorial

A simple and practical implementation of JSON Web Token (JWT) authentication using Node.js and Express.

## Overview

This project demonstrates how to implement JWT-based authentication in a Node.js application. It includes:

- User authentication with JWT
- Protected routes
- Token verification
- Express.js server setup

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jwt-tutorial
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your JWT secret:

```
JWT_SECRET=your_jwt_secret_here
```

## Project Structure

```
jwt-tutorial/
├── controllers/     # Request handlers
├── routes/         # Route definitions
├── public/         # Static files
├── index.js        # Main application file
└── package.json    # Project dependencies
```

## Available Scripts

- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests (not implemented yet)

## Dependencies

- express: Web framework for Node.js
- jsonwebtoken: JWT implementation
- dotenv: Environment variable management
- nodemon: Development server with auto-reload

## API Endpoints

- `POST /login`: Authenticate user and receive JWT token
- Protected routes require a valid JWT token in the Authorization header

## Security

This project implements basic JWT authentication. For production use, consider adding:

- Password hashing
- Rate limiting
- HTTPS
- Additional security headers

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
