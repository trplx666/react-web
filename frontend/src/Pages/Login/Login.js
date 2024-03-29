import React, { useState } from 'react';
import { FormGroup, Form, FormControl, FormText, Button, Row , Col } from 'react-bootstrap';
import styles from './Login.css'; 

const initialUser = { password: '', email: '' };

export const Login = () => {
    const [user, setUser] = useState(initialUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const  handleLogin = () =>{};   

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
