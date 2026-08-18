# Meals Nest 🍲

Meals Nest is a full-stack cloud kitchen platform built using the MERN stack. It connects users with cloud kitchens, allowing them to browse menus, place orders, and make secure payments.

## 🚀 Features

- **User & Kitchen Authentication:** Secure sign-up and login using JWT.
- **Browse Kitchens & Menus:** Users can explore different cloud kitchens and their available menus.
- **Order Management:** Place, track, and manage food orders.
- **Secure Payments:** Integrated with Razorpay for seamless transactions.
- **Image Uploads:** Kitchens can upload menu images using Cloudinary.
- **Performance:** Redis caching implemented for faster data retrieval.
- **Email Notifications:** Automated email updates using Nodemailer.
- **API Documentation:** Comprehensive API docs generated with Swagger.

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (v18) with Vite
- **Styling:** Tailwind CSS (v4)
- **State Management:** Redux Toolkit & React-Redux, Redux Persist
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Icons & UI:** Lucide React, React Hot Toast

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Caching:** Redis
- **Authentication:** JWT (JSON Web Tokens), bcryptjs
- **Payment Gateway:** Razorpay
- **Media Storage:** Cloudinary, Multer
- **Emails:** Nodemailer
- **API Docs:** Swagger (swagger-jsdoc, swagger-ui-express)
- **Security:** Helmet, Express Rate Limit, CORS
- **Testing:** Jest

## 📁 Project Structure

```text
Meals Nest/
├── Backend/               # Express server and API
│   ├── config/            # Database and service configurations
│   ├── controllers/       # Route controllers (logic)
│   ├── docs/              # Swagger API documentation
│   ├── middleware/        # Custom middlewares (auth, validation, etc.)
│   ├── models/            # Mongoose schemas (User, Kitchen, Menu, Order)
│   ├── routes/            # API routes
│   ├── services/          # Business logic and external services
│   ├── utils/             # Utility functions
│   └── validators/        # Request validation logic
└── Frontend/              # React application
    ├── public/            # Static assets
    └── src/               # React components, pages, state, and styles
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Redis server
- Cloudinary Account
- Razorpay Account

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "FullStackProject"
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../Frontend
   npm install
   ```

### Configuration

Create a `.env` file in the `Backend` directory and add the following environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

### Running the Application

You can start both the frontend and backend servers concurrently using the root package (if configured) or run them separately.

**To run separately:**

1. **Start the Backend:**
   ```bash
   cd Backend
   npm run dev
   ```

2. **Start the Frontend:**
   ```bash
   cd Frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` (Vite's default port), and the backend API will be running at the port specified in your `.env` file.

## 📄 API Documentation

The backend API is documented using Swagger. Once the backend server is running, you can access the documentation at:
```
http://localhost:<PORT>/api-docs
```

## 📝 License

This project is licensed under the ISC License.
