import React from "react";

import "./about.css";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <>
      <div className="container-fluid border" style={{ marginTop: "0px" }}>
        <div className="row about_landing_container">
          <div
            className="col-md-6  "
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3 className="about_landing_title">About US</h3>
            <p className="about_landing_description">
              Street Animal Rescue has been connecting hundreds of volunteers to
              local communities all over the world since its first initiation.
              The emergency response program and the mad street animal
              rehabilitation programs were the initial programs successfully
              carried out by Street Animal Rescue.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
