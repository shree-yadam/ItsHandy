import React from "react";
import "./home.scss";

export default function Home(currentUser) {
  return (
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

      <div className="info">
        <div className="testimonials">

        </div>
      </div>
    </div>
  );
}
