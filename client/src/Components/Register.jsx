import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Row, Col, ToggleButton, Button } from 'react-bootstrap';
import './register.scss'

export default function Register({currentUser, setCurrentUser}) {

  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState(
  {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
    img_url: ""
  });

  // Browser History
  const history = useHistory();

  // If there is a current user then no register, go to home
  if(currentUser) {
    history.push("/");
  }

  useEffect(() => {
    if(newUser.password !== newUser.password_confirmation) {
      setError("Password and Confirmation do not match");
    } else {
      setError(null);
    }
  }, [newUser.password, newUser.password_confirmation]);

  // Handle the submission of the form
  const handleRegister =(event) => {
    event.preventDefault();
    console.log(newUser);
    if(newUser.password === newUser.password_confirmation){
      if(!isServiceProvider) {
        axios.post('/api/users/register', {...newUser, is_provider: isServiceProvider})
        .then((res) => {
          console.log("THIS IS RES-HANDLE REGISTER:", res);
          setError(null);

          setCurrentUser({
            id: res.data.id,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email,
            is_provider: res.data.is_provider
          });
          history.push("/dashboard");
      })
      .catch((err) => {
        console.log("THIS IS ERROR", err);
        if(err.response){
          console.log(err.response.status);
          setError("Email already in use. Please use a different email to register");
        }
      });
    }

  }

};

return (

  <div className="form-container">
    {error &&
    <p>{error}</p>
    }
    {!currentUser &&
      <Form className="register-form">
        <h2>Sign Up</h2>
        <Form.Group as={Row} className="mb-3" controlId="firstname">
          <Form.Label column >First Name</Form.Label>
          <Col sm="8">
          <Form.Control type="text" placeholder="Enter First Name" value = {newUser.first_name} onChange={(event) => setNewUser(prev => ({ ...prev, first_name: event.target.value}))}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="lastname">
          <Form.Label column>Last Name</Form.Label>
          <Col sm="8">
          <Form.Control type="text" placeholder="Enter Last Name" value = {newUser.last_name} onChange={(event) => setNewUser(prev => ({ ...prev, last_name: event.target.value}))}/>
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column>Email address</Form.Label>
          <Col sm="8">
          <Form.Control type="email" placeholder="Enter email" value = {newUser.email} onChange={(event) => setNewUser(prev => ({...prev, email: event.target.value}))}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="contact">
          <Form.Label column >Phone Number</Form.Label>
          <Col sm="8">
          <Form.Control type="text" placeholder="contact" value = {newUser.phone_number} onChange={(event) => setNewUser(prev => ({...prev, phone_number: event.target.value}))} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="img_url">
          <Form.Label column >Image URL</Form.Label>
          <Col sm="8">
          <Form.Control type="text" placeholder="Image URL" value = {newUser.img_url} onChange={(event) => setNewUser(prev => ({...prev, img_url: event.target.value}))} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password">
        <Form.Label column >Password</Form.Label>
        <Col sm="8">
          <Form.Control type="password" placeholder="Password" value = {newUser.password} onChange={(event) => setNewUser(prev => ({...prev, password: event.target.value}))} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="passwordconfirmation">
          <Form.Label column >Password Confirmation</Form.Label>
          <Col sm="8">
          <Form.Control type="password" placeholder="Confirm Password" value = {newUser.password_confirmation} onChange={(event) => setNewUser(prev => ({...prev, password_confirmation: event.target.value}))} />
          </Col>
        </Form.Group>

        <ToggleButton
          className="mb-2"
          id="is-subscriber"
          type="checkbox"
          variant="outline-none"
          checked={isServiceProvider}
          value="1"
          onChange={(event) => {
          event.currentTarget.checked? setIsServiceProvider(true):setIsServiceProvider(false)}} >
          Check if You are a subscriber
        </ToggleButton>
        <div className="btn-register">
        <Button variant="primary" size="lg" type="submit" onClick={handleRegister}>
            {isServiceProvider? "Next" : "Submit"}
        </Button>
        </div>
      </Form>
      }

    </div>
  );
}