import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./RequestForm.scss";

export default function RequestEditForm({
  currentUser,
  request,
  setRequestListState,
  index,
  back,
  categories
}) {
  console.log("REquest Edit Form: ", request);
  console.log(currentUser);
  const [newRequest, setNewRequest] = useState({...request, client_id: currentUser.id, category_id: categories.find(elem => elem.name === request.category_name).id});
  const [editImage, setEditImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(request.category_name)

  // console.log("current user: ", currentUser);
  // console.log("Request: ", request);

  const handleRequestSubmit = (event) => {
    console.log("handleRequestSubmit!!!!");
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", imageFile);

    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
    if (imageFile) {
      axios
        .post(process.env.REACT_APP_CLOUDINARY_URI,
          formData
        )
        .then((response) => {
          // console.log("this is cloud:", response.data.secure_url);
          setNewRequest((prev) => ({
            ...prev,
            img_url: response.data.secure_url,
          }));
          const requestToSend = { ...newRequest };
          setRequestListState((prev) => {
            // console.log(prev);
            const oldState = { ...prev };
            let requestList = [...oldState.requestList];
            requestList[index] = {...requestToSend};
            oldState.requestList = requestList;
            return oldState;
          });

          // console.log("this is new request", newRequest);
          requestToSend.img_url = response.data.secure_url;
          return axios.put(`/api/clients/${currentUser.id}/requests/${newRequest.id}`, requestToSend);
        })
        .then((result) => {
          // console.log("This is handler form", result);
          back();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(`/api/clients/${currentUser.id}/requests/${newRequest.id}`, newRequest)
        .then((result) => {
          // console.log("This is handler form in case of no change", result);
          setRequestListState((prev) => {
            // console.log(prev);
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
    }
  };

  const uploadImage = (files) => {
    // console.log("uploadImage: ", files);
    setImageFile(files[0]);
  };

  const handleDropdownChange = (event) => {
    event.preventDefault();

    console.log("event: ", event.target.value);
    setSelectedCategory(event.target.value);
    setNewRequest((prev) => ({
      ...prev,
      category_id: categories.find(elem => elem.name === event.target.value).id,
      category_name: event.target.value
    }));
    console.log(categories.find(elem => elem.name === event.target.value).id);

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
          value={newRequest.preferred_date && newRequest.preferred_date.split('T')[0]}
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
        {categories &&
        <select id="dropdown" value={selectedCategory} onChange={handleDropdownChange}>
           {categories.map(category => <option key={category.id}  value={category.name}>{category.name}</option>) }
        </select>
        }
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

      {/* <Form.Group className="mb-3" controlId="job_image">
        <Form.Label>Add An Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Put A Link Image of the job"
          value={newRequest.img_url}
          onChange={(event) =>
            setNewRequest((prev) => ({ ...prev, img_url: event.target.value }))
          }
        />
      </Form.Group> */}

      {!editImage && (
        <>
          <img src={newRequest.img_url} alt={"request"} />
          <Button
            variant="warning"
            size="lg"
            type="file"
            onClick={() => setEditImage(true)}
          >
            Edit
          </Button>
        </>
      )}

      {editImage && (
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Add An Image</Form.Label>
          <br></br>
          <Form.Control
            width="20px"
            type="file"
            onChange={(event) => uploadImage(event.target.files)}
          />
        </Form.Group>
      )}

      <Button
        variant="success"
        size="lg"
        type="submit"
        onClick={handleRequestSubmit}
      >
        Submit
      </Button>

      <Button variant="danger " size="lg" type="submit" onClick={() => back()}>
        Cancel
      </Button>
    </div>
  );
}
