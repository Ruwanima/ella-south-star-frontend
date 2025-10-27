 
# Ella South Star - Hotel Management System

<div align="center">
  <h3>🏨 Integrated Admin & Client Portal System</h3>
  <p>A comprehensive hotel management solution built with Next.js 15, React 19, and TypeScript</p>
</div>

---

## 🌟 Overview

This project provides a complete hotel management system with two integrated portals:

- **Admin Portal** - For hotel staff to manage operations, guests, inventory, finances, and more
- **Client Portal** - For guests to browse rooms, make bookings, and manage their stays

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Ruwanima/ella-south-star-frontend.git
cd ella-south-star-frontend

# Install dependencies (use --legacy-peer-deps for compatibility)
npm install --legacy-peer-deps

# Run development server
npm run dev
```

### Access the Application

- **Client Portal (Default):** http://localhost:3000
- **Admin Portal:** http://localhost:3000/admin

---

## 📁 Project Structure

```
├── app/
│   ├── (admin)/              # Admin Portal Routes
│   │   ├── dashboard/        # Main admin dashboard
│   │   ├── user-management/  # Staff & guest management
│   │   ├── inventory/        # Inventory tracking
│   │   ├── finance/          # Financial reports
│   │   ├── reports/          # Business analytics
│   │   ├── reviews/          # Review management
│   │   └── sales-marketing/  # Marketing campaigns
│   │
│   ├── (client)/             # Client Portal Routes
│   │   ├── home/            # Homepage
│   │   ├── rooms/           # Room browsing
│   │   ├── bookings/        # Booking management
│   │   ├── services/        # Hotel services
│   │   └── profile/         # User profile
│   │
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Root page (redirects to /home)
│   └── globals.css          # Global styles
│
├── components/
│   ├── ui/                  # Reusable UI components (Radix UI)
│   ├── header.tsx          # Admin header
│   ├── sidebar.tsx         # Admin sidebar
│   └── ...                 # Feature components
│
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
└── public/                  # Static assets
```

---

## ✨ Features

### 🔧 Admin Portal

- **Dashboard** - KPI metrics, analytics, and activity feed
- **User Management** - Manage staff, guests, and vendors
- **Inventory** - Track stock levels with alerts
- **Finance** - Revenue tracking and transaction history
- **Reports** - Generate business intelligence reports
- **Reviews** - Manage and respond to guest reviews
- **Sales & Marketing** - Campaign tracking and promotions
- **Dark Mode** - Toggle between light and dark themes

### 🏨 Client Portal

- **Homepage** - Featured rooms and hotel showcase
- **Room Browsing** - Explore available rooms with pricing
- **Booking Management** - View upcoming and past reservations
- **Services** - Browse hotel amenities and packages
- **Profile** - Manage personal information and preferences
- **Responsive Design** - Mobile-friendly interface
- **Easy Navigation** - Intuitive menu system

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Components** | Radix UI |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod |
| **Charts** | Recharts |
| **Deployment** | Vercel Ready |

---

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 🔄 Navigation Between Portals

### Client → Admin
Click the **"Admin Portal"** button in the top-right header

### Admin → Client
Click **"Client Portal"** in the sidebar (above Dark Mode)

---

## 🎨 Design Highlights

- **Route Groups** - Clean URL structure using Next.js route groups `(admin)` and `(client)`
- **Separate Layouts** - Distinct user experiences for each portal
- **Shared Components** - Reusable UI components across both portals
- **Type Safety** - Full TypeScript coverage
- **Responsive** - Mobile-first design approach
- **Modern UI** - Beautiful gradients and smooth animations

---

## 📚 Documentation

- [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) - Detailed technical documentation
- [`INTEGRATION_COMPLETE.md`](./INTEGRATION_COMPLETE.md) - Integration guide and checklist

---

## 🚧 Future Enhancements

- [ ] Authentication & Authorization (NextAuth.js)
- [ ] Database Integration (PostgreSQL/MongoDB)
- [ ] Payment Gateway Integration
- [ ] Email Notifications
- [ ] Real-time Features (WebSockets)
- [ ] Advanced Analytics Dashboard
- [ ] Multi-language Support (i18n)
- [ ] Mobile App (React Native)
- [ ] API Documentation (Swagger)
- [ ] Unit & E2E Tests

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is private and proprietary to Ella South Star Hotel.

---

## 👥 Team

Built with ❤️ by the Ella South Star development team

---

## 📞 Support

For issues or questions, please open an issue in the GitHub repository.

---

**Repository:** https://github.com/Ruwanima/ella-south-star-frontend  
**Branch:** `dev`  
**Status:** ✅ Active Development
