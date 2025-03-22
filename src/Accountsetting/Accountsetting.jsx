import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AccountSetting.css';
import profileImage from '../profile.jpg';

function AccountSettings() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
  });

  useEffect(() => {
    if (location.state) {
      setUserData(location.state);
    }
  }, [location.state]);

  return (
    <div className="account-settings-container">
      <h1>Account Settings</h1>
      <div className="user-info">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <p>{userData.fullName}</p>
        <p>{userData.email}</p>
      </div>
      <p className="description">
        Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitz. Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam
      </p>
      <button className="go-back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default React.memo(AccountSettings);