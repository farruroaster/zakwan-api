# Zakwan Product Management API 🧠📦

This is a full-stack product management app built using **Node.js**, **Express**, and a **vanilla frontend UI**, where all product data is stored in a simple `products.json` file.

Live Demo:
- 🟢 Frontend (Netlify): https://zakwanproject.netlify.app/
- 🔵 Backend (Render): [https://zakwan-api.onrender.com](https://zakwan-api.onrender.com)

---

## 🛠 Features

- View all products
- Add a new product (via API)
- Edit product details
- Delete a product
- Clean & responsive frontend UI
- JSON-based data storage (no database needed)

---

## 📦 API Endpoints

| Method | Route                  | Description            |
|--------|------------------------|------------------------|
| GET    | `/products`            | Get all products       |
| GET    | `/products/:id`        | Get a product by ID    |
| POST   | `/products`            | Create a new product   |
| PUT    | `/products/:id`        | Update a product       |
| DELETE | `/products/:id`        | Delete a product       |

---

# 👉 How to Run the Project

git clone https://github.com/farruroaster/zakwan-api.git
cd zakwan-api-main
npm install
node index.js

# 🖥️ Server runs at: http://localhost:3000

---

## 📁 Folder Structure
{
  "name": "Bluetooth Speaker",
  "price": 120
}

zakwan/
├── products.json         # Stores product data
├── index.js              # Node.js Express API
├── frontend/             # Static UI (HTML + JS)
│   └── index.html
└── README.md
---

## 🚀 Tech Stack

- Node.js
- Express.js
- HTML + CSS + JS (Vanilla)
- Netlify (frontend hosting)
- Render (backend hosting)

---

## 👨‍💻 Made by Zakwan ([@farruroaster](https://github.com/farruroaster))
