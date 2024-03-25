// components/SignupForm.js
import React, { useState } from 'react';
import "./SignupForm.css"; // Import the CSS file

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call for signup
    console.log('Signing up user with name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add more validation and error handling here
  };

  return (
    <div className="signup-form-container"> {/* Apply container styles */}
   
      <div className="signup-form-wrapper"> {/* Apply wrapper styles */}
      <h3 className='head'>Create your account</h3>
        <form onSubmit={handleSubmit} className="signup-form"> {/* Apply form styles */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4"> {/* Added margin bottom for spacing */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div className="text-center text-sm">
            Have an account? <a href="/login" className="text-blue-500 hover:underline">LOGIN</a> {/* Added login link */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
