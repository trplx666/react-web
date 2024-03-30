import React, { useState } from 'react';
import { FormGroup, Form, Button, Row , Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './Login.css'; 

const initialUser = { password: '', email: '' };

export const Login = () => {
    const [user, setUser] = useState(initialUser);

    const handleChange = ({target}) => {
        const {name, value} = target
        setUser((currentUser) => ({
        ...currentUser,
        [name] : value,
        }))
    };

    const  handleLogin = async() =>{
        const url = 'http://localhost:1337/api/auth/local'
        try {
            if (user.email && user.password) {
                const res = await axios.post(url, user);
                console.log({res});
            }
        } catch (error) {
            toast.error (error.message, {
                hideProgressBar: true,
            })
            
        }
    };   

    return (
        <Row className={styles.loginContainer}> 
            <Col sm= '12' md = {{size: 4, offset: 4}}>
            <div>
                <h2>Login:</h2>
                <FormGroup className='inputContainer'>
                    <Form.Control
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </FormGroup>
                <FormGroup className='inputContainer'>
                    <Form.Control
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </FormGroup>
                <div className='buttonContainer'>
                <Button variant="primary" onClick={handleLogin}>Login</Button>{' '}
                </div>
            </div>
            </Col>
        </Row>
    );
};
