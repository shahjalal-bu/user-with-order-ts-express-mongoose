# User with Order API

## Overview

This repository contains the source code for a TypeScript-based Express.js API with MongoDB (using Mongoose) for managing users and orders. It includes bcrypt for password hashing, CORS support, and environment variable configuration through dotenv.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/shahjalal-bu/user-with-order-ts-express-mongoose.git
   cd user-with-order-ts-express-mongoose
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and add the following:

   ```env
   PORT =
   DATABASE_URL=
   BCRYPT_SALT_ROUNDS = ,
   ```

   Update the values accordingly.

4. Build the project:

   ```bash
   npm run build
   ```

5. Start the development server:

   ```bash
   npm run start:dev
   ```

   The server will run on which set in env.

   6. Host link

   ```
   https://user-with-order-ts-express-mongoose.vercel.app

   ```

## Scripts

- `npm run start:prod`: Start the production server using the compiled JavaScript.
- `npm run start:dev`: Start the development server with automatic TypeScript compilation using nodemon.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm run lint:fix`: Run ESLint and automatically fix fixable errors.
- `npm run prettier`: Format code using Prettier.
- `npm run prettier:fix`: Run Prettier and automatically fix fixable formatting issues.

## Dependencies

- `bcrypt`: Password hashing library.
- `cors`: Middleware for enabling CORS in Express.
- `dotenv`: Load environment variables from a .env file.
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `ts-node`: TypeScript execution environment for Node.js.
- `zod`: TypeScript-first schema declaration and validation.

## Development Dependencies

- `@types/bcrypt`, `@types/cors`, `@types/express`, `@types/node`: Type definitions for TypeScript.
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`: TypeScript ESLint support.
- `eslint`, `eslint-config-prettier`: Linting and code formatting.
- `nodemon`: Monitor for changes in your source and restart your server.
- `prettier`: Code formatter for consistent code style.
- `typescript`: TypeScript language compiler.

## License

This project is licensed under the ISC License
