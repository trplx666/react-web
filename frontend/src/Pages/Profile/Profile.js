import React from "react";
import { userData } from "../../helpers";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Profile = () => {
  const { username } = userData();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('user', "");
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome {username}</h2>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>{' '}
    </div>
  );
};

export default Profile;
