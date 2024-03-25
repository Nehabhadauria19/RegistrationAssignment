import React, { useState, useRef } from "react";
import "./SignupForm2.css";

const SignupForm2 = ({ email, onVerifyCode }) => {
  const [inputCodes, setInputCodes] = useState(Array(8).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedCodes = [...inputCodes];
      updatedCodes[index] = value.substring(0, 1); // Restrict to one digit
      setInputCodes(updatedCodes);
      setErrorMessage("");
      if (value && index < inputCodes.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const code = inputCodes.join("");
    if (code.length !== 8) {
      setErrorMessage("The code must be 8 digits.");
      return;
    }
    onVerifyCode(code);
  };

  return (
    <form className="email-verification-code" onSubmit={handleFormSubmit}>
      <h2>Verify your email:</h2>
      <p>
        Enter the 8 digit code you have received on{email}
        <span className="email">{email}</span>
      </p>
      <h4>Code</h4>
      <div className="code-input-container">
        {inputCodes.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            maxLength={1}
            className="code-input"
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <button type="submit" className="verify-button">
        Verify Code
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default SignupForm2;
