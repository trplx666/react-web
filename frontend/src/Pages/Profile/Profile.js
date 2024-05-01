import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";
import './Profile.css';
import { userData } from "../../helpers";

const Profile = ({ token }) => {
  const [user, setUser] = useState({});
  const [isUserUpdated, setisUserUpdated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.log({ error });
    }
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
        <Button variant="primary">Change password</Button>{' '}
        <Button variant="primary" href="profile/orders" >Orders</Button>{' '}
        <p style={{ marginTop: '10px' }}>
          <Button variant="danger" onClick={handleShowModal}>Log out</Button>{' '}
        </p>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>No</Button>
          <Button variant="danger" onClick={handleLogout}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
