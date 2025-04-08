// import React, { useState } from "react";
// import './LoginPage.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// function Login() {

//   // const navigate = useNavigate();

//   // const handleLogin = () => {
//   //   // After successful login
//   //   navigate('/Home'); 
//   // };


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
    
//   //   if (email === "test@example.com" && password === "password123") {
//   //     alert("Logged in successfully");
//   //   } else {
//   //     setError("Invalid email or password");
//   //   }
//   // };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/login', { email, password });
//       alert(response.data || 'Logged in successfully!');
//     } catch (err) {
//       console.error(err);
//       setError('Login failed!');
//     }
//   };
  

//   return (
    
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label><b>Email:</b></label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label><b>Password:</b></label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn"><b>Login</b></button>
//           {/* <button onClick={handleLogin}>Login</button> */}
//         </form>
//         <p className="register-link">
//           Don't have an account? <a href="/register"><b>Register here</b></a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;










// --------------------------------------------


import React, { useState } from "react";
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      alert(response.data || 'Logged in successfully!');
      navigate('/'); 
    } catch (err) {
      console.error(err);
      setError('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
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
}

export default Login;
