import React, { useState } from 'react';
import { FormGroup, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const initialUser = { email: "", password: "", username: "" };

export const Register = () => {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const SignUp = async () => {
        try {
            const url = 'http://localhost:1337/api/auth/local/register';
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user);
                if (res) {
                    setUser(initialUser);
                    navigate('/login');
                }
            }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true,
            });
        }
    };

    const handleUserChange = ({ target }) => {
        let { name, value } = target;
        
        if (name === 'username') {
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }

        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    return (
        <div className="d-flex justify-content-center align-items-center register-container">
            <Col xs="12" md="6" lg="4">
                <h2>Sign Up:</h2>
                <FormGroup className="mb-3">
                    <Form.Control
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleUserChange}
                        placeholder="Enter your full name"
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Control
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleUserChange}
                        placeholder="Enter your email"
                        required
                    />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Control
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleUserChange}
                        placeholder="Enter password"
                        required
                    />
                </FormGroup>
                <Button variant="primary" onClick={SignUp} className="buttonContainer">Sign up</Button>{' '}
                <h6 className="loginContainer">
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        Already have an account?
                    </Link>
                </h6>
            </Col>
        </div>
    );
};

export default Register;
