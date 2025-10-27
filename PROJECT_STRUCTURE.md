# Ella South Star - Hotel Management System

This project consists of **two integrated portals** for comprehensive hotel management:

## 🏗️ Project Structure

### 1. **Admin Portal** (`/dashboard`, `/user-management`, etc.)
For hotel staff and management to control operations.

### 2. **Client Portal** (`/home`, `/rooms`, `/bookings`, etc.)
For guests to browse, book, and manage their stays.

---

## 📁 Directory Structure

```
app/
├── (admin)/                    # Admin Portal Route Group
│   ├── layout.tsx             # Admin layout with sidebar
│   ├── dashboard/             # Main admin dashboard
│   ├── user-management/       # Staff, guests, vendors management
│   ├── inventory/             # Inventory tracking
│   ├── finance/               # Financial reports
│   ├── reports/               # Analytics and reports
│   ├── reviews/               # Guest reviews management
│   └── sales-marketing/       # Marketing campaigns
│
├── (client)/                  # Client Portal Route Group
│   ├── layout.tsx            # Client layout with navigation
│   ├── home/                 # Client homepage
│   ├── rooms/                # Browse available rooms
│   ├── bookings/             # Manage reservations
│   ├── services/             # Hotel services
│   └── profile/              # User profile
│
├── layout.tsx                # Root layout
├── page.tsx                  # Redirects to /home
└── globals.css              # Global styles

components/
├── ui/                       # Reusable UI components
├── header.tsx               # Admin header
├── sidebar.tsx              # Admin sidebar
├── user-management.tsx      # User management component
├── reviews.tsx              # Reviews component
└── ...                      # Other components
```

---

## 🚀 Routes

### Admin Portal Routes (Staff Access)
| Route | Description |
|-------|-------------|
| `/dashboard` | Main admin dashboard with stats |
| `/user-management` | Manage staff, guests, and vendors |
| `/inventory` | Track hotel inventory |
| `/finance` | Financial overview and transactions |
| `/reports` | Generate business reports |
| `/reviews` | Manage guest reviews |
| `/sales-marketing` | Marketing campaigns |

### Client Portal Routes (Guest Access)
| Route | Description |
|-------|-------------|
| `/home` | Client homepage with featured rooms |
| `/rooms` | Browse available room types |
| `/bookings` | View and manage bookings |
| `/services` | Hotel services and packages |
| `/profile` | Guest profile and preferences |

---

## 🎨 Features

### Admin Portal Features:
- ✅ Dashboard with KPIs and analytics
- ✅ User management (Staff, Guests, Vendors)
- ✅ Inventory tracking with alerts
- ✅ Financial reporting
- ✅ Business intelligence reports
- ✅ Review management
- ✅ Marketing campaign tracking
- ✅ Dark mode support
- ✅ Navigation to Client Portal

### Client Portal Features:
- ✅ Beautiful homepage with hotel showcase
- ✅ Room browsing with availability
- ✅ Booking management
- ✅ Hotel services and packages
- ✅ User profile and preferences
- ✅ Responsive design
- ✅ Navigation to Admin Portal
- ✅ Mobile-friendly menu

---

## 🔄 Navigation Between Portals

### From Admin → Client:
Click "Client Portal" in the admin sidebar to switch to the guest-facing interface.

### From Client → Admin:
Click "Admin Portal" button in the client header to access administrative features.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI
- **Icons:** Lucide React
- **Type Safety:** TypeScript

---

## 📦 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Access the portals:**
   - Client Portal: `http://localhost:3000/home`
   - Admin Portal: `http://localhost:3000/dashboard`

---

## 🎯 Key Design Decisions

1. **Route Groups:** Using `(admin)` and `(client)` route groups keeps URLs clean while organizing code logically.

2. **Separate Layouts:** Each portal has its own layout for distinct user experiences:
   - Admin: Sidebar navigation, search, notifications
   - Client: Top navigation, footer, mobile menu

3. **Shared Components:** UI components in `/components/ui` are reusable across both portals.

4. **Type Safety:** Full TypeScript support for better development experience.

---

## 🔐 Future Enhancements

- [ ] Authentication & Authorization
- [ ] Role-based access control
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Email notifications
- [ ] Database integration
- [ ] API endpoints
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] PWA capabilities

---

## 📝 Notes

- The root `/` route automatically redirects to `/home` (Client Portal)
- Both portals share the same design system for consistency
- Components are organized for maximum reusability
- The project uses Next.js App Router for better performance

---

## 🤝 Contributing

When adding new features:
1. Determine if it's admin or client functionality
2. Add to the appropriate route group
3. Create reusable components in `/components`
4. Update this documentation

---

**Built with ❤️ for Ella South Star Hotel**
