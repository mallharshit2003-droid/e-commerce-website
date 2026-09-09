# MultiCart

> One marketplace. Many sellers. A smoother way to buy.

MultiCart is a full-stack multi-vendor marketplace built for the complete shopping journey: discover products, manage a cart, pay securely, track orders, and keep buyers and sellers connected through support chat.

```text
										MULTICART
		 buyer experience  <->  seller workspace
							\              /
							 \            /
								admin control
										 |
					MongoDB + media + payments
```

## What makes it useful?

| Workspace | Built for | Core capabilities |
| --- | --- | --- |
| Storefront | Buyers | Browse, search, view products, cart, checkout, orders |
| Vendor tools | Sellers | Add products, update listings, manage requests and orders |
| Admin tools | Platform operators | Review vendors, moderate products, manage marketplace activity |
| Support | Everyone | Active-user presence, messages, and suggested replies |

## Product tour

- **Discover** products by category or search.
- **Decide** with focused product details and vendor information.
- **Buy** through a persistent cart and Stripe checkout flow.
- **Follow up** with order history and success or failure states.
- **Operate** with dedicated vendor and admin dashboards.
- **Connect** through authentication, email support, and chat.

## Stack

| Layer | Technology |
| --- | --- |
| Web app | Next.js 16, React 19, TypeScript |
| UI | Tailwind CSS, Framer Motion, React Icons |
| State | Redux Toolkit and React Redux |
| API and services | Next.js route handlers, Node.js HTTP server |
| Data | MongoDB and Mongoose |
| Identity | NextAuth and Google OAuth |
| Payments | Stripe |
| Product media | Cloudinary |

## Repository map

```text
multicart/
├── frontend/
│   ├── src/app/          Pages and API route handlers
│   ├── src/component/    Shared UI and dashboards
│   ├── src/redux/        Client state slices and store
│   └── public/           Public assets and uploads
├── backend/
│   ├── models/           User, product, and order models
│   ├── lib/              Database, mail, and Cloudinary utilities
│   └── server.mjs        MongoDB-backed health server
└── README.md
```

## Get started

### 1. Install

Requirements:

- Node.js 20 or newer
- npm
- A MongoDB connection string

From the project root:

```bash
npm install
```

### 2. Configure services

Create `frontend/.env.local`:

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

Keep this file private. Environment files are excluded by `.gitignore`.

### 3. Start the services

Use two terminals from the project root.

**Terminal A: backend**

```bash
cd backend
npm run dev
```

**Terminal B: frontend**

```bash
cd frontend
npm run dev
```

Open the app at [localhost:3000](http://localhost:3000). Check the backend at [localhost:4000/health](http://localhost:4000/health).

The backend reads `frontend/.env.local` and uses port `4000` by default. Set `BACKEND_PORT` to change it.

## Commands

### Root

```bash
npm run dev       # Start the frontend
npm run build     # Build the frontend
npm run start     # Start the production frontend
npm run lint      # Lint the frontend
```

### Backend

```bash
cd backend
npm run dev       # Start the backend
npm run build     # Check server syntax
npm run start     # Start the backend in production mode
```

## Request flow

```text
Browser
	|
	|-- Next.js pages and route handlers
	|       |-- Auth: NextAuth / Google
	|       |-- Data: MongoDB via Mongoose
	|       |-- Media: Cloudinary
	|       `-- Payments: Stripe
	|
	`-- Backend health and service process
					`-- MongoDB connection
```

## Contributing

1. Create a focused branch for your change.
2. Keep secrets out of commits and pull requests.
3. Run the relevant build or lint command before opening a pull request.
4. Describe the user workflow affected by the change.

## License

This project is private and does not currently declare an open-source license.
