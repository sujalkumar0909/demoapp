import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Createaccount.css';

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCreateAccount = useCallback((e) => {
    e.preventDefault();

    navigate('/account-settings', { state: formData });
  }, [formData, navigate]);

  return (
    <div className="create-account-container">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleCreateAccount}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="input-group" key={key}>
            <label>{key === 'isAgency' ? 'Are you an Agency?*' : `${key.charAt(0).toUpperCase() + key.slice(1)}*`}</label>
            {key === 'isAgency' ? (
              <select name={key} value={value} onChange={handleChange} required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            ) : (
              <input
                type={key === 'password' ? 'password' : key === 'email' ? 'email' : key === 'phoneNumber' ? 'tel' : 'text'}
                placeholder={`Enter ${key}`}
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="create-account-btn">Create Account</button>
      </form>
      <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default React.memo(CreateAccount);