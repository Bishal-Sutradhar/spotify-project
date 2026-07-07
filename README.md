# 🎵 Spotify Backend API

A Spotify-inspired backend built with **Node.js**, **Express.js**, and **MongoDB**. This project provides secure authentication, role-based authorization, song management, and media uploads using ImageKit.

---

## 🚀 Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🎤 Artist Role Authorization
- 🎵 Song Upload & Management
- 🖼️ Image Upload with ImageKit
- 📁 Multer Memory Storage
- 🗄️ MongoDB Database
- 🔒 Password Hashing with bcrypt
- ⚠️ Centralized Error Handling
- 🌱 Environment Variables using dotenv
- 📂 Modular MVC Architecture

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| Password Encryption | bcrypt |
| File Upload | Multer |
| Cloud Storage | ImageKit |
| Environment Variables | dotenv |

---

## 📁 Project Structure

```text
spotify-backend/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Bishal-Sutradhar/spotify-project.git
```

Navigate to the project

```bash
cd spotify-project
```

Install dependencies

```bash
npm i
```

---

## ▶️ Running the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## 🔐 Authentication Flow

1. User registers.
2. Password is hashed using bcrypt.
3. User logs in.
4. JWT token is generated.
5. Protected routes verify the token.
6. Artist-only routes require the `artist` role.

---

## 📌 API Modules

### Authentication
- Register User
- Login User

### Users
- View Profile
- Update Profile

### Artists
- Upload Songs
- Create Albums
- Manage Songs

### Media
- Upload Song Cover
- Upload Audio File

---

## 🛡️ Security

- JWT Authentication
- Password Hashing (bcrypt)
- Role-Based Authorization
- Protected Routes
- Environment Variables
- Centralized Error Handling

---

## 📚 Learning Outcomes

This project helped me understand:

- REST API Development
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Role-Based Authorization
- Middleware
- File Uploads
- ImageKit Integration
- Error Handling
- Backend Project Architecture
- Git & GitHub Workflow

---

## 🚀 Future Improvements

- Playlist Support
- Music Streaming
- Like Songs
- Search Functionality
- Refresh Tokens
- Email Verification
- Password Reset
- Admin Dashboard
- Docker Support
- Swagger API Documentation
- Unit & Integration Testing

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to GitHub
5. Open a Pull Request

---

## 👨‍💻 Author

**Bishal Sutradhar**

GitHub: https://github.com/Bishal-Sutradhar 
---

⭐ If you like this project, consider giving it a **Star** on GitHub!
