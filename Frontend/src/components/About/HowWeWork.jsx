import React from "react";
import "./whoweare.css";
import Footer from "../Footer/Footer";
const HowWeWork = () => {
  return (
    <>
      <div className="container-fluid ">
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
      <div className="container-fluid" style={{}}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="col introduction_section mt-5">
              <p className="history_description">
                Given our limited resources, we must ensure that resources are
                delivered to the appropriate location and people.
              </p>
              <p className="introduction_description">
                As a result, when we receive a call or message from someone
                requesting assistance, whether for themselves or someone they
                know, we follow a series of standards for verification and need
                assessment. Whoever receives the message call passes it onto the
                verification team, which is made up of two members: the Chief
                Verification Officer and the Verification Executive. The
                verification team contacts them and obtains all pertinent
                information, including their name, family details, and financial
                background, as well as the specifics of the assistance
                sought.After that, it is cross-verified by another member, who
                can be either a second verification member or someone from
                another team, which increases the authenticity of the details.
                This also helps us to investigate and determine whether or not
                we should proceed with the request. We analyze the amount of
                resources (Aid or Monetary) that needs to be dispatched once
                we've decided to go ahead. The information, which includes the
                recipient's details and an itemized list of resources, is then
                forwarded to the logistics department, which will handle the
                request further.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowWeWork;
