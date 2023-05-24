import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import MainContent from "./MainContent";

const Logout = () => {
  const [user, setUser] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("token"));
    // console.log(userInfo);
    if (userInfo) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [pathname, user]);
  const handleLogoutButton = (e) => {
    e.preventDefault();
    console.log("Logout button clicked");
    alert("Logout button clicked");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <MainContent />
          <div className="row mt-2 px-3">
            <div className="row">
              <div className="col mt-2">
                <button onClick={handleLogoutButton}>
                  <Link
                    to="/"
                    onClick={() => {
                      localStorage.removeItem("user");
                      Navigate("/login");
                      window.location.reload();
                    }}
                  >
                    Go Back To Home Page
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
