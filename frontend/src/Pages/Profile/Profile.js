import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IoPersonCircleOutline } from "react-icons/io5";
import './Profile.css';
import { userData } from "../../helpers";

const Profile = ({ token }) => {
  const [user, setUser] = useState({});
  const [isUserUpdated, setisUserUpdated] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `bearer ${userData().jwt}`,
          },
        });
        setUser(data);
        setisUserUpdated(false);
      } catch (error) {
        console.log({ error });
      }
    };
    getProfileData();
  }, [token, isUserUpdated]);

  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
          <IoPersonCircleOutline size={125} />
        </div>
      </div>
      <div className="body">
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Account created at: {new Date(user.createdAt).toLocaleDateString()}</p>
        <Button variant="primary">Change password</Button>{' '} <Button variant="primary">Delivery information</Button>{' '}
        <p style = {{ marginTop: '10px'}} >
        <Button variant="danger" onClick={handleLogout} >Log out</Button>{' '}
        </p>
      </div>
    </div>
  );
};

export default Profile;
