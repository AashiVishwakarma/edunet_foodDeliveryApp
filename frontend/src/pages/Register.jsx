// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       Register
//     </div>
//   )
// }

// export default Register

// import React from 'react'

// export default function Register() {
//   return (
//     <div>
//       Register
//     </div>
//   )
// }

import React, { useState } from "react";
import './RegisterPage.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    alert("Registration successful");
    // Proceed with registration logic (API call, etc.)
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
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
          <div className="input-group">
            <label><b>Confirm Password:</b></label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn"><b>Register</b></button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login"><b>Login here</b></a>
        </p>
      </div>
    </div>
  );
};

export default Register;
