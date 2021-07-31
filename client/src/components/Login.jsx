import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './login.scss';
import Button from './Button';

export default function Login() {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    axios.post('api/login', {
      email,
      password
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="form-container">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setUser(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit"  onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
}