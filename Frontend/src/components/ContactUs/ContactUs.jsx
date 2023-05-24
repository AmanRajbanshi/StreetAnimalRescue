import axios from "axios";
import React, { useState } from "react";
import "./contactus.css";
import Footer from "../Footer/Footer";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit_contact_form = async (e) => {
    e.preventDefault();
    try {
      if (name == "" || email == "" || subject == "" || message == "") {
        alert("Provide all required fields");
      } else {
        await axios.post(`http://localhost:5000/api/v1/contact`, {
          name,
          email,
          subject,
          message,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <>
      <div
        className="container-fluid "
        style={{ marginTop: "0px", backgroundColor: "#EFF1F3" }}
      >
        <div className="row ">
          <div className="col-md-6 form_column  ">
            <h3 className="text-start contactus_title">Contact us</h3>
            <form
              onSubmit={submit_contact_form}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                className="name_placeholder"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="email_placeholder"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="subject_placeholder"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className="message_placeholder"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="submit_button_for_contact_us">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6   detail_column">
            <h3 className="  contact_information ">Contact Information</h3>
            <p className="contact_information_description ">
              We're open for any suggestion or just to have a chat
            </p>
            <div className="row icon_and_text" style={{}}>
              <div className="col-md-9 location_column " style={{}}>
                <span className="">
                  <svg
                    className="location_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                    style={{ color: "#9d92e8" }}
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>{" "}
                <span
                  className="text-start email_text "
                  style={{ textAlign: "start" }}
                >
                  Address: Bargachhi, Biratnagar 4
                </span>
              </div>
              <div className="col-md-9 phone_column " style={{}}>
                <span className="  ">
                  <svg
                    className="phone_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                    style={{ color: "#9d92e8" }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </span>{" "}
                <span className="text-start email_text" style={{}}>
                  Phone: +977 98123456789
                </span>
              </div>
              <div className="col-md-9 email_column  " style={{}}>
                <svg
                  className="email_icon  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-envelope-check-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "#9d92e8" }}
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                </svg>

                <span className=" email_text" style={{}}>
                  Email: streetanimalrescue@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
