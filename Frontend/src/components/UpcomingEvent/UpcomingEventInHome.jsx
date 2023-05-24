import React from "react";
import UpcomingEventinHomecard from "./UpcomingEventInHomeCard/UpcomingEventinHomecard";
import "./upcomingeventinhome.css";
const UpcomingEventInHome = () => {
  return (
    <>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "rgb(239, 241, 243)" }}
      >
        <div
          className="row "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-8 mt-3">
            <h4 className="our_upcoming_event_title_in_home_page">
              Our UpComing Events
            </h4>
            <p className="our_upcoming_event_description_in_home_page">
              Street animals can be incredibly loving and loyal
              companions.serving street animals can bring a sense of fulfillment
              and purpose to our lives. By helping these animals, we not only
              improve their lives but also make a positive impact on our
              communities. It is a fulfilling experience to know that we have
              made a difference in the lives of these animals and to see them
              grow with our help.
            </p>
          </div>
          <div
            className="col-md-10 "
            style={{
              textAlign: "start",
            }}
          >
            <div className="row">
              <div className="col-md-12 d-flex mb-3 upcommingEvents">
                <UpcomingEventinHomecard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEventInHome;
