// LoginPage.js
import React, { useState } from 'react';
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call for login
    console.log('Logging in user with email:', email);
    console.log('Password:', password);
    // You can add more validation and error handling here
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <div className="login-form-wrapper">
        <h3 className='head'>Login</h3>
        <h4 className='middle-head'>Welcome back to ECOMMERCE</h4>
        <h5 className='bottom-head'>The next gen business marketplace</h5>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="password-input-container">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="password-toggle" onClick={handleTogglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-center text-sm">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">SIGN UP</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
