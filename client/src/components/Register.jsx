import axios from 'axios';
import React, { useState } from 'react';
import Button from './Button';



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
axios.post('/api/register', {...newUser})
.then((res) => {
  console.log("THIS IS RES-HANDLE REGISTER:", res);
})
.catch((error) => {

  console.log("THIS IS ERROR", error);
})

};

  return (

    <form>
        <label>First Name</label>
        <input type="name" placeholder="Enter First Name" value = {newUser.firstname} onChange={(event) => setNewUser(prev => ({ ...prev, first_name: event.target.value}))} />

        <label>Last Name</label>
        <input type="lastname" placeholder="Enter Last Name" value ={newUser.lastname} onChange={(event) => setNewUser(prev => ({...prev, last_name: event.target.value}))}/>

        <label>Email address</label>
        <input type="email" placeholder="Enter email" value = {newUser.email} onChange={(event) => setNewUser(prev => ({...prev, email: event.target.value}))}/>

        <label>Password</label>
        <input type="password" placeholder="Password" value = {newUser.password} onChange={(event) => setNewUser(prev => ({...prev, password: event.target.value}))}/>

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" value = {newUser.password_confirmation} onChange={(event) => setNewUser(prev => ({...prev, password_confirmation: event.target.value}))}/>

        <label>Contact Number</label>
        <input type="text" placeholder="Contact Number" value = {newUser.contact} onChange={(event) => setNewUser(prev => ({...prev, contact_number: event.target.value}))} />
      <br/>
      <Button variant="primary" type="submit" onClick={handleRegister}>
        Submit
      </Button>
    </form>

  );
}