import axios from "axios";
import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";

const AllSubscriber = () => {
  const [allSubscriber, setAllSubscriber] = useState([]);
  const fetchAllSubscriber = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/user-subscribe`
    );
    try {
      console.log(data.message);
      setAllSubscriber(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeleteSubscriber = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/user-subscribe/${_id}`);
      console.log("data", "data deleted successfully");
      fetchAllSubscriber();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllSubscriber();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <MainContent />
          <div className="row mt-2 px-3">
            <div className="row">
              <div className="row">
                <div className="col">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {allSubscriber
                      ? allSubscriber.map((email, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{email.email}</td>

                                <td>
                                  {" "}
                                  <button
                                    style={{
                                      backgroundColor: "red",
                                      color: "white",
                                      border: "none",
                                    }}
                                    onClick={() =>
                                      handleDeleteSubscriber(email._id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      : null}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSubscriber;
