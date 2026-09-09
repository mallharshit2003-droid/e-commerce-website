# MultiCart

MultiCart is a full-stack multi-vendor e-commerce application. It provides product browsing, search, cart and checkout flows, user accounts, orders, vendor tools, admin tools, and support chat.

## Technology

- Next.js 16, React 19, and TypeScript
- Redux Toolkit for client state
- Node.js HTTP backend
- MongoDB with Mongoose
- NextAuth for authentication
- Cloudinary for product media
- Stripe for payments

## Project structure

- `frontend/` contains the Next.js application, pages, components, Redux state, and API routes.
- `backend/` contains the Node.js server, MongoDB models, and server utilities.

## Requirements

- Node.js 20 or newer
- npm
- A MongoDB connection string

## Setup

Install dependencies from the project root:

```bash
npm install
```

Create `frontend/.env.local` and add the values for your services:

```env
MONGODB_URL=your-mongodb-connection-string
AUTH_SECRET=your-auth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
GMAIL_USER=your-gmail-address
GMAIL_APP_PASSWORD=your-gmail-app-password
```

Do not commit `.env.local` or expose its values. The repository `.gitignore` excludes environment files.

## Run locally

Open two terminals in the project root and run the services separately.

Terminal 1, backend:

```bash
cd backend
npm run dev
```

Terminal 2, frontend:

```bash
cd frontend
npm run dev
```

The frontend runs at [http://localhost:3000](http://localhost:3000).

The backend health check is available at [http://localhost:4000/health](http://localhost:4000/health).

The backend reads `frontend/.env.local` automatically. Set `BACKEND_PORT` there to use a port other than `4000`.

## Available scripts

Run these from the project root:

```bash
npm run dev       # Start the frontend
npm run build     # Build the frontend
npm run start     # Start the production frontend
npm run lint      # Check frontend code
```

Backend scripts are available from `backend/`:

```bash
npm run dev       # Start the backend in development
npm run build     # Check the backend syntax
npm run start     # Start the backend in production mode
```
