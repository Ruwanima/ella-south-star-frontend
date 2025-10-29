# Ella South Star - Hotel Management System

<div align="center">
  <h3>🏨 Integrated Admin & User Portal System</h3>
  <p>A comprehensive hotel management solution built with Next.js 15, React 19, and TypeScript</p>
</div>

---

## 🌟 Overview

Ella South Star is a modern, full-featured hotel management system designed for the beautiful hill country destination of Ella, Sri Lanka. The project consists of two integrated portals providing comprehensive functionality for both hotel staff and guests:

- **Admin Portal** - Complete hotel operations management system for staff
- **User Portal** - Public-facing website for guests to explore, book, and manage their stays

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Accessing the Portals](#accessing-the-portals)
- [User Portal Features](#user-portal-features)
- [Admin Portal Features](#admin-portal-features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

---

## 🔧 Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Node.js**: Version 18.0.0 or higher ([Download](https://nodejs.org/))
- **Package Manager**: npm (comes with Node.js) or pnpm (recommended)
- **Git**: For cloning the repository ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

To verify your installations, run:

```bash
node --version    # Should show v18.0.0 or higher
npm --version     # Should show 8.0.0 or higher
git --version     # Should show 2.0.0 or higher
```

---

## 🚀 Installation & Setup

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Ruwanima/ella-south-star-frontend.git
cd ella-south-star-frontend
```

### 2. Install Dependencies

The project uses several modern React 19 and Next.js 15 packages. Use the `--legacy-peer-deps` flag to ensure compatibility:

**Using npm:**
```bash
npm install --legacy-peer-deps
```

**Using pnpm (recommended):**
```bash
pnpm install
```

This will install all required dependencies including:
- Next.js 15 framework
- React 19 and React DOM
- Radix UI component library
- Tailwind CSS 4
- TypeScript
- And other supporting libraries

### 3. Verify Installation

After installation completes successfully, verify that the `node_modules` folder has been created and contains all dependencies:

```bash
# List the contents (optional)
ls node_modules  # On Unix/Mac/Linux
dir node_modules  # On Windows
```

---

## 🏃‍♂️ Running the Application

### Development Mode

Start the development server with hot-reload enabled:

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

The application will start on `http://localhost:3000`. You should see output similar to:

```
  ▲ Next.js 15.5.6
  - Local:        http://localhost:3000
  - Ready in 2.5s
```

### Production Build

To create an optimized production build:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Linting

To check code quality and formatting:

```bash
npm run lint
```

---

## 🌐 Accessing the Portals

Once the development server is running, you can access different parts of the application:

### User Portal (Public Website)

| Page | URL | Description |
|------|-----|-------------|
| **Landing Page** | `http://localhost:3000` | Main homepage with hero section |
| **Accommodations** | `http://localhost:3000/accommodations` | Browse available room types |
| **Packages** | `http://localhost:3000/packages` | View accommodation packages |
| **Activities** | `http://localhost:3000/activities` | Explore local activities |
| **Attractions** | `http://localhost:3000/attraction` | Discover nearby attractions |
| **Vehicles** | `http://localhost:3000/user-vehicles` | Rent vehicles for local travel |
| **Booking** | `http://localhost:3000/booking` | Make a reservation |
| **Contact** | `http://localhost:3000/contact` | Contact information |

### Admin Portal (Staff Access)

| Page | URL | Description |
|------|-----|-------------|
| **Admin Login** | `http://localhost:3000/login` | Staff authentication |
| **Dashboard** | `http://localhost:3000/dashboard` | Main admin dashboard |
| **User Management** | `http://localhost:3000/user-management` | Manage staff, guests, vendors |
| **Vehicles** | `http://localhost:3000/vehicles` | Manage rental vehicles |
| **Inventory** | `http://localhost:3000/inventory` | Track hotel inventory |
| **Finance** | `http://localhost:3000/finance` | Financial reports |
| **Reports** | `http://localhost:3000/reports` | Business analytics |
| **Reviews** | `http://localhost:3000/reviews` | Guest review management |
| **Sales & Marketing** | `http://localhost:3000/sales-marketing` | Marketing campaigns |

---

## 🏖️ User Portal Features

The User Portal provides a beautiful, modern interface for hotel guests to explore and interact with the hotel:

### 🏠 Landing Page
- **Hero Section**: Stunning full-screen hero with hotel branding
- **About Section**: Information about Ella South Star hotel
- **Featured Sections**: Showcase of accommodations, packages, activities, and services
- **Responsive Navigation**: Mobile-friendly menu with smooth scrolling
- **Call-to-Action Buttons**: Easy booking access throughout the site

### 🛏️ Accommodations
- **Room Catalog**: Browse three room types (Deluxe Room, Premium Suite, Private Villa)
- **Detailed Information**: Room size, amenities, pricing, and features
- **High-Quality Images**: Professional photos for each room type
- **Booking Integration**: Direct booking buttons for each room
- **Pricing Display**: Clear pricing with nightly rates

### 📦 Packages
- **Three Package Options**:
  - **Room Only**: Basic accommodation
  - **Bed & Breakfast**: Accommodation with breakfast included
  - **Half Board**: Accommodation with breakfast and dinner
- **Discount Pricing**: Special offers with percentage savings shown
- **Guest Capacity**: Clear indication of maximum guests per package
- **Detailed Inclusions**: List of what's included in each package
- **Quick Booking**: One-click booking for selected packages

### 🏍️ Vehicle Rentals
- **Motorcycle Rentals**: Three TVS models available for rent
  - 125cc TVS
  - TVS Hunk 125
  - TVS Ntorq 125
- **Detailed Specifications**: Features, pricing, and descriptions
- **Image Gallery**: High-quality vehicle images
- **Daily Rates**: Transparent pricing per day
- **Easy Booking**: Rent now functionality for each vehicle

### 🎯 Activities & Attractions
- **Curated Experiences**: Showcase of popular Ella activities
  - Scenic Train Rides (Nine Arch Bridge)
  - Little Adam's Peak hiking
  - Ravana Falls visits
- **Activity Cards**: Beautiful image cards with descriptions
- **Link to Full Activities Page**: Explore more detailed activity information
- **Inspiration Gallery**: Visual showcase to inspire guest exploration

### 🍽️ Services
- **Hotel Amenities Display**:
  - Restaurant (Authentic Sri Lankan and international cuisine)
  - 24-Hour Hosting (Round-the-clock service)
  - Sightseeing (Guided tours)
  - Vehicle Parking (Secure parking facilities)
- **Icon-Based Design**: Clear, visual representation of services
- **Hover Effects**: Interactive service cards

### ⭐ Reviews & Feedback
- **Guest Reviews Display**: Showcase of authentic guest testimonials
- **Star Ratings**: Visual 5-star rating system
- **Review Submission Form**: Allow guests to leave feedback
  - Interactive star rating selector
  - Name and email fields
  - Detailed review text area
  - Form validation
- **Review Cards**: Professional display of guest reviews with timestamps

### 📧 Contact Information
- **Full Footer**: Comprehensive contact section
  - Physical address in Ella, Sri Lanka
  - Phone number with click-to-call
  - Email address with mailto links
- **Social Media Links**: Facebook, Instagram, Twitter integration
- **Quick Navigation**: Footer menu for easy site navigation
- **Legal Links**: Privacy Policy, Terms of Service, Sitemap

### 🎨 User Experience Features
- **Responsive Design**: Fully mobile-optimized for all devices
- **Smooth Animations**: Hover effects and transitions
- **High-Quality Images**: Professional photography from Unsplash
- **Color Scheme**: Elegant emerald green theme representing Ella's nature
- **Typography**: Serif fonts for luxury feel, sans-serif for readability
- **Loading Performance**: Optimized images with Next.js Image component

---

## 🔐 Admin Portal Features

The Admin Portal provides comprehensive tools for hotel staff to manage all aspects of hotel operations:

### 📊 Dashboard
- **Key Performance Indicators (KPIs)**:
  - Total revenue tracking
  - Occupancy rates
  - Guest statistics
  - Pending bookings count
- **Analytics Overview**: Visual charts and graphs
- **Quick Stats Cards**: At-a-glance metrics
- **Recent Activity Feed**: Latest bookings, check-ins, and transactions
- **Date Range Filters**: Customizable reporting periods
- **Export Functionality**: Download reports as CSV/PDF

### 👥 User Management
- **Three User Categories**:
  1. **Staff Management**
     - Add, edit, and remove staff members
     - Assign roles and permissions
     - Track staff activity logs
     - Employee schedules
  2. **Guest Management**
     - View guest profiles
     - Booking history
     - Preferences and special requests
     - Communication logs
     - Guest loyalty program tracking
  3. **Vendor Management**
     - Supplier contacts
     - Contract management
     - Payment tracking
     - Service agreements
- **Advanced Filtering**: Search and filter by multiple criteria
- **Bulk Actions**: Manage multiple users simultaneously
- **Permissions Control**: Role-based access control (RBAC)
- **Audit Trail**: Track all user management changes

### 🚗 Vehicle Management
- **Rental Fleet Tracking**:
  - Add/remove vehicles from inventory
  - Vehicle details (model, type, condition)
  - Availability calendar
  - Maintenance schedules
  - Rental rates management
- **Booking Management**: View and manage vehicle rentals
- **Maintenance Logs**: Track service history
- **Utilization Reports**: Vehicle usage analytics
- **Pricing Controls**: Dynamic pricing adjustments

### 📦 Inventory Management
- **Stock Tracking**:
  - Room amenities inventory
  - Kitchen supplies
  - Cleaning supplies
  - Maintenance materials
- **Low Stock Alerts**: Automated notifications
- **Reorder Management**: Purchase orders and suppliers
- **Inventory Adjustments**: Stock-in and stock-out tracking
- **Cost Tracking**: Monitor inventory costs
- **Category Organization**: Organized by item types

### 💰 Finance Management
- **Revenue Tracking**:
  - Daily, weekly, monthly reports
  - Revenue by category (rooms, food, activities, vehicles)
  - Payment methods breakdown
- **Transaction History**: Detailed financial records
- **Expense Management**: Track operational costs
- **Profit & Loss Statements**: Automated financial reports
- **Tax Calculations**: Built-in tax reporting
- **Invoice Generation**: Create and send invoices
- **Payment Processing**: Track pending and completed payments

### 📈 Reports & Analytics
- **Comprehensive Reporting**:
  - Occupancy reports
  - Revenue analysis
  - Guest demographics
  - Booking trends
  - Seasonal patterns
  - Performance metrics
- **Custom Report Builder**: Create tailored reports
- **Visual Analytics**: Charts, graphs, and dashboards
- **Export Options**: PDF, Excel, CSV formats
- **Scheduled Reports**: Automated report generation
- **Comparative Analysis**: Year-over-year comparisons

### ⭐ Review Management
- **Guest Review Dashboard**:
  - View all guest reviews and ratings
  - Respond to reviews publicly
  - Internal notes and flagging
  - Sentiment analysis
  - Rating trends over time
- **Review Moderation**: Approve/hide inappropriate reviews
- **Response Templates**: Quick replies for common feedback
- **Performance Tracking**: Monitor review scores
- **Integration with Booking Platforms**: Sync with external review sites

### 📢 Sales & Marketing
- **Campaign Management**:
  - Create and manage promotional campaigns
  - Discount codes and special offers
  - Seasonal promotions
  - Email marketing campaigns
- **Analytics Dashboard**:
  - Campaign performance metrics
  - Conversion rates
  - ROI tracking
  - Customer acquisition costs
- **Marketing Automation**: Scheduled campaigns
- **Customer Segmentation**: Target specific guest groups
- **Social Media Integration**: Share promotions across platforms

### 🎨 Admin Portal UI Features
- **Professional Sidebar Navigation**: Easy access to all admin functions
- **Dark Mode Support**: Toggle between light and dark themes
- **Search Functionality**: Quick search across all sections
- **Notifications Center**: Real-time alerts and updates
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Data Tables**: Sortable, filterable, paginated tables
- **Modal Forms**: Clean, intuitive forms for data entry
- **Breadcrumb Navigation**: Always know your location in the system
- **Quick Actions**: Shortcuts to common tasks
- **Help Documentation**: Built-in help and tooltips

---

## 📁 Project Structure

```
ella-south-star-frontend/
├── app/                          # Next.js App Router
│   ├── (admin)/                 # Admin Portal Route Group
│   │   ├── layout.tsx          # Admin layout with sidebar
│   │   ├── dashboard/          # Dashboard page
│   │   ├── user-management/    # Staff, guests, vendors
│   │   ├── vehicles/           # Vehicle management
│   │   ├── inventory/          # Inventory tracking
│   │   ├── finance/            # Financial management
│   │   ├── reports/            # Analytics and reports
│   │   ├── reviews/            # Review management
│   │   ├── sales-marketing/    # Marketing campaigns
│   │   └── login/              # Admin authentication
│   │
│   ├── (user-portal)/          # User Portal Route Group
│   │   ├── landingpage/        # Main landing page
│   │   ├── accommodations/     # Room browsing
│   │   ├── packages/           # Package deals
│   │   ├── activities/         # Activities page
│   │   ├── attraction/         # Attractions page
│   │   ├── user-vehicles/      # Vehicle rentals
│   │   ├── booking/            # Booking system
│   │   └── contact/            # Contact page
│   │
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Root page (landing)
│   └── globals.css             # Global styles
│
├── components/                  # React Components
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   └── ... (30+ UI components)
│   │
│   ├── header.tsx              # Admin header
│   ├── sidebar.tsx             # Admin sidebar
│   ├── landing-header.tsx      # User portal header
│   ├── user-management.tsx     # User management component
│   ├── reviews.tsx             # Review components
│   └── ... (feature components)
│
├── lib/                        # Utilities
│   └── utils.ts               # Helper functions
│
├── hooks/                      # Custom React Hooks
│   ├── use-mobile.ts          # Mobile detection
│   └── use-toast.ts           # Toast notifications
│
├── public/                     # Static Assets
│   └── (images, fonts, etc.)
│
├── styles/                     # Additional Styles
│   └── globals.css
│
├── .eslintrc.json             # ESLint configuration
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

### Route Group Explanation

The project uses Next.js 13+ route groups (folders with parentheses) to organize routes without affecting the URL structure:

- `(admin)/` - All admin routes accessible via `/dashboard`, `/user-management`, etc.
- `(user-portal)/` - All user routes accessible via `/accommodations`, `/booking`, etc.

This keeps the codebase organized while maintaining clean URLs.

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.5.6** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Component variants

### UI Components
- **Radix UI** - Accessible, unstyled component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog
  - Dropdown Menu, Popover, Select, Tabs, Toast
  - And 20+ more components
- **Lucide React** - Icon library
- **Recharts** - Chart library for analytics

### Forms & Validation
- **React Hook Form 7.60.0** - Form management
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries
- **next-themes** - Dark mode support
- **date-fns** - Date utilities
- **embla-carousel-react** - Carousel component
- **cmdk** - Command palette
- **sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vercel Analytics** - Performance monitoring

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server on http://localhost:3000
pnpm dev            # Alternative with pnpm

# Production
npm run build       # Create optimized production build
npm run start       # Start production server (requires build first)

# Code Quality
npm run lint        # Run ESLint to check code quality
```

### Script Details

- **`dev`**: Starts the Next.js development server with hot-reload, error overlay, and fast refresh
- **`build`**: Creates an optimized production bundle with minification and code splitting
- **`start`**: Serves the production build (must run `build` first)
- **`lint`**: Checks for code quality issues, unused imports, and potential bugs

---

## 🔄 Navigation Between Portals

The application provides seamless navigation between portals:

### From User Portal → Admin Portal
- Click any admin link or navigate to `/dashboard`, `/login`, etc.
- Navigation available in mobile menu (if implemented)

### From Admin Portal → User Portal
- Click "Client Portal" or "Visit Website" in the admin sidebar
- Navigate to `/` to return to landing page

---

## 🎨 Design System

### Color Palette
- **Primary**: Emerald Green (#047857, #059669) - Represents Ella's lush nature
- **Background**: White (#FFFFFF) and Gray shades (#F9FAFB, #F3F4F6)
- **Text**: Gray scale (#111827, #6B7280, #9CA3AF)
- **Accent**: Emerald variations for hover states and highlights

### Typography
- **Headings**: Serif font family for elegance
- **Body**: Sans-serif for readability
- **Sizes**: Responsive typography using Tailwind's scale

### Components
- **Consistent Spacing**: 4px base unit (Tailwind's spacing scale)
- **Border Radius**: Rounded-md (0.375rem) for modern feel
- **Shadows**: Subtle shadows for depth (shadow-sm, shadow-lg)
- **Transitions**: Smooth 200-300ms transitions on interactive elements

---

## 🚧 Environment Configuration

Currently, the application runs without environment variables. For production deployment, you may want to add:

```bash
# Create a .env.local file in the root directory
# (This file is git-ignored)

# Example variables (add as needed):
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_SITE_URL=https://ellasouthstar.com
DATABASE_URL=your-database-connection-string
```

---

## 🔐 Authentication (Future Enhancement)

The current version includes UI for authentication but not implementation. To add authentication:

1. Install NextAuth.js: `npm install next-auth`
2. Set up authentication providers (Google, Facebook, Email)
3. Create API routes for authentication
4. Implement protected routes
5. Add role-based access control

---

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

All pages adapt their layout using Tailwind's responsive utilities.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure settings
4. Click "Deploy"

### Manual Deployment

```bash
# Build the application
npm run build

# The build output will be in .next folder
# Deploy this folder to your hosting provider
```

---

## 🤝 Contributing

We welcome contributions to improve the Ella South Star project!

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/ella-south-star-frontend.git
   cd ella-south-star-frontend
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make your changes**
   - Follow the existing code style
   - Write clear commit messages
   - Test your changes thoroughly

5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes

### Code Style Guidelines

- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components with hooks
- Write descriptive component and variable names
- Add comments for complex logic
- Keep components small and focused

---

## 📝 Future Enhancements

Planned features for future releases:

- [ ] **Backend Integration**
  - PostgreSQL or MongoDB database
  - RESTful API or GraphQL
  - Real-time updates with WebSockets

- [ ] **Authentication & Authorization**
  - NextAuth.js integration
  - Role-based access control
  - OAuth providers (Google, Facebook)
  - Email verification

- [ ] **Booking System**
  - Real-time availability checking
  - Payment gateway integration (Stripe/PayPal)
  - Booking confirmation emails
  - Cancellation and refund handling

- [ ] **Advanced Features**
  - Multi-language support (i18n)
  - Currency conversion
  - Advanced search and filtering
  - Map integration for location
  - Weather API integration
  - Progressive Web App (PWA)

- [ ] **Admin Enhancements**
  - Advanced analytics dashboard
  - Email marketing integration
  - SMS notifications
  - Automated backup system
  - Audit logging

- [ ] **Testing**
  - Unit tests with Jest
  - Integration tests
  - E2E tests with Playwright/Cypress
  - Performance testing

---

## 📞 Support & Contact

For questions, issues, or support:

- **Email**: info@ellasouthstar.com
- **GitHub Issues**: [Open an issue](https://github.com/Ruwanima/ella-south-star-frontend/issues)
- **Documentation**: See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed technical docs

---

## 📄 License

This project is private and proprietary to Ella South Star Hotel.

All rights reserved © 2025 Ella South Star

---

## 👥 Team

**Built with ❤️ by the Ella Sys4Stay Development Team**

- **Repository**: [github.com/Ruwanima/ella-south-star-frontend](https://github.com/Ruwanima/ella-south-star-frontend)
- **Branch**: `main`
- **Status**: ✅ Active Development

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Radix UI** - For accessible UI primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For hosting and deployment platform
- **Unsplash** - For high-quality stock images

---

**Need help?** Check out our detailed documentation in [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) or open an issue on GitHub.

**Ready to contribute?** See the [Contributing](#contributing) section above!
