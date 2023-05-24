import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_background_color">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-4">
              <h3>Street Animal Care</h3>
              <p>
                Street Animal Rescue highlights the importance of treating
                street animals with kindness and empathy, recognizing that they
                too deserve to be treated with respect and care and also fact
                that homelessness should not be a barrier to receiving love and
                support.
              </p>
            </div>
            <div className="col-md-3  footer_quick_links" style={{}}>
              <h5>Quick Links</h5>
              <li className="important_links">
                {" "}
                <Link
                  to="/events"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Events
                </Link>{" "}
              </li>
              <li className="important_links">
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Service
                </Link>
              </li>
              <li className="important_links">
                <Link
                  to="/abouts"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </Link>
              </li>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>Call US At: +977 98123456789</p>
              <p>Bargachhi, Biratnagar-4</p>{" "}
            </div>
            <hr className="mt-2" />
            <div className="row">
              <div className="col">
                <p className="text-center">
                  Developed By Aman Rajbanshi, Anu Adhikari and Yogendra Bastola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
