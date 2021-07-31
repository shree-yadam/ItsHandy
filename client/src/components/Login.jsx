import axios from 'axios';
import React, { useState } from 'react';

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
    <form>
        <label>Email address
        <input type="email" placeholder="Enter email" value={email} onChange={(event) => setUser(event.target.value)}/>
        </label>

        <label>Password

        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </label>
        <br/>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
    </form>
  );
}