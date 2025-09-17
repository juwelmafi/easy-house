# 🏡 Easy House

Easy House is a full-stack house rental platform where users can explore available houses and book their dream home. Built with **Next.js 13 (App Router)**, **MongoDB**, and **NextAuth**, it offers a smooth booking flow with secure authentication and real-time updates.

---

## ✨ Features

- 🔐 **Authentication** (Email/Password & Google Sign-in via NextAuth)  
- 🏠 **House Listings** – Browse available houses with details  
- 📄 **House Details Page** – View complete info before booking  
- 🛒 **Booking System** – Logged-in users can book a house  
- 👤 **User Dashboard** – See your own bookings  
- 🌐 **Deployed on Vercel** for production-ready hosting  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13 (App Router), React, Tailwind CSS  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB (via custom `dbConnect`)  
- **Authentication:** NextAuth (Google + Credentials Provider)  
- **Deployment:** Vercel  

---

## 📂 Project Structure

easy-house/
├── app/
│ ├── api/
│ │ ├── houses/ # Houses CRUD API
│ │ ├── bookings/ # Bookings API (create & fetch user bookings)
│ │ └── auth/[...nextauth]/ # NextAuth setup
│ ├── houses/[id]/ # Dynamic house details page
│ └── dashboard/ # User dashboard for bookings
├── components/ # Reusable UI components
├── lib/ # Database connection & utils
├── public/ # Static assets
└── README.md


---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/easy-house.git
cd easy-house


npm install
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
npm run dev
