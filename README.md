# 📝 MERN Notes App

A full-stack Notes App built using the MERN stack with JWT authentication, CRUD functionality, and MongoDB persistence.

## 🚀 Live Demo
🌐 Frontend: [startling-trifle-aa4080.netlify.app](https://startling-trifle-aa4080.netlify.app/)

## 📁 GitHub Repository
🔗 [ParitoshBarman/MERN-Notes-App](https://github.com/ParitoshBarman/MERN-Notes-App)

## 🔧 Tech Stack
- **Frontend:** React, Chakra UI v3, React Router, Context API
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Frontend on Netlify, Backend on Render

## ✅ Core Features
- User Authentication: Sign Up, Login (JWT-based)
- Create, Read, Update, and Delete Notes
- Rich/Plain Text Editor (Textarea-based)
- User-specific note visibility
- Confirmation on note deletion

## 🎯 Stretch Goals (Coming soon)
- Tags & Category Filters
- Image Attachments (Cloudinary)
- Keyword-based Search

## 🛠️ Project Setup

### Backend
```bash
cd backend
npm install
# Create .env file with:
# MONGODB_URI=<your_mongo_connection_string>
# JWT_SECRET=<your_jwt_secret>
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notesApp
JWT_SECRET=your_jwt_secret_key
```

## 📦 Folder Structure

```
MERN-Notes-App/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   └── App.jsx
```
