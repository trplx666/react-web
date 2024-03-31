import React, { useState } from 'react';
import { FormGroup, Form, Button, Row, Col } from 'react-bootstrap';
import './Register.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
const initialUser = {email:"", password: "", username: ""};
export const Register = () => {
    const [user, setUser] = useState({initialUser});
    const navigate = useNavigate();
    const SignUp =async() => {
        try {
            const url = 'http://localhost:1337/api/auth/local/register';
            if (user.username && user.email&& user.password){
            const res = await axios.post(url, user)
            if (res) {
                setUser(initialUser);
                navigate('/login')
            }
        }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar:true,
            })
        }
    };

    const handleUserChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };
    return(
    <Row>
        <Col sm = '12' md={{size: 4, offset:4}} className="register">
            <h2>Sign Up:</h2>
            <FormGroup>
                        <Form.Control
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleUserChange}
                            placeholder="Enter your full name"
                        />
            </FormGroup>
            <FormGroup>
                        <Form.Control
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleUserChange}
                            placeholder="Enter your email"
                        />
            </FormGroup>
            <FormGroup>
                        <Form.Control
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleUserChange}
                            placeholder="Enter password"
                        />
            </FormGroup>
            <Button variant="primary" onClick={SignUp} className="buttonContainer">Sign up</Button>{' '} 
            <h6 className="loginContainer">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                        Already have an account?
                        </Link>
            </h6>
        </Col>
    </Row>
    );
};

export default Register;
