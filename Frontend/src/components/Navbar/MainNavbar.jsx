import React, { useEffect, useState } from "react"; // { useEffect, useState }
import {
  Link,
  useLocation,
  //useLocation
} from "react-router-dom";
import "./mainnavbar.css";
const MainNavbar = () => {
  const [user, setUser] = useState(false);
  const [userToken, setUserToken] = useState("");

  const { pathname } = useLocation();
  const Userdata = () => {
    const userInfo = JSON.parse(localStorage.getItem("token"));
    console.log(userInfo);
    setUserToken(userInfo);
    if (userInfo) {
      setUser(true);
    } else {
      setUser(false);
    }
  };
  useEffect(() => {
    Userdata();
  }, [userToken, pathname, user]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light  "
        style={{
          backgroundColor: "#9d92e8",
          display: "flex",
          // justifyContent: "space-evenly",
        }}
      >
        <Link className="nav_title" to="#" style={{ marginLeft: "10px" }}>
          Street Animal Rescue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginRight: "10px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto main_navbar_content" style={{}}>
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
              <Link className="nav-link" to="/eventss">
                Events
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/abouts"
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

            {/* <li className="nav-item">
              <Link className="nav-link" to="/sidenavbar">
                Admin
              </Link>
            </li> */}
            {user ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/dashboard/home"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
