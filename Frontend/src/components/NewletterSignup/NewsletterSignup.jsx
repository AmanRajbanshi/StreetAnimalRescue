import React, { useEffect, useState } from "react";
import "./newslettersignup.css";
import axios from "axios";
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/user-subscribe`,
      {
        email,
      }
    );
    console.log(data);
    setEmail("");
    alert("Subscribed");
  };

  useEffect(() => {
    handleNewsletterSignup();
  }, []);

  return (
    <>
      <div className="container-fluid background_image ">
        <div className="row">
          <div
            className="col-md-12 main_col"
            style={{ width: "100%", height: "100%", padding: "50px" }}
          >
            <h6
              className="newsletter_signup_title p-3"
              style={{ color: "#9d92e8" }}
            >
              Newsletter Signup
            </h6>
            <h3
              className="hr_lines_in_newsletter_signup  p-2"
              style={{ textAlign: "center", color: "#9d92e8" }}
            >
              Join For New Updates
            </h3>
            <div className="row ">
              <div className="col-md-12   " style={{}}>
                <form
                  className=" form_content"
                  onSubmit={handleNewsletterSignup}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    className="email_for_newsletter"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button className="subscribe_now" type="submit" style={{}}>
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSignup;
