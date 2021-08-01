import axios from 'axios';
import React, { useState } from 'react';
import Button from './Button';
import { Form } from 'react-bootstrap';
import './register.scss'

export default function Register() {
  const [newUser, setNewUser] = useState(
{
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    contact_number: ""

});

const handleRegister =(event) => {
  event.preventDefault();
  console.log(newUser);
  axios.post('/api/users/register', {...newUser})
  .then((res) => {
    console.log("THIS IS RES-HANDLE REGISTER:", res);
  })
  .catch((error) => {
    console.log("THIS IS ERROR", error);
  })

};

  return (


    <div className="form-container">
    <Form className="register-form">
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value = {newUser.first_name} onChange={(event) => setNewUser(prev => ({ ...prev, first_name: event.target.value}))}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" value = {newUser.last_name} onChange={(event) => setNewUser(prev => ({ ...prev, last_name: event.target.value}))}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value = {newUser.email} onChange={(event) => setNewUser(prev => ({...prev, email: event.target.value}))}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="contact" value = {newUser.contact_number} onChange={(event) => setNewUser(prev => ({...prev, contact_number: event.target.value}))} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value = {newUser.password} onChange={(event) => setNewUser(prev => ({...prev, password: event.target.value}))} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="passwordconfirmation">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value = {newUser.password_confirmation} onChange={(event) => setNewUser(prev => ({...prev, password_confirmation: event.target.value}))} />
      </Form.Group>

      <Button variant="primary" size="lg" type="submit" onClick={handleRegister}>
        Submit
      </Button>
    </Form>

    </div>
  );
}