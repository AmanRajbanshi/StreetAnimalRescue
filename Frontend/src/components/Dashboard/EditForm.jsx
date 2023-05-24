import React, { useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

const EditForm = ({
  eventsList,
  updateEventMetaData,
  onUpdateEventMetaDataChange,
  setGetEventList,
  onUpdateEventFormClose,
}) => {
  // const InsertImage = (image) => {
  //   const data = new FormData();
  //   data.append("file", image);

  //   data.append("upload_preset", "Street Animal Rescue");

  //   data.append("cloud_name", "drhgdzba3");

  //   fetch("https://api.cloudinary.com/v1_1/drhgdzba3/image/upload", {
  //     method: "post",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImage(data.url.toString());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleUpdateFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/events/update/${updateEventMetaData?._id}`,
        {
          ...updateEventMetaData,
        }
      );
      if (data.success) {
        const updatedEvent = eventsList?.findIndex(
          (event) => event?._id === data?.message?._id
        );

        eventsList[updatedEvent] = { ...data.message };
        setGetEventList([...eventsList]);
        onUpdateEventFormClose();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className={`${updateEventMetaData && "modal fade"}`}
        id={`${updateEventMetaData && "exampleModal"}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Event</h5>
            </div>
            <div className="modal-body">
              <form>
                <div
                  className="form-group d-flex"
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <label className="text-start p-2">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    value={updateEventMetaData?.title}
                    onChange={(e) =>
                      onUpdateEventMetaDataChange("title", e.target.value)
                    }
                  />
                </div>
                <div
                  className="form-group d-flex "
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <label className="text-start p-2">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter some description"
                    value={updateEventMetaData?.description}
                    onChange={(e) =>
                      onUpdateEventMetaDataChange("description", e.target.value)
                    }
                  />
                </div>
                <div
                  className="form-group d-flex "
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <label className="text-start p-2">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Location"
                    value={updateEventMetaData?.location}
                    onChange={(e) =>
                      onUpdateEventMetaDataChange("location", e.target.value)
                    }
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
                    // onChange={(e) => InsertImage(e.target.files[0])}
                    style={{ marginTop: "6px" }}
                  />
                  <img
                    src={updateEventMetaData?.image}
                    alt=""
                    srcset=""
                    style={{
                      width: "200px",
                      height: "100px",
                      margin: "10px auto",
                    }}
                  />
                </div>
                {/* <div
                  className="form-group d-flex "
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <label className="text-start p-2">Comment</label>
                  <input
                    type="comment"
                    className="form-control"
                    placeholder="Enter Comment"
                    value={updateEventMetaData?.comment}
                    onChange={(e) =>
                      onUpdateEventMetaDataChange("comment", e.target.value)
                    }
                  />
                </div> */}
                <div className="form-check"></div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-secondary mx-1"
                    data-dismiss="modal"
                    onClick={() => onUpdateEventFormClose()}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleUpdateFormSubmission}
                    data-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditForm;
