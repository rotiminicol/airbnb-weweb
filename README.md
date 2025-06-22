# Airbnb Clone - Fullstack Project

A modern, fullstack Airbnb clone built with React, TypeScript, and Xano backend. Features authentication, listings, bookings, wishlists, and more.

## 🚀 Features

- **Authentication**: JWT-based auth with signup/login
- **Listings**: Browse, search, and filter properties
- **Bookings**: Create and manage reservations
- **Wishlists**: Save favorite properties
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Real-time Data**: Connected to Xano backend
- **Modern UI**: Built with Tailwind CSS and Framer Motion

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Query** for data fetching
- **Lucide React** for icons

### Backend
- **Xano** for backend services
- **PostgreSQL** database
- **JWT Authentication**
- **RESTful APIs**

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Xano account (free tier available)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd airbnb-weweb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Xano Backend

The project is already configured to use the Xano backend at:
- **Auth API**: `https://x8ki-letl-twmt.n7.xano.io/api:K84Lj_FE`
- **Airbnb API**: `https://x8ki-letl-twmt.n7.xano.io/api:WFmTHjwy`

### 4. Seed Sample Data (Optional)

To populate the database with sample data, run:

```bash
node scripts/seed-data.js
```

This will create:
- Sample users (john@example.com / password123)
- Sample listings across different countries
- Sample bookings and wishlists

### 5. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📱 Available Pages

- **Home** (`/`): Landing page with featured listings
- **Explore** (`/explore`): Search and filter listings
- **Listing Details** (`/listing/:id`): Individual property view
- **Bookings** (`/bookings`): User's booking history
- **Trips** (`/trips`): Upcoming and past trips
- **Wishlists** (`/wishlists`): Saved properties
- **Profile** (`/profile`): User profile and settings
- **Host** (`/host`): Host dashboard (coming soon)

## 🔧 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user

### Listings
- `GET /listing` - Get all listings
- `GET /listing/:id` - Get specific listing
- `POST /listing` - Create new listing
- `PATCH /listing/:id` - Update listing
- `DELETE /listing/:id` - Delete listing

### Bookings
- `GET /booking` - Get user bookings
- `POST /booking` - Create booking
- `PATCH /booking/:id` - Update booking
- `DELETE /booking/:id` - Cancel booking

### Wishlists
- `GET /wishlist` - Get user wishlists
- `POST /wishlist` - Create wishlist
- `POST /wishlist_item` - Add to wishlist
- `DELETE /wishlist_item/:id` - Remove from wishlist

## 🎨 Customization

### Styling
The project uses Tailwind CSS. Customize colors, spacing, and components in:
- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global styles

### Components
All UI components are in `src/components/ui/` using shadcn/ui patterns.

### API Configuration
Update API endpoints in `src/lib/api.ts` if needed.

## 📱 Mobile Features

- Responsive design for all screen sizes
- Mobile bottom navigation
- Touch-friendly interactions
- Optimized images and loading

## 🔐 Authentication Flow

1. User signs up/logs in via AuthModal
2. JWT token stored in localStorage
3. Token automatically included in API requests
4. Protected routes redirect to login if not authenticated

## 🗄️ Database Schema

### Users
- id, name, email, password, phone, avatar, etc.

### Listings
- id, title, location, price, images, amenities, etc.

### Bookings
- id, user_id, listing_id, check_in, check_out, status, etc.

### Wishlists
- id, user_id, name, description, is_public, etc.

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend
The Xano backend is already deployed and ready to use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes.

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your Xano backend is running
3. Ensure all dependencies are installed
4. Check the API endpoints are accessible

## 🎯 Next Steps

- [ ] Add real-time messaging
- [ ] Implement payment processing
- [ ] Add review system
- [ ] Create host dashboard
- [ ] Add map integration
- [ ] Implement search filters
- [ ] Add photo upload functionality

---

Built with ❤️ using React, TypeScript, and Xano
