import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="button-container">
        <button className="create-account-btn" onClick={() => navigate('/create-account')}>Create Account</button>
        <button className="login-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
      </div>
      <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default React.memo(Welcome);