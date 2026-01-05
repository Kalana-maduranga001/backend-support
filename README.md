# 🔐 Full Authentication Flow (Backend + Frontend)

A **complete JWT-based authentication system** using **Node.js + React**, designed with **clean architecture**, **Axios helpers**, and **Context API**.

---

## 🚀 What We Are Building

✔ User Registration
✔ User Login
✔ JWT Token Storage
✔ Protected Routes
✔ Auto Login (Session Persistence)
✔ Logout
✔ Role-Based Access Control (Admin / User)

---

## 🧩 Project Structure Overview

```
Frontend (React)
 ├── Axios Instance
 ├── Auth Context
 ├── Protected Routes
 └── Role Guards

Backend (Node.js)
 ├── Register API
 ├── Login API
 ├── JWT Generator
 └── Auth Middleware
```

---

## 🧩 PHASE 1 – Backend Authentication ✅ (Completed)

The backend is **fully ready** and secure.

✔ Register API
✔ Login API
✔ JWT Token Creation
✔ Authentication Middleware

> 🔒 Backend handles **JWT validation** and **role checking**

---

## 🧩 PHASE 2 – Frontend Authentication (React)

### 🧠 Key Idea

Instead of writing this everywhere ❌

```js
axios.post("http://localhost:5000/api/auth/login", data);
```

You write this once ✅

```js
API.post("/auth/login", data);
```

✨ **Cleaner code. Less repetition. More control.**

---

## ⚙ Axios Helper Setup (Core Concept)

### ❓ What is this Axios file?

🚫 Not a command
🚫 Not auto-generated

✅ It is **your own helper file** that:

* Knows your backend base URL
* Automatically attaches JWT token
* Keeps API calls clean and readable
* Avoids repeating `http://localhost:5000/api`

---

## 📁 Example File Location

```
src/
 └── api/
     └── axios.js
```

---

## 🧠 Line-by-Line Explanation (Very Important)

### 1️⃣ Create Axios Instance

```js
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});
```

🔹 Every request automatically starts with:

```
/auth/login  →  http://localhost:5000/api/auth/login
```

---

### 2️⃣ Axios Interceptor (✨ THE MAGIC ✨)

```js
API.interceptors.request.use((req) => {
```

🧠 **Interceptor means:**

> “Before sending any request, stop here and modify it”

---

### 3️⃣ Read JWT Token from Storage

```js
const token = localStorage.getItem("token");
```

🔹 Token is received **after successful login**

---

### 4️⃣ Attach Token to Request Headers

```js
req.headers.Authorization = `Bearer ${token}`;
```

📌 Backend middleware expects this format:

```
Authorization: Bearer <JWT_TOKEN>
```

✔ Enables **protected routes**
✔ Enables **role-based access**

---

### 5️⃣ Export API Instance

```js
export default API;
```

🎉 Now this API can be used **anywhere in your app**

---

## ✅ Final Result

✔ Clean API calls
✔ Centralized token handling
✔ Secure protected routes
✔ Scalable architecture
✔ Professional production-ready setup

---

## 🏁 Summary

This approach gives you:

* 🔐 Secure authentication
* 🧼 Clean & maintainable code
* 🚀 Scalable frontend structure
* 💼 Industry-level best practices

---

⭐ **If you like this setup, star the repo and keep building!**
Happy coding 🚀
