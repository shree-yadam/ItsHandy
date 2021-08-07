import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./RequestForm.scss";

export default function RequestEditForm({
  currentUser,
  request,
  setRequestListState,
  index,
  back,
}) {
  const history = useHistory();

  const [newRequest, setNewRequest] = useState({...request, client_id: currentUser.id, category_id: 1});
  const [editImage, setEditImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState(1);

  // console.log("current user: ", currentUser);
  // console.log("Request: ", request);

  useEffect(() => {
    axios.get('/api/categories')
    .then((res) => {
      // console.log(res.data);
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

  const handleRequestSubmit = (event) => {
    console.log("handleRequestSunmit!!!!");
    event.preventDefault();
    // axios
    //   .put(`/api/clients/${currentUser.id}/requests/${request.id}`, { ...newRequest })
    //   .then((result) => {
    //     console.log("This is handler form", result);
    //     setRequestListState((prev) => {
    //       console.log(prev);
    //       const oldState = { ...prev };
    //       let requestList = [...oldState.requestList];
    //       requestList[index] = {...newRequest};
    //       oldState.requestList = requestList;
    //       return oldState;
    //     });
    //     back();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
          // history.push(`/client/${currentUser.id}/requests`);
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
          // history.push(`/client/${currentUser.id}/requests`);
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
        <select id="dropdown" onChange={handleDropdownChange}>
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
