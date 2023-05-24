import React, { useState } from "react";
import image4 from "../../images/image4.jpg";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [setUserData] = useState([]);
  const navigate = useNavigate();

  const handleRegisterForm = async (e) => {
    e.preventDefault();

    try {
      if (name == "" || email == "" || password == "" || phoneNumber == "") {
        return alert("Please fill all required fields");
      } else {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/users/register`,
          {
            name,
            email,
            password,
            phoneNumber,
          }
        );

        setUserData(data?.message);

        navigate(data?.message ? "/login" : "/register");
      }
    } catch (error) {
      alert(error?.response?.data?.error);
    }
  };

  return (
    <>
      <div
        className="container-fluid main_register_container"
        style={{ backgroundColor: "#EFF1F3" }}
      >
        <div className="row">
          <div className="col">
            <div className="container register-container ">
              <div className="row">
                <div className="col-md-8 register_image_column ">
                  <img
                    className="image_of_register"
                    style={{}}
                    src={image4}
                    alt="image4"
                  />
                </div>
                <div
                  className="col-md-4 register_form_column "
                  style={{ color: "white" }}
                >
                  <h4 className="sign_up_text mt-3">Sign Up</h4>
                  <form
                    onSubmit={handleRegisterForm}
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "30px",
                    }}
                  >
                    <label htmlFor="Full Name" className="sign_up_text">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />

                    <label htmlFor="Email" className="sign_up_text">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label htmlFor=" Password" className="sign_up_text">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder=""
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="Phone Number" className="sign_up_text">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      placeholder=""
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />

                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <button type="submit" className="register_sumbit_button">
                        {" "}
                        Submit
                      </button>

                      <button className="register_sumbit_button">
                        {" "}
                        <Link
                          className=""
                          style={{ textDecoration: "none", color: "black" }}
                          to="/login"
                        >
                          Already Register ?
                        </Link>{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
