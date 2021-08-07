import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Row, Col, ToggleButton, Button, ButtonGroup } from 'react-bootstrap';
import './register.scss'

export default function Register({currentUser, setCurrentUser}) {

  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
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

  useEffect(() => {
    axios.get('/api/categories')
    .then((res) => {
      console.log(res.data);
      setCategories(res.data);
      setCategories(prev => {
        const oldState = [...prev];
        return oldState.map(elem => {
          return {...elem, checked: false}
        })
      })

    })
    .catch((err) => console.log(err));
  }, []);

  function handleButtonCheck(index, val) {
    console.log(index, val);
    setCategories(prev => {
      const oldState = [...prev];
      const oldValAtIndex = {...oldState[index]};
      oldValAtIndex.checked = val;
      oldState[index] = oldValAtIndex;
      return oldState;
    });
    console.log(categories);
  }
  // If there is a current user then no register, go to home
  if(currentUser) {
    history.push("/");
  }

  useEffect(() => {
    if(isRegistered) {
      history.push("/dashboard");
    }

  }, [isRegistered, history]);

  // Handle the submission of the form
  const handleRegister =(event) => {
    event.preventDefault();
    console.log(newUser);
    if(newUser.password === newUser.password_confirmation){
      setError(null);
      axios.post('/api/users/register', {...newUser, is_provider: isServiceProvider, categories})
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
        setIsRegistered(true);
      })
      .catch((err) => {
        console.log("THIS IS ERROR", err);
        if(err.response){
          console.log(err.response.status);
          setError("Email already in use. Please use a different email to register");
        }
      });
    } else {
        setError("Password and Confirmation do not match");
      }
  };

  return (

    <div className="form-container">
      {error &&
      <p className="register-error">{error}</p>
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
            className="mb-2 register-toggle-button"
            id="is-subscriber"
            type="checkbox"
            variant="outline-none"
            checked={isServiceProvider}
            value="1"
            onChange={(event) => {
            event.currentTarget.checked? setIsServiceProvider(true):setIsServiceProvider(false)}}
            >    Check if You are a subscriber
          </ToggleButton>
          <div className="categories-container">
          {isServiceProvider &&
            categories.map((category, index) =>
              <ButtonGroup toggle key={index}>
              <ToggleButton
                className="mb-2 register-toggle-button"
                type="checkbox"
                name="radio"
                variant="outline-secondary"
                checked={category.checked}
                onChange={event => handleButtonCheck(index, event.target.checked)}
              >  {category.name}  </ToggleButton>
              <br/>
          </ButtonGroup>
            )}
            </div>
          <div className="btn-register">
          <Button variant="primary" size="lg" type="submit" onClick={handleRegister}>
              Submit
          </Button>
          </div>
        </Form>
      }

    </div>
  );
}