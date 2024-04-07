import React, { useState } from 'react';
import { FormGroup, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { storeUser } from '../../helpers';

const initialUser = { password: "", identifier: "" };

export const Login = () => {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();
    
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        const url = 'http://localhost:1337/api/auth/local';
        try {
            if (user.identifier && user.password) {
                const { data } = await axios.post(url, user);
                if (data.jwt) {
                    storeUser(data);
                    toast.success('Logged in successfully! ', {
                        hideProgressBar:true,
                    });
                    setUser(initialUser);
                    navigate('/profile');
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('Wrong identifier or password', {
                    hideProgressBar: true,
                });
            } else {
                toast.error(error.message, {
                    hideProgressBar: true,
                });
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center login-container">
            <Col xs="12" md="6" lg="4">
                <h2>Login:</h2>
                <FormGroup className="inputContainer">
                    <Form.Control
                        type="email"
                        name="identifier"
                        value={user.identifier}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </FormGroup>
                <FormGroup className="inputContainer">
                    <Form.Control
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </FormGroup>
                <div className="buttonContainer">
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>{' '}
                </div>
                <h6 className="createContainer">
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        Don't have an account? 
                    </Link>
                </h6>
            </Col>
        </div>
    );
};

export default Login;
