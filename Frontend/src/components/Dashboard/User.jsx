import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import axios from "axios";

const User = () => {
  const [allUser, setAllUser] = useState([]);
  const fetchAllUser = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/users/all-user`
      );
      console.log(data.message);
      setAllUser(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeleteUser = async (_id) => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/v1/users/all-user/${_id}`
      );
      console.log(data, "data deleted successfully");
      fetchAllUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllUser();
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">phoneNumber</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {allUser
                      ? allUser.map((user, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.address}</td>

                                <td>
                                  {" "}
                                  <button
                                    style={{
                                      backgroundColor: "red",
                                      color: "white",
                                      border: "none",
                                    }}
                                    onClick={() => handleDeleteUser(user._id)}
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

export default User;
