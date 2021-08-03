import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import  Button  from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";

export default function RequestForm({currentUser}) {
  console.log("IN THE REQUEST FORM......");
  const [newRequest, setNewRequest] = useState({
    title: "",
    street_address: "",
    city: "",
    category: "",
    preferred_date: "",
    preferred_time: "",
    job_image: "",
    description: "",
    client_id: currentUser && currentUser.id
  });
  const history = useHistory();


  const handleRequestSubmit = (event) => {
    event.preventDefault();
    console.log("REQUEST FORM SUBMITTED");
    console.log(event);
    console.log(newRequest)
    axios.post("/api/requests", {...newRequest})
    .then((result) => { console.log("This is handlerqform", result);
    history.push("/requests");
})
.catch((error) => {console.log(error)});


  };
  const handleDropdownChange = (event) => {
    event.preventDefault();
    console.log(event.target[event.target.selectedIndex].text);

    setNewRequest((prev) => ({ ...prev, category: event.target[event.target.selectedIndex].text }))
  };

  return (
    <div className="form-container">
      <h2> Submit A Request </h2>

      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Work Title"
          value={newRequest.title}
          onChange={(event) =>
            setNewRequest((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="street-address">
        <Form.Label>Street Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location where work required"
          value={newRequest.street_address}
          onChange={(event) =>
            setNewRequest((prev) => ({
              ...prev,
              street_address: event.target.value,
            }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location City Name"
          value={newRequest.city}
          onChange={(event) =>
            setNewRequest((prev) => ({ ...prev, city: event.target.value }))
          }
        />
      </Form.Group>

      <label> Choose A Category </label>
      <select id="dropdown" onChange={handleDropdownChange}>
        <option value="N/A">N/A</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Electrician">Electrician</option>
        <option value="Painting">Painting</option>
        <option value="Babysitter">Babysitting</option>
      </select>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
        as="textarea" rows={3} columns={11}
          placeholder="Enter Work Details"
          value={newRequest.description}
          onChange={(event) =>
            setNewRequest((prev) => ({
              ...prev,
              description: event.target.value,
            }))
          }
        />
      </Form.Group>

      <Button
        variant="success"
        size="lg"
        type="submit"
        onClick={handleRequestSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
