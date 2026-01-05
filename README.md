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

We’ll use:
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