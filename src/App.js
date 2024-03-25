import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import SignupForm2 from './components/SignupForm2';
import LoginPage from './components/LoginPage';
import ProtectedPage from './components/ProtectedPage';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navigation bar */}
      <Header/>
      <div className="navbar">
        <button onClick={() => navigateTo('signup')}>Signup Form 1</button>
        <button onClick={() => navigateTo('signup2')}>Signup Form 2</button>
        <button onClick={() => navigateTo('login')}>Login Page</button>
        <button onClick={() => navigateTo('protectedPage')}>Protected Page</button>
      </div>

      {/* Conditional rendering based on currentPage state */}
      {currentPage === 'signup' && <SignupForm />}
      {currentPage === 'signup2' && <SignupForm2 />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'protectedPage' && <ProtectedPage />}
    </div>
  );
}

export default App;
