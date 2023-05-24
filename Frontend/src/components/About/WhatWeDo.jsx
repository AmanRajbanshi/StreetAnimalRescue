import React from "react";
import "./whoweare.css";
import Footer from "../Footer/Footer";
const WhatWeDo = () => {
  return (
    <>
      <div className="container-fluid mb-4">
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
            <h3 className="about_landing_title ">About US</h3>
            <p className="about_landing_description">
              Street Animal Rescue has been connecting hundreds of volunteers to
              local communities all over the world since its first initiation in
              2015. The emergency response program and the mad street animal
              rehabilitation programs were the initial programs successfully
              carried out by Street Animal Rescue.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="row"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="col introduction_section"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            <h3 className="introduction_part">What We Do?</h3>
            <p className="introduction_description">
              Street Animal Care is active in more than eight districts across
              the country and provides massive aid to a number of others. Our
              purpose is to have a positive impact on society by changing how we
              think about others and how we connect – changes that are more
              important than ever. Our group also serves as a voice for those
              who have no one else to speak for them.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhatWeDo;
