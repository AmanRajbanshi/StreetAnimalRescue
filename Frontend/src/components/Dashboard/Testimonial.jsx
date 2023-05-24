import React, { useEffect, useState } from "react";
import axios from "axios";
import MainContent from "./MainContent";
import { backendUrl } from "../../helpers/generalHelper";
// import EditForm from "./EditForm";

const Testimonial = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [postTestimonialList, setPostTestimonialList] = useState([]);
  const [getTestimonialList, setGetTestimonialList] = useState([]);
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

  //post all testimonial
  const handleTestimonialTOAdd = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/testimonial`,
        {
          name,
          description,
          image,
        }
      );

      console.log("posted testimonial: ", data);

      setPostTestimonialList(data);
      fetchAddedTestimonial();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleTestimonailTODeletePost = async (_id) => {
    console.log(_id);
    try {
      await axios.delete(`http://localhost:5000/api/v1/testimonial/${_id}`);
      console.log("data", "data deleted successfully");
      fetchAddedTestimonial();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAddedTestimonial = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/testimonial`
      );
      console.log(data, "testimoniallist");

      setGetTestimonialList(data?.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAddedTestimonial();
  }, [postTestimonialList]);

  return (
    <>
      <div className="container-fluid mb-5">
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
                  Create Testimonial
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
                          Post Testimonial
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
                        <form onSubmit={handleTestimonialTOAdd}>
                          <div
                            className="form-group d-flex"
                            style={{ flexDirection: "column" }}
                          >
                            <label className="text-start p-2">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
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
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {getTestimonialList &&
                  getTestimonialList.map((testimonial) => {
                    return (
                      <>
                        <tr>
                          <td>{testimonial.name}</td>
                          <td>{testimonial.description}</td>
                          <td>
                            <img
                              src={testimonial.image}
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
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className=""
                              style={{
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                              }}
                              onClick={() =>
                                handleTestimonailTODeletePost(testimonial._id)
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

export default Testimonial;
