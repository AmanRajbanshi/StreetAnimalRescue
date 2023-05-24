import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "./navbar.css";
const Navbar = () => {
  const [showModalEvent, setShowModalEvent] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showAdoptModal, setShowAdoptModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [quantity, setQuantity] = useState("");

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [phNumber, setPhNumber] = useState("");
  const [postStreetAnimalInfoList, setPostStreetAnimalInfoList] = useState([]);
  const [requestToAdoptAnimalList, setRequestToAdoptAnimalList] = useState([]);
  const [postDonateList, setPostDonateList] = useState([]);

  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const InsertImage = (image) => {
    console.log(image);

    const data = new FormData();
    data.append("file", image);

    data.append("upload_preset", "Street Animal Rescue");

    data.append("cloud_name", "drhgdzba3");

    fetch("https://api.cloudinary.com/v1_1/drhgdzba3/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePostStreetAnimalInfo = async (e) => {
    e.preventDefault();

    try {
      if (
        name == "" ||
        location == "" ||
        image == "" ||
        phNumber == "" ||
        description == ""
      ) {
      } else {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/street-animal-info`,
          {
            name,
            location,
            image,
            phNumber,
            description,
          }
        );
        console.log("data", data);
        alert("data sent");
        setPostStreetAnimalInfoList(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRequestToAdoptAnimal = async (e) => {
    e.preventDefault();

    try {
      if (
        name == "" ||
        email == "" ||
        location == "" ||
        phNumber == "" ||
        suggestion == "" ||
        amount == "" ||
        quantity == ""
      ) {
        alert("Please enter all feilds");
      } else {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/street-animal/adopt`,
          {
            name,
            email,
            location,
            phNumber,
            suggestion,
            amount,
            quantity,
          }
        );
        console.log("data", data);

        alert("data has been posted  successfully");
        setRequestToAdoptAnimalList(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDonateTOAddPost = async (e) => {
    e.preventDefault();
    try {
      if (
        name == "" ||
        email == "" ||
        userAddress == "" ||
        phNumber == "" ||
        suggestion == "" ||
        amount == ""
      ) {
        alert("Please enter all feilds");
      } else {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/street-animal/donate`,
          {
            name,
            email,
            phNumber,
            userAddress,
            amount,
            suggestion,
          }
        );
        console.log("data", data);
        setPostDonateList(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      {showModalEvent ? (
        <>
          {" "}
          <div
            className="modal fade"
            id="exampleModal"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Post Street Animal Information
                  </h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={handlePostStreetAnimalInfo}>
                    <div
                      className="form-group d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Image</label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                        onChange={(e) => InsertImage(e.target.files[0])}
                        style={{ marginTop: "6px" }}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">PhNumber</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter phNumber"
                        value={phNumber}
                        onChange={(e) => setPhNumber(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    <div className="form-check"></div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary mx-1"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showAdoptModal ? (
        <>
          {" "}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Request To Adopt Street Animal
                  </h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleRequestToAdoptAnimal}>
                    <div
                      className="form-group d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Location</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={{ marginTop: "6px" }}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Phone Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter phNumber"
                        value={phNumber}
                        onChange={(e) => setPhNumber(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Quantity</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Suggestion</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter suggestion"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                      />
                    </div>

                    <div className="form-check"></div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary mx-1"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showDonateModal ? (
        <>
          {" "}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Donate To Adopt Street Animal</h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleDonateTOAddPost}>
                    <div
                      className="form-group d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">PhNumber</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter phNumber"
                        value={phNumber}
                        onChange={(e) => setPhNumber(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">userAddress</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Insert userAddress"
                        value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Amount</label>
                      <input
                        type="comment"
                        className="form-control"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group d-flex "
                      style={{ flexDirection: "column" }}
                    >
                      <label className="text-start p-2">Suggestion</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter suggestion"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                      />
                    </div>
                    <div className="form-check"></div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary mx-1"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <nav
        class="navbar navbar-expand-lg navbar-light "
        style={{
          backgroundColor: "#9d92e8",
        }}
      >
        <Link class="navbar-brand" to="/" style={{ color: "white" }}>
          <h4>Street Animal Rescue</h4>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/about"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{
                  padding: "10px",
                }}
              >
                <Link className="dropdown-item" to="/whoweare">
                  Who We Are
                </Link>

                <div className="dropdown-item"></div>

                <Link className="dropdown-item" to="/whatwedo">
                  What WE Do
                </Link>
                <div className="dropdown-item"></div>
                <Link className="dropdown-item" to="howwework">
                  How We Work
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contact us
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/dashboard/home"
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/login");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
          </ul>
          <form class="form-inline my-2 my-lg-0 sideButton" style={{}}>
            <div
              className="p-1"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button
                class="btn  mx-1 my-2 my-sm-0"
                type="button"
                style={{ border: "1px solid white", color: "white" }}
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  setShowModalEvent(!showModalEvent);
                }}
              >
                Upload
              </button>
            </div>

            <button
              class="btn  mx-1 my-2 my-sm-0"
              type="button"
              style={{ border: "1px solid white", color: "white" }}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                setShowAdoptModal(!showAdoptModal);
              }}
            >
              Adopt
            </button>

            <button
              class="btn  mx-1 my-2 my-sm-0"
              type="button"
              style={{ border: "1px solid white", color: "white" }}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                setShowDonateModal(!showDonateModal);
              }}
            >
              Donate
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
