import axios from "axios";
import React, { useState } from "react";
import Button from "./Button";
import { Form } from "react-bootstrap";

export default function RequestForm() {
  const [newRequest, setNewRequest] = useState({
    title: "",
    street_address: "",
    city: "",
    category: "",
    preferred_date: "",
    preferred_time: "",
    job_image: "",
    description: "",
  });

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    console.log("REQUEST FORM SUBMITTED");
  };
  const handleDropdownChange = (event) => {
    event.preventDefault();
    console.log("DROPDOWN INITIATED");
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

      <label for="categories"> Choose A Category </label>
      <select id="dropdown" onChange={(event) => handleDropdownChange}>
        <option value="N/A">N/A</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Electrician">Electrician</option>
        <option value="Painting">Painting</option>
        <option value="Babysitter">Babysitting</option>
      </select>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          type="text"
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
        variant="primary"
        size="lg"
        type="submit"
        onClick={handleRequestSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
