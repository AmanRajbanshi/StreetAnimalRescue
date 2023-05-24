import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import axios from "axios";
const RequestToAdopt = () => {
  const [getRequestToAdoptList, setGetRequestToAdoptList] = useState([]);
  // const [requestToAdoptAnimalList, setRequestToAdoptAnimalList] = useState([]);

  const handleRequestToAdoptAnimalDeletePost = async (_id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/street-animal/adopt/${_id}`
      );
      fetchRequestToAdoptAnimalList();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchRequestToAdoptAnimalList = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/street-animal/adopt`
    );
    try {
      console.log(data);
      setGetRequestToAdoptList(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRequestToAdoptAnimalList();
  }, [getRequestToAdoptList]);
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
                        <th scope="col">phNumber</th>
                        <th scope="col">Loaction</th>
                        <th scope="col">Amount</th>
                        <th scope="col">No. of Animal to Adopt</th>
                        <th scope="col">Suggestion</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {getRequestToAdoptList
                      ? getRequestToAdoptList.map((data, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phNumber}</td>
                                <td>{data.userAddress}</td>
                                <td>{data.amount}</td>
                                <td>{data.quantity}</td>
                                <td>{data.suggestion}</td>

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
                                      handleRequestToAdoptAnimalDeletePost(
                                        data._id
                                      )
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

export default RequestToAdopt;
