# Zerodha-Clone

A full-stack clone of the Zerodha trading platform, built for learning, demo, and portfolio purposes.  
This project is divided into **frontend**, **backend**, and **dashboard** applications, all deployable and independently scalable.

---

## 🚀 Live Demo Links

- **Frontend**: [zerodha-clone-frontend-eight.vercel.app](https://zerodha-clone-frontend-eight.vercel.app)
- **Backend**: [zerodha-clone-zo2k.onrender.com](https://zerodha-clone-zo2k.onrender.com)
- **Dashboard**: [zerodha-clone-bay-nu.vercel.app](https://zerodha-clone-bay-nu.vercel.app)

```

## 📁 Project Structure

Zerodha-Clone/
│
├── backend/         # Node.js/Express REST API (authentication, data management)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/        # Main client-facing React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── dashboard/       # Admin dashboard (React)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── charts/
│   │   └── App.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

- **Frontend:** React, JavaScript, CSS
- **Backend:** Node.js, Express, MongoDB/Mongoose
- **Dashboard:** React, Chart.js (or similar), JavaScript
- **Deployment:** Vercel (Frontend, Dashboard), Render (Backend)

---

## 🌟 Features

### Frontend
- User authentication (login/signup)
- Live/Mock market data display
- Buy/sell stocks functionality
- Responsive UI

### Backend
- User CRUD (register, auth, profile)
- Order and trade management
- Data persistence with MongoDB
- Secure API endpoints with JWT

### Dashboard
- Admin login
- Manage users and orders
- View platform analytics

---

## 🏁 Getting Started — Local Setup

### 1. **Clone the repository**

git clone https://github.com/heymadhurhere/Zerodha-Clone.git
cd Zerodha-Clone

### 2. **Backend Setup**
cd backend
npm install

Copy .env.example to .env and set environment variables (MongoDB URI, JWT secret, etc.)
npm start # or npm run dev


### 3. **Frontend Setup**

cd ../frontend
npm install

Set REACT_APP_BACKEND_URL in .env to your backend URL (local or Render)
npm start


### 4. **Dashboard Setup**

cd ../dashboard
npm install

Set REACT_APP_BACKEND_URL in .env to your backend URL
npm start


---

## 🏄 Deployment

### Frontend & Dashboard
- Deployed on **Vercel**.
- Set necessary environment variables (like `REACT_APP_BACKEND_URL`) in the [Vercel dashboard](https://vercel.com/) for each project before deployment.

### Backend
- Deployed on **Render**: [https://zerodha-clone-zo2k.onrender.com](https://zerodha-clone-zo2k.onrender.com)
- Ensure you add your production database and JWT config in Render settings.

---

## 🔗 Connecting the Layers

- **Frontend/Dashboard ↔ Backend:**  
  Set the backend URL in the frontend and dashboard configuration (usually `.env`):

REACT_APP_BACKEND_URL=https://zerodha-clone-zo2k.onrender.com

---

## ⚠️ Notes & Limitations

- This is a demo clone for educational/portfolio purposes.
- No real money is involved, and the API/data is simulated.
- Some advanced original Zerodha features may be missing.
- Security and stability not production-grade — do not use for live trading.

---

## 🧑‍💻 Contribution Guidelines

1. Fork this repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is open-source and for educational purposes only.

---

## 👤 Author

- [@heymadhurhere](https://github.com/heymadhurhere)

