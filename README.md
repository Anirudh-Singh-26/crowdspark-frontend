# 🌟 CrowdSpark Frontend

**CrowdSpark** is a modern **MERN-based crowdfunding platform**. This repository contains the **frontend**, built with **React**, **Redux Toolkit**, **Tailwind CSS**, and integrated with features like role-based dashboards, campaign discovery, real-time notifications, and secure payments.

For the backend, visit the [CrowdSpark Backend Repository](https://github.com/Anirudh-Singh-26/crowdspark-backend).
Frontend repo: [CrowdSpark Frontend](https://github.com/Anirudh-Singh-26/crowdspark-frontend)

---

## 🔗 Live Demo

[🌐 Visit Live Demo](https://crowdspark-frontend-gamma.vercel.app/)

---

## 🗂 Related Repositories

* **Backend:** [CrowdSpark Backend](https://github.com/Anirudh-Singh-26/crowdspark-backend)

---

## 🛠 Tech Stack

* **Frontend:** React + Vite, Tailwind CSS, Redux Toolkit, React Router
* **Networking:** Axios, Socket.IO Client
* **Payments:** Razorpay Integration

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Anirudh-Singh-26/crowdspark-frontend.git
cd crowdspark-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BACKEND=https://crowdspark-backend.onrender.com
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

---

## 🌟 Key Features

* 🔑 **Authentication** with HttpOnly Cookies
* 🧑‍💼 **Role-Based Dashboard** for Admins, Campaign Owners, and Backers
* 📢 **Campaign Management** (Create, Edit, Discover)
* 💰 **Secure Payments** via Razorpay
* 📄 **Invoice Downloads**
* 📬 **Role Upgrade Request System**
* 🔔 **Real-Time Notifications** powered by Socket.IO
* 📊 **Admin Panel** to manage users and campaigns

---

## 📁 Folder Structure

```
crowdspark-frontend/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ context/
│  ├─ pages/
│  ├─ services/
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🖼 Screenshots (Optional)

![Landing Page](/crowdspark-frontend/public/CrowdSparkHero.png)
![Dashboard](/crowdspark-frontend/public/CrowdSparkDash.png)

---

## 📘 License

MIT © Anirudh Singh Rathore