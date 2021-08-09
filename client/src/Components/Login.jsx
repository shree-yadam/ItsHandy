import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import './login.scss';
import Button from 'react-bootstrap/Button';

export default function Login({setCurrentUser}) {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  // Browser History
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('/api/users/login', {
      email,
      password
    })
    .then((res) => {
      setError(null);

      setCurrentUser({
        id: res.data.id,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        email: res.data.email,
        is_provider: res.data.is_provider
      });
      if(res.data.is_provider){
        history.push(`/provider/${res.data.id}`);
      } else {
        history.push(`/client/${res.data.id}`);
      }
    })
    .catch((err) => {
      console.log(err);
      setError("Invalid email or password");
    })
  }

  return (
    <div className="form-container">
      {error &&
      <p className="login-error" >{error}</p>
      }
      <Form className="login-form">
        <h2>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setUser(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit"  onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}