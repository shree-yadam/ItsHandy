import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./RequestForm.scss";

export default function RequestForm({ currentUser, categories }) {
  const { userId } = useParams();
  const history = useHistory();
  const [imageFile, setImageFile] = useState();
  const [selectedCategory, setSelectedCategory] = useState(categories && categories[0].name);
  const [newRequest, setNewRequest] = useState({
    title: "",
    street_address: "",
    city: "",
    category_id: 1,
    preferred_date: "",
    preferred_time: "",
    img_url: "",
    description: "",
    client_id: userId,
  });

  const uploadImage = (files) => {
    // console.log(files);
    setImageFile(files[0]);
  };

  useEffect(() => {
    if(!currentUser){
      history.push('/login');
      return;
    }

  }, []);

  const handleRequestSubmit = (event) => {
    console.log("REQUEST FORM SUBMITTED");
    // console.log(event);
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);

    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
    if (imageFile) {
      axios
        .post(process.env.REACT_APP_CLOUDINARY_URI, formData)
        .then((response) => {
          // console.log("this is cloud:", response.data.secure_url);
          setNewRequest((prev) => ({
            ...prev,
            img_url: response.data.secure_url,
          }));

          // console.log("this is new request", newRequest);
          const requestToSend = { ...newRequest };
          requestToSend.img_url = response.data.secure_url;
          return axios.post(`/api/clients/${userId}/requests`, requestToSend);
        })
        .then((result) => {
          // console.log("This is handler form", result);
          history.push(`/client/${userId}/requests`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(`/api/clients/${userId}/requests`, newRequest)
        .then((result) => {
          // console.log("This is handler form", result);
          history.push(`/client/${userId}/requests`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDropdownChange = (event) => {
    event.preventDefault();
    setSelectedCategory(event.target.value);
    setNewRequest((prev) => ({
      ...prev,
      category_id: categories.find((elem) => elem.name === event.target.value)
        .id,
      category_name: event.target.value,
    }));
    console.log(event.target[event.target.selectedIndex].index);
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
          onChange={(event) => {
            setNewRequest((prev) => ({ ...prev, title: event.target.value }));
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="street-address">
        <Form.Label>Street Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location where work required"
          value={newRequest.street_address}
          onChange={(event) => {
            setNewRequest((prev) => ({
              ...prev,
              street_address: event.target.value,
            }));
          }}
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
        {/* <select id="dropdown" onChange={handleDropdownChange}>
        <option value="Plumbing">Plumbing</option>
        <option value="Electrician">Electrician</option>
        <option value="Painting">Painting</option>
        <option value="Babysitter">Babysitting</option>
      </select> */}
        {categories && (
          <select
            id="dropdown"
            value={selectedCategory}
            onChange={handleDropdownChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        )}
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

      <Form.Group className="mb-3" controlId="formFile">
        <Form.Label>Add An Image</Form.Label>
        <br></br>
        <Form.Control
          width="20px"
          type="file"
          onChange={(event) => uploadImage(event.target.files)}
        />
      </Form.Group>

      {/* <div>
        Upload file<input type="file" onChange={(event) => {
          uploadImage(event.target.files)}}/>
      </div> */}

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
