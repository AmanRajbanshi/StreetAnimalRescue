import React from "react";
import Button from "../Button/Button";
import "./topnavbar.css";
const TopNavbar = () => {
  return (
    <>
      <div
        className="container-fluid topnavbar"
        style={{ backgroundColor: "#9d92e8" }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="col-md-3 mt-2 pt-1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="brand_title" style={{ color: "rgb(239, 241, 243)" }}>
              Street Animal Rescue
            </h3>
          </div>
          <div className="col-md-6 mt-2">
            <span>
              <input
                type="text"
                className="input_feild_on_navbar"
                placeholder="Search..."
              />
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{
                  marginLeft: "-50px",
                  cursor: "pointer",
                  color: "#9d92e8",
                }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
          <div
            className="col-md-3 mt-2 main_buttons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button text={"Upload"} />
            <Button text={" Adopt"} />
            <Button text={"Donate"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
