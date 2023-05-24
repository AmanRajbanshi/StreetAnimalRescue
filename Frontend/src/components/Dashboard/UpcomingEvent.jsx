import React, { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";
import MainContent from "./MainContent";

const UpcomingEvent = () => {
  const [showModalEvent, setShowModalEvent] = useState(false);
  const [getUpcomingEventList, setGetUpcomingEventList] = useState([]);
  const [postUpcomingEventList, setPostUpcomingEventList] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [updateEventMetaData, setUpdateEventMetaData] = useState(null);

  const InsertImage = (image) => {
    const data = new FormData();
    data.append("file", image);

    data.append("upload_preset", "Street Animal Rescue");

    data.append("cloud_name", "drhgdzba3");

    fetch("https://api.cloudinary.com/v1_1/drhgdzba3/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //post all events
  const handleUpcomingEventTOAddPost = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/upcomingEvent`,
        {
          title,
          location,
          description,
          image,
        }
      );

      console.log("posted event: ", data);

      setPostUpcomingEventList(data);
      fetchAddedUpcomingEvent();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpcomingEventTODeletePost = async (_id) => {
    console.log(_id);
    try {
      await axios.delete(`http://localhost:5000/api/v1/upcomingEvent/${_id}`);
      fetchAddedUpcomingEvent();
    } catch (error) {
      console.log(error.message);
    }
  };

  //get all events
  const fetchAddedUpcomingEvent = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/upcomingEvent`
      );

      setGetUpcomingEventList(data?.getUpcomingEvent);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onUpdateEventMetaDataChange = (key, value) => {
    updateEventMetaData[key] = value;
    setUpdateEventMetaData({ ...updateEventMetaData });
  };

  const onUpdateEventFormClose = () => {
    setUpdateEventMetaData(null);
  };

  useEffect(() => {
    fetchAddedUpcomingEvent();
  }, [postUpcomingEventList]);

  return (
    <>
      {updateEventMetaData && (
        <EditForm
          eventsList={getUpcomingEventList}
          updateEventMetaData={updateEventMetaData}
          onUpdateEventMetaDataChange={onUpdateEventMetaDataChange}
          // setGetEventList={setGetEventList}
          onUpdateEventFormClose={onUpdateEventFormClose}
        />
      )}
      <div
        className="container-fluid mb-5"
        // style={{ backgroundColor: " #eff1f3" }}
      >
        <div className="row">
          <MainContent />

          <div className="row">
            <div className="col">
              <div
                className="p-1"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <button
                  type="button"
                  class="btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ backgroundColor: "#9D92E8", color: "#FFFFFF" }}
                >
                  Create Event
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Post Event
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form onSubmit={handleUpcomingEventTOAddPost}>
                          <div
                            className="form-group d-flex"
                            style={{ flexDirection: "column" }}
                          >
                            <label className="text-start p-2">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                            <div
                              className="form-group d-flex "
                              style={{ flexDirection: "column" }}
                            >
                              <label className="text-start p-2">
                                Description
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter some description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                            <div
                              className="form-group d-flex "
                              style={{ flexDirection: "column" }}
                            >
                              <label className="text-start p-2">Location</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                              />
                            </div>
                            <div
                              className="form-group d-flex "
                              style={{ flexDirection: "column" }}
                            >
                              <label className="text-start p-2">Image</label>
                              <input
                                class="form-control"
                                type="file"
                                id="formFile"
                                accept="image/*"
                                onChange={(e) => InsertImage(e.target.files[0])}
                                style={{ marginTop: "6px" }}
                              />
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>

                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Image</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {getUpcomingEventList &&
                  getUpcomingEventList.map((UpcomingeventsList) => {
                    return (
                      <>
                        <tr>
                          <th scope="col">{UpcomingeventsList.createdAt}</th>

                          <td>{UpcomingeventsList.title}</td>
                          <td>{UpcomingeventsList.description}</td>
                          <td>{UpcomingeventsList.location}</td>
                          <td>
                            <img
                              src={UpcomingeventsList.image}
                              alt=""
                              style={{ height: "100px", width: "200px" }}
                            />
                          </td>

                          <td className="my-2 py-4">
                            {" "}
                            <button
                              type="button"
                              className="w-50 h-10 my-2 py-1"
                              style={{
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                              }}
                              data-toggle="modal"
                              data-target="#exampleModal"
                              //   onClick={() => {
                              //     setUpdateEventMetaData({
                              //       ...UpcomingeventsList,
                              //     });
                              //   }}
                              // onClick={handleUpdateModalForm(eventsList)}
                            >
                              Edit
                            </button>
                            {/* {updateEventModal && (
                                <EditForm eventsList={eventsList} />
                              )} */}
                            <button
                              type="button"
                              className=" py-1"
                              style={{
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                              }}
                              onClick={() =>
                                handleUpcomingEventTODeletePost(
                                  UpcomingeventsList._id
                                )
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvent;
