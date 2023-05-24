import React, { useEffect, useState } from "react";
import image4 from "../../images/image4.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        alert("Plase enter your credentials");
      } else {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/users/login`,
          {
            email,
            password,
          }
        );

        localStorage.setItem("user", JSON.stringify({ ...data?.message }));

        navigate(data?.message?.role === "Admin" ? "/home" : "/");
      }
    } catch (error) {
      alert(error.response?.data?.error);
    }
  };

  useEffect(() => {
    if (user) {
      user?.role === "Admin" ? navigate("/home") : navigate("/");
    }
  }, []);

  return (
    <>
      <div
        className="container-fluid login_form_column"
        style={{ height: "91vh" }}
      >
        <div className="row">
          <div
            className="col"
            style={{
              // backgroundColor: " #7962c5",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="col-md-8 d-flex" style={{}}>
              <img
                className="image_of_register"
                style={{ width: "90%", padding: "50px" }}
                src={image4}
                alt="image4"
              />
              <div>
                <h4
                  className="sign_up_text mt-5 pt-5"
                  style={{ color: "white" }}
                >
                  Sign In
                </h4>
                <form
                  onSubmit={handleLoginForm}
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "30px",
                  }}
                >
                  <label
                    htmlFor="Email"
                    className="sign_up_text"
                    style={{ color: "white" }}
                  >
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
                  <label
                    htmlFor="Password"
                    className="sign_up_text"
                    style={{ color: "white" }}
                  >
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
                  <div
                    className="pt-3"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      type="submit"
                      style={{
                        border: "none",

                        padding: "5px",
                      }}
                    >
                      submit
                    </button>
                    <button
                      style={{
                        border: "none",
                        padding: "5px",
                      }}
                    >
                      <Link
                        to="/register"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Register
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
