import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./RequestForm.scss";


export default function RequestEditForm({ currentUser, request, setRequestListState, index, back }) {
  const history = useHistory();

  const [newRequest, setNewRequest] = useState(request);

  console.log("current user: ", currentUser);
  console.log("Request: ", request);

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/clients/${currentUser.id}/requests/${request.id}`, { ...newRequest })
      .then((result) => {
        console.log("This is handler form", result);
        setRequestListState((prev) => {
          console.log(prev);
          const oldState = { ...prev };
          let requestList = [...oldState.requestList];
          requestList[index] = {...newRequest};
          oldState.requestList = requestList;
          return oldState;
        });
        back();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDropdownChange = (event) => {
    event.preventDefault();

    setNewRequest((prev) => ({
      ...prev,
      category_id: event.target[event.target.selectedIndex].index,
    }));
  };

  return (
    <div className="form-container">
      <h2> Edit Your Request </h2>

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

      <Form.Group className="mb-3" controlId="preferred-date">
        <Form.Label>Preferred Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter YYYY-MM-DD"
          value={newRequest.preferred_date}
          onChange={(event) =>
            setNewRequest((prev) => ({
              ...prev,
              preferred_date: event.target.value,
            }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <label> Choose A Category </label>
        <br></br>
        <select id="dropdown" onChange={handleDropdownChange}>
          <option value="N/A">N/A</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrician">Electrician</option>
          <option value="Painting">Painting</option>
          <option value="Babysitter">Babysitting</option>
        </select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          columns={11}
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

      <Form.Group className="mb-3" controlId="job_image">
        <Form.Label>Add An Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Put A Link Image of the job"
          value={newRequest.img_url}
          onChange={(event) =>
            setNewRequest((prev) => ({ ...prev, img_url: event.target.value }))
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

      <Button
        variant="danger "
        size="lg"
        type="submit"
        onClick={() => back()}
      >
      Cancel
      </Button>
    </div>
  );
}
