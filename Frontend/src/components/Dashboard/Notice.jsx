import React, { useState } from "react";
import MainContent from "./MainContent";
import axios from "axios";

const Notice = () => {
  const [message, setMessage] = useState("");

  const handleMessegeSubmission = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/users/email`,
        {
          message,
        }
      );

      if (data?.success) {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <MainContent />
          <h1>Notice</h1>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter Message For All Subscribers"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
            ></textarea>
          </div>

          <button
            className="w-25  my-2 "
            style={{ backgroundColor: "#9D9BEA", color: "white" }}
            onClick={handleMessegeSubmission}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Notice;
