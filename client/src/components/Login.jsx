import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import './login.scss';
import Button from './Button';

export default function Login({currentUserDetails, setCurrentUserDetails}) {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');

  // Browser History
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    axios.post('api/users/login', {
      email,
      password
    })
    .then((res) => {
      console.log(res);
      //TBD:: Check user state setting
        setCurrentUserDetails({
        id: res.id,
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email,
        is_provider: res.is_provider
      });
      //TBD:: Redirect to Dashboard
      history.push("/dashboard");
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