// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

// export default Login

// import React from 'react'
// import { Link } from 'react-router-dom';


// export default function Login() {
//   return (
//     <div>
//       <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Login</button>
// </form>
//     </div>
//   )
// }











import React, { useState } from "react";
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email === "test@example.com" && password === "password123") {
      alert("Logged in successfully");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label><b>Email:</b></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label><b>Password:</b></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn"><b>Login</b></button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register"><b>Register here</b></a>
        </p>
      </div>
    </div>
  );
};

export default Login;
