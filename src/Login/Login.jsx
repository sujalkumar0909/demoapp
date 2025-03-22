import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback((e) => {
    e.preventDefault();

    const userData = {
      fullName: 'Marry Doe', 
      email,
      companyName: 'PopX',
      isAgency: 'No',
    };

    navigate('/account-settings', { state: userData });
  }, [email, navigate]);

  return (
    <div className="login-container">
      <h1>Sign in to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default React.memo(Login);