# Coffee System

A comprehensive coffee shop management system with both frontend and backend components.

## Project Structure

```
coffee-system/
│
├── frontend/
│   ├── index.html               → Home page
│   ├── menu.html                → Menu page
│   ├── product.html             → Product details page
│   ├── cart.html                → Shopping cart page
│   ├── checkout.html            → Checkout page
│   ├── reservation.html         → Table reservation page
│   ├── login.html               → Login/Registration page
│   ├── dashboard.html           → Admin dashboard
│   │
│   ├── admin/
│   │   ├── menu-admin.html      → Menu management
│   │   ├── order-admin.html     → Order management
│   │   ├── report.html          → Reports and analytics
│   │   ├── settings.html        → System settings
│   │   └── staff-pos.html       → Point of Sale interface
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   ├── base.css
│   │   │   ├── layout.css
│   │   │   ├── home.css
│   │   │   ├── menu.css
│   │   │   ├── cart.css
│   │   │   ├── admin.css
│   │   │   └── responsive.css
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── cart.js
│   │   │   ├── ui/
│   │   │   │   ├── header.js
│   │   │   │   ├── footer.js
│   │   │   │   └── modal.js
│   │   │   └── admin/
│   │   │       ├── menuAdmin.js
│   │   │       ├── orderAdmin.js
│   │   │       ├── report.js
│   │   │       └── settings.js
│   │   └── images/
│   │       ├── logo.png
│   │       ├── banner.jpg
│   │       ├── products/
│   │       └── icons/
│   │
│   └── components/
│       ├── header.html
│       ├── footer.html
│       └── sidebar.html
│
└── backend/
    ├── server.js
    ├── routes/
    │   ├── productRoutes.js
    │   ├── orderRoutes.js
    │   ├── userRoutes.js
    │   ├── tableRoutes.js
    │   ├── statsRoutes.js
    │   └── authRoutes.js
    ├── controllers/
    │   ├── productController.js
    │   ├── orderController.js
    │   ├── userController.js
    │   └── statsController.js
    ├── models/
    │   ├── Product.js
    │   ├── User.js
    │   ├── Order.js
    │   ├── Table.js
    │   └── Promotion.js
    └── config/
        └── db.js
```

## Features

### Customer Features
- Browse menu and products
- Add items to cart
- Place orders
- Make table reservations
- User authentication

### Admin Features
- Menu management
- Order management
- Table management
- User management
- Reports and analytics
- System settings
- Point of Sale interface

## Installation

1. Clone the repository
2. Navigate to the backend directory: `cd coffee-system/backend`
3. Install dependencies: `npm install`
4. Set up environment variables (create .env file)
5. Start MongoDB
6. Run the server: `npm run dev`

## Environment Variables

Create a `.env` file in the backend directory with:

```
MONGODB_URI=mongodb://localhost:27017/coffee-system
JWT_SECRET=your_jwt_secret
PORT=3000
```

## API Endpoints

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create product
- PUT /api/products/:id - Update product
- DELETE /api/products/:id - Delete product

### Orders
- GET /api/orders - Get all orders
- GET /api/orders/:id - Get order by ID
- POST /api/orders - Create order
- PUT /api/orders/:id - Update order
- DELETE /api/orders/:id - Delete order

### Users
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID
- POST /api/users - Create user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

### Tables
- GET /api/tables - Get all tables
- GET /api/tables/:id - Get table by ID
- POST /api/tables - Create table
- PUT /api/tables/:id - Update table
- DELETE /api/tables/:id - Delete table
- POST /api/tables/:id/reserve - Reserve table

### Statistics
- GET /api/stats/sales - Get sales statistics
- GET /api/stats/orders - Get order statistics
- GET /api/stats/popular-items - Get popular items
- GET /api/stats/revenue - Get revenue statistics

### Authentication
- POST /api/auth/login - User login
- POST /api/auth/register - User registration
- POST /api/auth/logout - User logout
- GET /api/auth/me - Get current user

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Authentication**: JWT, bcrypt
- **Database**: MongoDB

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.
