🔐 FULL AUTH FLOW (BACKEND + FRONTEND)
What we are going to build

✔ User Register
✔ User Login
✔ JWT token storage
✔ Protected routes
✔ Auto login (persist session)
✔ Logout
✔ Role-based access (admin / user)

🧩 PHASE 1 – BACKEND AUTH (Finalize)
✅ Already Done

✔ Register API
✔ Login API
✔ JWT creation
✔ Auth middleware

So backend is READY ✅

🧩 PHASE 2 – FRONTEND AUTH (LOGIN + REGISTER)

React
 --------- -----------
      | Axios |   
----------- --------

🧠 Think of it like this

Instead of writing this everywhere ❌:
axios.post("http://localhost:5000/api/auth/login", data)

You write this ✅:
API.post("/auth/login", data)


And token is attached automatically
Context API (simple & clean)

❓ What is this Axios setup actually doing?

This file is NOT a command
This file is NOT auto-created

👉 It is your own helper file that:

Knows your backend URL
Automatically sends JWT token with every request

Avoids writing http://localhost:5000/api again and again

🧠 Line-by-Line Explanation (Very Important)
1️⃣ Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api"
});


👉 This means:

Every request starts with /api

/auth/login → http://localhost:5000/api/auth/login

2️⃣ Interceptor (THIS IS THE MAGIC)
API.interceptors.request.use((req) => {


🧠 Interceptor =
👉 “Before sending request, stop here and modify it”

3️⃣ Read JWT token
const token = localStorage.getItem("token");


Token comes from backend after login.

4️⃣ Attach token to headers
req.headers.Authorization = `Bearer ${token}`;


Backend middleware expects:

Authorization: Bearer <TOKEN>


So protected routes work.

5️⃣ Export API
export default API;


Now you can use it anywhere.