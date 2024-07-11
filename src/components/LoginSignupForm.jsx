import React, { useState } from 'react';
import './LoginSignupForm.css';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      {isLogin ? (
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
          <p onClick={toggleForm} className="toggle-link">Don't have an account? Signup</p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit">Signup</button>
          </form>
          <p onClick={toggleForm} className="toggle-link">Already have an account? Login</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignupForm;
