import React from "react";
import "./home.scss";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Home(currentUser) {
  return (
    <Jumbotron>
    <div className="main-container">
      <div className="about">
        <h1>About Us</h1>

        <h2> ItsHandy is a modern day app </h2>
        <p>
          {" "}
          To help you find service providers such as plumbers, electricians,
          painters etc
        </p>
        </div>
        <h2> ----- How itsHandy Works -----</h2>
<div className="its-handy-steps">
<p> Step 1: Fill Out a form with your requests. You can also upload a picture and state the name of the street you want to avail the service at. </p>

<p>Step 2: Once submitted, providers from your selected category can see your requests and respond with a quote for the job to be done </p>

<a> Step 3: Once the provider has submitted a quote you will get a text-message and can open the itsHandy app to accept the quote and read the comments by the provider.</a>


<p>Step 4: 
  Once the quote has been accepted the provider will be notified and you can coordinate with the provider. </p>

<p> Step 5:After the service is complete, you can leave a rating for the provider! You can also visit old requests to check details of your request history on itsHandy! </p>


       
      </div>

      <div className="info">
        <div className="testimonials">

        </div>
      </div>
    </div>
    </Jumbotron>
  );
}
