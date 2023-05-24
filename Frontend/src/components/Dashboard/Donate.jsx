import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import axios from "axios";
const Donate = () => {
  const [showModalEvent, setShowModalEvent] = useState(false);
  const [getDonateList, setGetDonateList] = useState([]);
  const [postDonateList, setPostDonateList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [openModalToEdit, setOpenModalToEdit] = useState(null);
  const handleDonateTOAddPost = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/street_animal/abc/donate`,
        {
          name,
          email,
          phNumber,
          userAddress,
          amount,
          suggestion,
        }
      );
      console.log("data", data);
      setPostDonateList(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleEditForm = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(
      `http://localhost:5000/api/v1/street_animal/abc/donate/${openModalToEdit?._id}`,
      {
        ...openModalToEdit,
      }
    );
    if (data.success) {
      const donationToBeUpdated = getDonateList.findIndex(
        (donation) => donation._id === openModalToEdit?._id
      );
      if (donationToBeUpdated !== -1) {
        getDonateList[donationToBeUpdated] = openModalToEdit;
        setGetDonateList([...getDonateList]);
      }
    }
    setOpenModalToEdit(null);
  };
  const handleDonationTODeletePost = async (_id) => {
    console.log(_id);
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/street_animal/abc/donate/${_id}`
      );
      console.log("data", "data deleted successfully");
      fetchAddedDonation();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAddedDonation = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/street_animal/abc/donate`
    );
    try {
      console.log(data.getDonation);
      let donation = data.getDonation;
      setGetDonateList(donation);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAddedDonation();
  }, [postDonateList]);
  return (
    <>
      <div className="container">
        <div className="row">
          <MainContent />
          <div className="row  px-3">
            <div className="row">
              <div className="row">
                <div className="col">
                  <div
                    className="p-1"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => {
                        setShowModalEvent(!showModalEvent);
                      }}
                    >
                      Create Donation
                    </button>

                    {showModalEvent ? (
                      <>
                        {" "}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Post Event</h5>
                              </div>
                              <div className="modal-body">
                                <form onSubmit={handleDonateTOAddPost}>
                                  <div
                                    className="form-group d-flex"
                                    style={{ flexDirection: "column" }}
                                  >
                                    <label className="text-start p-2">
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Name"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                    />
                                  </div>
                                  <div
                                    className="form-group d-flex "
                                    style={{ flexDirection: "column" }}
                                  >
                                    <label className="text-start p-2">
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Enter Email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>
                                  <div
                                    className="form-group d-flex "
                                    style={{ flexDirection: "column" }}
                                  >
                                    <label className="text-start p-2">
                                      PhNumber
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter phNumber"
                                      value={phNumber}
                                      onChange={(e) =>
                                        setPhNumber(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div
                                    className="form-group d-flex "
                                    style={{ flexDirection: "column" }}
                                  >
                                    <label className="text-start p-2">
                                      userAddress
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Insert userAddress"
                                      value={userAddress}
                                      onChange={(e) =>
                                        setUserAddress(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div
                                    className="form-group d-flex "
                                    style={{ flexDirection: "column" }}
                                  >
                                    <label className="text-start p-2">
                                      Amount
                                    </label>
                                    <input
                                      type="comment"
                                      className="form-control"
                                      placeholder="Enter amount"
                                      value={amount}
                                      onChange={(e) =>
                                        setAmount(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div
                                    className="form-group d-flex "
                                    style={{ flexDirection: "column" }}
                                  >
                                    <label className="text-start p-2">
                                      Suggestion
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter suggestion"
                                      value={suggestion}
                                      onChange={(e) =>
                                        setSuggestion(e.target.value)
                                      }
                                    />
                                  </div>
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
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">phNumber</th>
                        <th scope="col">userAddress</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Suggestion</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {getDonateList
                      ? getDonateList.map((donation) => {
                          return (
                            <>
                              <tr>
                                <td>{donation.name}</td>
                                <td>{donation.email}</td>
                                <td>{donation.phNumber}</td>
                                <td>{donation.userAddress}</td>
                                <td>{donation.amount}</td>
                                <td>{donation.suggestion}</td>

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
                                      setOpenModalToEdit(donation);
                                    }}
                                  >
                                    Edit
                                  </button>
                                  {openModalToEdit && (
                                    <>
                                      <div
                                        className="modal "
                                        id="exampleModal"
                                        tabIndex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                      >
                                        <div className="modal-dialog">
                                          <div className="modal-content">
                                            <div className="modal-header">
                                              <h1
                                                className="modal-title fs-5"
                                                id="exampleModalLabel"
                                              >
                                                Update
                                              </h1>
                                              <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                              ></button>
                                            </div>
                                            <div className="modal-body">
                                              <form>
                                                <div
                                                  className="form-group d-flex"
                                                  style={{
                                                    flexDirection: "column",
                                                  }}
                                                >
                                                  <label className="text-start p-2">
                                                    Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Name"
                                                    value={
                                                      openModalToEdit?.name
                                                    }
                                                    onChange={(e) => {
                                                      openModalToEdit["name"] =
                                                        e.target.value;
                                                      setOpenModalToEdit({
                                                        ...openModalToEdit,
                                                      });
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="form-group d-flex "
                                                  style={{
                                                    flexDirection: "column",
                                                  }}
                                                >
                                                  <label className="text-start p-2">
                                                    Email
                                                  </label>
                                                  <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                    value={
                                                      openModalToEdit?.email
                                                    }
                                                    onChange={(e) => {
                                                      openModalToEdit["email"] =
                                                        e.target.value;
                                                      setOpenModalToEdit({
                                                        ...openModalToEdit,
                                                      });
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="form-group d-flex "
                                                  style={{
                                                    flexDirection: "column",
                                                  }}
                                                >
                                                  <label className="text-start p-2">
                                                    PhNumber
                                                  </label>
                                                  <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter phNumber"
                                                    value={
                                                      openModalToEdit?.phNumber
                                                    }
                                                    onChange={(e) => {
                                                      openModalToEdit[
                                                        "phNumber"
                                                      ] = e.target.value;
                                                      setOpenModalToEdit({
                                                        ...openModalToEdit,
                                                      });
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="form-group d-flex "
                                                  style={{
                                                    flexDirection: "column",
                                                  }}
                                                >
                                                  <label className="text-start p-2">
                                                    userAddress
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Insert userAddress"
                                                    value={
                                                      openModalToEdit?.userAddress
                                                    }
                                                    onChange={(e) => {
                                                      openModalToEdit[
                                                        "userAddress"
                                                      ] = e.target.value;
                                                      setOpenModalToEdit({
                                                        ...openModalToEdit,
                                                      });
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="form-group d-flex "
                                                  style={{
                                                    flexDirection: "column",
                                                  }}
                                                >
                                                  <label className="text-start p-2">
                                                    Amount
                                                  </label>
                                                  <input
                                                    type="comment"
                                                    className="form-control"
                                                    placeholder="Enter amount"
                                                    value={
                                                      openModalToEdit?.amount
                                                    }
                                                    onChange={(e) => {
                                                      openModalToEdit[
                                                        "amount"
                                                      ] = e.target.value;
                                                      setOpenModalToEdit({
                                                        ...openModalToEdit,
                                                      });
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="form-group d-flex "
                                                  style={{
                                                    flexDirection: "column",
                                                  }}
                                                >
                                                  <label className="text-start p-2">
                                                    Suggestion
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter suggestion"
                                                    value={
                                                      openModalToEdit?.suggestion
                                                    }
                                                    onChange={(e) => {
                                                      openModalToEdit[
                                                        "suggestion"
                                                      ] = e.target.value;
                                                      setOpenModalToEdit({
                                                        ...openModalToEdit,
                                                      });
                                                    }}
                                                  />
                                                </div>
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
                                                  >
                                                    Close
                                                  </button>
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    onClick={handleEditForm}
                                                    data-dismiss="modal"
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                  <button
                                    style={{
                                      backgroundColor: "red",
                                      color: "white",
                                      border: "none",
                                    }}
                                    onClick={() =>
                                      handleDonationTODeletePost(donation._id)
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

export default Donate;
