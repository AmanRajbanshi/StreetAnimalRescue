import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentModal from "./CommentModal";
import "./events.css";
import Footer from "../Footer/Footer";
import CountUp from "react-countup";
import { FacebookShareButton, FacebookShareCount } from "react-share";
const Events = () => {
  const [eventLength, setEventLength] = useState("");
  const [requestToAdoptLength, setRequestToAdoptLength] = useState("");
  const [getDonateAmount, setGetDonateAmount] = useState("");
  const [donatedBy, setDonatedBy] = useState("");
  const [addEventMetaData, setAddEventMetaData] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [eventToBeShared, setEventToBeShared] = useState(null);

  const [allEventLikes, setAllEventLikes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  let url = "https://github.com";

  const fetchEvents = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/v1/events`);
    console.log(data.message, "eventsList");

    setAllEvents([...data?.message]);
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEventsLikes = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/v1/like-event`);

    setAllEventLikes([...data?.message]);
  };
  useEffect(() => {
    fetchEventsLikes();
  }, []);

  const onAddEventFormClose = () => {
    setAddEventMetaData(null);
  };

  const handleLike = async (event) => {
    try {
      await axios.put(`http://localhost:5000/api/v1/like-event/${event?._id}`, {
        email: user?.email,
      });

      fetchEventsLikes();
    } catch (error) {
      alert(error?.response?.data?.error);
    }
  };

  const fetchAddedEvent = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/events`);
      const totalEventCount = data.message;
      setEventLength(totalEventCount.length);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchRequestToAdoptAnimalList = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/street_animal/adopt`
    );
    try {
      console.log(data);
      const totalRequestToAdopt = data.length;
      setRequestToAdoptLength(totalRequestToAdopt);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAddedDonation = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/street_animal/abc/donate`
    );
    try {
      console.log(data.totalAmount);
      let donatedBy = data.DonatedBy;
      let donation = data.totalAmount;
      console.log(donatedBy);
      setDonatedBy(donatedBy);
      setGetDonateAmount(donation);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAddedEvent();
    fetchRequestToAdoptAnimalList();
    fetchAddedDonation();
  }, []);

  let binarySearch = function (sorted_arr, target, start = 0, end, field) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (sorted_arr[mid]?.toLowerCase().includes(target?.toLowerCase()))
      return mid;

    if (sorted_arr[mid] > target)
      return binarySearch(sorted_arr, target, start, mid - 1);
    else return binarySearch(sorted_arr, target, mid + 1, end);
  };

  const handleSearchData = () => {
    allEvents.sort((a, b) => a?.title?.localeCompare(b?.title));
    const eventsTitle = allEvents.map((event) => event?.title);

    const results = binarySearch(
      eventsTitle,
      searchData,
      0,
      eventsTitle?.length
    );

    setAllEvents(results !== -1 ? [allEvents[results]] : []);
  };

  useEffect(() => {
    if (!searchData) {
      fetchEvents();
    }
  }, [searchData]);
  return (
    <>
      {addEventMetaData && (
        <CommentModal
          addEventMetaData={addEventMetaData}
          onAddEventFormClose={onAddEventFormClose}
        />
      )}

      <div className="container-fluid" style={{ backgroundColor: "#EFF1F3" }}>
        <div className="container " style={{ marginTop: "10px" }}>
          <div className="row">
            <div
              className="col-md-8  mt-5 first_column_in_event_section"
              style={{ height: "700px", overflowY: "scroll" }}
            >
              <div class="d-flex justify-content-center align-items-center w-100 my-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Query"
                  value={searchData}
                  onChange={(e) => {
                    setSearchData(e.target.value);
                  }}
                />

                <button
                  className="btn btn-primary mx-1"
                  type="submit"
                  onClick={handleSearchData}
                >
                  Search
                </button>
              </div>
              {!allEvents.length && (
                <h3 className="mt-4 text-center">No Events</h3>
              )}
              {allEvents.map((event) => {
                return (
                  <div className="card  p-3 " style={{ margin: "10px" }}>
                    <div className="row ">
                      <div className="col-md-4">
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={event?.image}
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <h3>{event?.title}</h3>
                            <p>{event?.id}</p>
                          </div>
                        </div>
                        <div className="col">
                          <p className="">{event?.description}</p>
                        </div>
                        <div className="row" style={{}}>
                          <div className="col  " style={{ display: "flex" }}>
                            <div
                              className="col-sm-12 col-md-12 "
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "flex-end",
                              }}
                            >
                              <div className="col-md-4 border">
                                <small className="" style={{ padding: "5px" }}>
                                  <button
                                    style={{
                                      border: "none",
                                      padding: "10px",
                                      width: "100%",
                                      backgroundColor: "white",
                                    }}
                                    onClick={() => {
                                      handleLike(event);
                                    }}
                                  >
                                    Like{" "}
                                    {
                                      allEventLikes.find(
                                        (like) => like?.eventId === event?._id
                                      )?.emails?.length
                                    }
                                  </button>
                                </small>
                              </div>
                              <div className="col-md-4 border">
                                <small style={{ padding: "5px" }}>
                                  <button
                                    style={{
                                      border: "none",
                                      padding: "10px",
                                      width: "100%",
                                      backgroundColor: "white",
                                    }}
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    onClick={() => setAddEventMetaData(event)}
                                  >
                                    comment
                                  </button>
                                </small>
                              </div>
                              <div className="col-md-4 border">
                                <button
                                  style={{
                                    border: "none",
                                    padding: "10px",
                                    width: "100%",
                                    backgroundColor: "white",
                                  }}
                                >
                                  <small
                                    className=""
                                    onClick={() => setEventToBeShared(event)}
                                  >
                                    <FacebookShareButton
                                      quote={event?.title}
                                      url={event?.image}
                                      appId={"786085039847900"}
                                    >
                                      <FacebookShareCount url={url}>
                                        {(shareCount) => (
                                          <span className="myShareCountWrapper">
                                            {shareCount}
                                          </span>
                                        )}
                                      </FacebookShareCount>
                                      <span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-share mx-3"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                      </span>
                                      Share
                                    </FacebookShareButton>
                                  </small>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="col-md-4 second_column_in_event_section border mt-5"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <div className="col-md-12 p-1">
                <div className="card p-2 zoom">
                  <h6 className="text-center">Total Event </h6>
                  <h3 className="text-center">
                    <CountUp end={eventLength} duration={5} />
                  </h3>
                </div>
              </div>
              <div className="col-md-12 p-1">
                <div className="card p-2">
                  <h6 className="text-center">Total Animal Adopted</h6>
                  <h3 className="text-center">
                    <CountUp end={requestToAdoptLength} duration={5} />
                  </h3>
                </div>
              </div>
              <div className="col-md-12 p-1">
                <div className="card p-2">
                  <h6 className="text-center"> Number of People Donated</h6>
                  <h3 className="text-center">
                    <CountUp end={donatedBy} duration={5} />
                  </h3>
                </div>
              </div>
              <div className="col-md-12 p-1">
                <div className="card p-2">
                  <h6 className="text-center">Total Fund Collected </h6>
                  <h3 className="text-center">
                    Amount : Rs.
                    <CountUp end={getDonateAmount} duration={5} />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
