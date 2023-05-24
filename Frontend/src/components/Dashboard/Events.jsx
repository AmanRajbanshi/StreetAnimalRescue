import React, { useEffect, useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";
import MainContent from "./MainContent";
const Events = () => {
  // const [showModalEvent, setShowModalEvent] = useState(false);
  const [getEventList, setGetEventList] = useState([]);
  const [postEventList, setPostEventList] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [updateEventMetaData, setUpdateEventMetaData] = useState(null);

  const [imageLoading, setImageLoading] = useState(false);

  const InsertImage = (image) => {
    setImageLoading(true);

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
        setImageLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setImageLoading(false);
      });
  };

  //post all events
  const handleEventTOAddPost = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`http://localhost:5000/api/v1/events`, {
        title,
        location,
        description,
        image,
      });

      console.log("posted event: ", data);

      setPostEventList(data);
      fetchAddedEvent();
    } catch (error) {
      console.log(error.message);
    }
  };

  //delete event

  const handleEventTODeletePost = async (_id) => {
    console.log(_id);
    try {
      await axios.delete(`http://localhost:5000/api/v1/events/delete/${_id}`);
      console.log("data", "data deleted successfully");
      //setDeleteEventList(data);
      fetchAddedEvent();
    } catch (error) {
      console.log(error.message);
    }
  };

  //get all events
  const fetchAddedEvent = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/events`);
      console.log(data, "eventlist");

      setGetEventList(data?.message);
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
    fetchAddedEvent();
  }, [postEventList]);

  return (
    <>
      {updateEventMetaData && (
        <EditForm
          eventsList={getEventList}
          updateEventMetaData={updateEventMetaData}
          onUpdateEventMetaDataChange={onUpdateEventMetaDataChange}
          setGetEventList={setGetEventList}
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
                        <form onSubmit={handleEventTOAddPost}>
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
                            <button
                              type="submit"
                              className={`btn btn-${
                                imageLoading ? "secondary" : "primary"
                              }`}
                              disabled={imageLoading}
                            >
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
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Image</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {getEventList &&
                  getEventList.map((eventsList) => {
                    return (
                      <>
                        <tr>
                          <td>{eventsList.title}</td>
                          <td>{eventsList.description}</td>
                          <td>{eventsList.location}</td>
                          <td>
                            <img
                              src={eventsList.image}
                              alt=""
                              style={{ height: "100px", width: "200px" }}
                            />
                          </td>

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
                              onClick={() => {
                                setUpdateEventMetaData({ ...eventsList });
                              }}
                              // onClick={handleUpdateModalForm(eventsList)}
                            >
                              Edit
                            </button>
                            {/* {updateEventModal && (
                                <EditForm eventsList={eventsList} />
                              )} */}
                            <button
                              type="button"
                              className=""
                              style={{
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                              }}
                              onClick={() =>
                                handleEventTODeletePost(eventsList._id)
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

export default Events;
