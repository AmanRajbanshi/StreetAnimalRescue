import React from "react";
import Button from "../Button/Button";

const TopContent = () => {
  return (
    <>
      <div
        className="container-fluid "
        style={{
          display: "flex",
          justifyContent: "space-between",
          //   marginTop: "5px",
          //   width: "100%",
        }}
      >
        <div className="row border">
          <div className="col-md-6">
            <h3>Street Animal Rescue</h3>
          </div>
          <div className="col-md-6">
            <Button text={"Upload"} />
            <Button text={" Adopt"} />
            <Button text={"Donate"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContent;
