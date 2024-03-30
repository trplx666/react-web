import React, { useState } from 'react';
import { FormGroup, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './Login.css';
import { Link } from 'react-router-dom';

const initialUser = { password: '', email: '' };

export const Login = () => {
    const [user, setUser] = useState(initialUser);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [attemptedLogin, setAttemptedLogin] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPassword = (password) => {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password);
    };

    const handleLogin = async () => {
        setAttemptedLogin(true);
        if (!isValidEmail(user.email)) {
            setEmailError('The email address must contain the "@" symbol. The address "' + user.email + '" is missing the "@" symbol.');
        }
        if (!isValidPassword(user.password)) {
            setPasswordError('The password must contain at least one uppercase letter, one digit, one special character, and be at least 8 characters long.');
        }
        if (isValidEmail(user.email) && isValidPassword(user.password)) {
            const url = 'http://localhost:1337/api/auth/local';
            try {
                const res = await axios.post(url, user);
                console.log({ res });
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    toast.error('Wrong email or password', {
                        hideProgressBar: true,
                    });
                } else {
                    toast.error(error.message, {
                        hideProgressBar: true,
                    });
                }
            }
        }
    };

    const handleEmailChange = (event) => {
        handleChange(event);
        if (emailError && event.target.value.trim() !== '' && isValidEmail(event.target.value)) {
            setEmailError('');
        }
    };

    const handlePasswordChange = (event) => {
        handleChange(event);
        if (passwordError && event.target.value.trim() !== '' && isValidPassword(event.target.value)) {
            setPasswordError('');
        }
    };

    return (
        <Row className={styles.loginContainer}>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
                <div>
                    <h2>Login:</h2>
                    <FormGroup className="inputContainer">
                        <Form.Control
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                        />
                        {attemptedLogin && emailError && <Alert variant="danger">{emailError}</Alert>}
                    </FormGroup>
                    <FormGroup className="inputContainer">
                        <Form.Control
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                        />
                        {attemptedLogin && passwordError && <Alert variant="danger">{passwordError}</Alert>}
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
                </div>
            </Col>
        </Row>
    );
};
