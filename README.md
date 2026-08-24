<div align="center">
  <h1>🛒 Add-to-Cart Project</h1>
  <p>A high-performance, modular, and reusable <strong>Full-Stack (MERN) B2C Shopping Cart System</strong> built with a unified Monorepo architecture.</p>
</div>

<div align="center">
  <!-- Tech Stack Badges -->
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>

---

## 🎯 Project Overview

This repository houses a production-ready shopping cart integration engineered with decoupled frontend and backend components. It demonstrates advanced state management, asynchronous cloud database syncing, and a bespoke UI tailored for immersive gaming or tech-related E-commerce platforms.

Developed with ❤️ by **[Muhammad Ammar](https://github.com/mAmmar03)**.

---

## ✨ Key Highlights

### 🎨 UI & UX Design
- **Sleek Futuristic Aesthetic:** Engineered with high-contrast elements, custom-angled containers, dynamic star ratings, and vibrant neon accent colors (Neon Blue, Purple, Orange).
- **Dynamic Radial Neon Glow:** Implements CSS radial-gradients and blur filters to render soft glow backdrops matching each physical product.
- **Unified Fluid Layout:** Deploys a fully fluid layout spanning 100% of the viewport width, eliminating restrictive side-borders for a clean and immersive browsing experience.
- **Glassmorphic Slide-out Drawer:** Uses backdrop-filter blur and keyframe transitions to render an elegant sidebar for managing cart items, absolute quantities (+/-), and total checkout bills.

### ⚙️ Architecture & Reusability
- **Modular Monorepo Structure:** Houses both `modular-cart-backend` and `modular-cart-frontend` in a single repository for simplified CI/CD, versioning, and folder orchestration.
- **Decoupled Backend Cart API:** The backend operates as a standalone package, receiving payload details dynamically from the client instead of hard-coupling with a specific Product schema. This allows you to plug this exact Cart backend into any future project.
- **Pure Encapsulated CSS:** Every single React component utilizes its own encapsulated `.css` file rather than utility-first frameworks, ensuring clean styling, fast render paths, and high maintainability.

---

## 📁 Directory Structure

```text
Add-to-cart-project/
├── .gitignore
├── README.md
├── modular-cart-backend/          # Backend Microservice
│   ├── package.json
│   ├── .env (Ignored)
│   └── src/
│       ├── server.js              # Server Initialization
│       ├── config/
│       │   └── db.js              # Database Connection (MongoDB Atlas)
│       └── modules/
│           └── cart/              # Reusable Cart Module (MVC Pattern)
│               ├── cart.model.js
│               ├── cart.controller.js
│               └── cart.routes.js
│
└── modular-cart-frontend/         # React Frontend Application
    ├── package.json
    ├── index.html
    └── src/
        ├── App.jsx                # Global State coordinator
        ├── App.css                # Grid & Page layout styling
        ├── index.css              # Global styles, variables & resets
        └── components/
            ├── Header/            # Navigation bar with dynamic badge
            ├── ProductCard/       # Glowing neon cards with rating systems
            ├── CartDrawer/        # Glassmorphic slide-out drawer
            └── Footer/            # Specialized developer portfolio section
```

---

## 🔌 REST API Endpoints

All backend endpoints are prefixed with `/api/cart`.

| HTTP Method | Route | Description | Expected Payload |
| :--- | :--- | :--- | :--- |
| **GET** | `/:userId` | Retrieves the cart associated with the given user ID. | *None* |
| **POST** | `/add` | Adds a product to the cart or increments the quantity if it already exists. | `{ "userId": "...", "productId": "...", "quantity": 1, "price": 100 }` |
| **PUT** | `/update` | Updates the absolute quantity of a specific item in the cart. | `{ "userId": "...", "productId": "...", "quantity": 5 }` |
| **DELETE** | `/remove` | Removes a product completely from the user's cart. | `{ "userId": "...", "productId": "..." }` |

---

## 🏃 Local Installation & Setup

To run both the server and frontend applications locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a running local MongoDB instance.

### 1. Clone the Project
```bash
git clone https://github.com/mAmmar03/Add-to-cart-project.git
cd Add-to-cart-project
```

### 2. Configure Backend APIs
1. Navigate to the backend directory:
   ```bash
   cd modular-cart-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside the `modular-cart-backend` root folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_uri
   ```
4. Start the server using Nodemon:
   ```bash
   npm run dev
   ```
   You should see `Server is running on port 5000` and `MongoDB Connected`.

### 3. Configure Frontend App
1. Open a new terminal session and navigate to the frontend directory:
   ```bash
   cd ../modular-cart-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite bundler:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

---

## 🤝 Let's Connect

Feel free to reach out to collaborate on Full-Stack applications:

- **GitHub:** [mAmmar03](https://github.com/mAmmar03)
- **Portfolio:** [Visit Portfolio](https://ammar-portfolio-mocha.vercel.app/))
