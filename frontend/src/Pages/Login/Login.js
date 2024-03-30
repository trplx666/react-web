import React, { useState } from 'react';
import { FormGroup, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './Login.css';
import { Link, useNavigate } from 'react-router-dom';




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
                const {data} = await axios.post(url, user);
if (data.jwt) {
    toast.success('Logged in successfully! ', {
        hideProgressBar:true,
    })
    setUser(initialUser)
    navigate('/')
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
        <Row className={styles.loginContainer}>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
                <div>
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
                </div>
            </Col>
        </Row>
    );
};
