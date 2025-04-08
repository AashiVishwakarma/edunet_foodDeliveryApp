import React, { useState } from "react";
import axios from 'axios';
import './RegisterPage.css';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // ✅ Password confirmation check BEFORE API call
  //   if (form.password !== form.confirmPassword) {
  //     setError("Passwords do not match!");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:3000/register', form);
  //     console.log("Response:", response); // Debug line
  //     alert('User Registered Successfully!');
  //     setError("");
  //   } catch (err) {
  //     console.error("Frontend Error:", err.response ? err.response.data : err.message);
  //     setError(err.response ? err.response.data.message : 'Registration failed!');
  //   }
    
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', form, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, 
      });
      alert('User Registered Successfully!');
    } catch (err) {
      console.error("Frontend Error:", err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label><b>Username:</b></label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label><b>Email:</b></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label><b>Password:</b></label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label><b>Confirm Password:</b></label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
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

