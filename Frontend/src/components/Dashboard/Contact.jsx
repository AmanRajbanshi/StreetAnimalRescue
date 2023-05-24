import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import axios from "axios";
const Contact = () => {
  const [getContactList, setGetContactList] = useState([]);
  const [postContactList, setPostContactList] = useState([]);

  const handleDeleteContact = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/contact/${_id}`);
      console.log("data", "data deleted successfully");
      fetchAddedContact();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAddedContact = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/v1/contact`);
    try {
      console.log(data.message);
      setGetContactList(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAddedContact();
  }, [postContactList]);
  return (
    <>
      <div className="container">
        <div className="row">
          <MainContent />
          <div className="row mt-2 px-3">
            <div className="row">
              <div className="row">
                <div className="col">
                  <div
                    className="p-1"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  ></div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {getContactList
                      ? getContactList.map((contact) => {
                          return (
                            <>
                              <tr>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>

                                <td>
                                  {" "}
                                  <button
                                    type="button"
                                    className="mx-1"
                                    style={{
                                      backgroundColor: "green",
                                      color: "white",
                                      border: "none",
                                    }}
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    style={{
                                      backgroundColor: "red",
                                      color: "white",
                                      border: "none",
                                    }}
                                    onClick={() =>
                                      handleDeleteContact(contact._id)
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

export default Contact;
