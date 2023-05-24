import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import axios from "axios";
const PostStreetAnimalInfo = () => {
  const [showModalEvent, setShowModalEvent] = useState(false);
  const [postStreetAnimalInfoList, setPostStreetAnimalInfoList] = useState([]);
  const [getStreetAnimalInfoList, setGetStreetAnimalInfoList] = useState([]);

  const handleStreetAnimalInfoTODeletePost = async (_id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/street-animal-info/${_id}`
      );
      alert("data deleted successfully");
      fetchAddedStreetAnimalInfo();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAddedStreetAnimalInfo = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/street-animal-info`
    );
    try {
      setGetStreetAnimalInfoList(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAddedStreetAnimalInfo();
  }, [postStreetAnimalInfoList]);

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
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">phNumber</th>
                        <th scope="col">Loaction</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {getStreetAnimalInfoList
                      ? getStreetAnimalInfoList.map((data, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{data.user}</td>
                                <td>{data.description}</td>
                                <td>{data.phNumber}</td>
                                <td>{data.location}</td>
                                <td>
                                  <img
                                    src={data.image}
                                    alt=""
                                    style={{ width: "100px", height: "100px" }}
                                  />
                                </td>
                                <td>
                                  {" "}
                                  <button
                                    style={{
                                      backgroundColor: "red",
                                      color: "white",
                                      border: "none",
                                    }}
                                    onClick={() =>
                                      handleStreetAnimalInfoTODeletePost(
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

export default PostStreetAnimalInfo;
