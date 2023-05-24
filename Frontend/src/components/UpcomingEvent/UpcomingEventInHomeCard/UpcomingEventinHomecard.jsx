import React, { useEffect, useState } from "react";
import axios from "axios";
import "./upcomingeventhomecard.css";
import { FacebookShareButton, FacebookShareCount } from "react-share";
const UpcomingEventinHomecard = () => {
  const [getUpcomingEventList, setGetUpcomingEventList] = useState([]);
  const [setEventToBeShared] = useState(null);

  const fetchAddedUpcomingEvent = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/upcomingEvent`
      );
      console.log(data, "Upcomingeventlist");

      setGetUpcomingEventList(data?.getUpcomingEvent);
    } catch (error) {
      console.log(error.message);
    }
  };
  let url = "https://github.com";

  useEffect(() => {
    fetchAddedUpcomingEvent();
  }, []);
  return (
    <>
      {getUpcomingEventList
        ? getUpcomingEventList.map((upcomingEvent) => (
            <>
              <div className="col-md-4">
                <div
                  className="card upcoming_event_home_card parent"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    className="image child"
                    style={{ borderRadius: "5px", height: "300px" }}
                    src={upcomingEvent.image}
                    alt=""
                  />
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="col-md-6 badge_data mt-2">
                      <span
                        className="badge  badge_data_left_title mt-2 mb-3"
                        style={{ color: "#9d92e8" }}
                      >
                        {upcomingEvent.location}
                      </span>
                      <span
                        className="badge badge_data_right_title  mt-2 mb-3 "
                        style={{ color: "#9d92e8" }}
                      >
                        {new Date(upcomingEvent?.createdAt)
                          .toString()
                          ?.slice(0, 16)}
                      </span>
                    </div>
                  </div>
                  <h6 className="px-2">{upcomingEvent.title}</h6>
                  <p className="upcoming_event_card_description px-2">
                    {upcomingEvent.description}
                  </p>
                  <hr />
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",

                      paddingBottom: "10px",
                    }}
                  >
                    <div
                      className="col-sm-12 col-md-12 "
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <small
                        className="likeButton"
                        onClick={() => setEventToBeShared(upcomingEvent)}
                      >
                        <FacebookShareButton
                          quote={upcomingEvent?.title}
                          url={upcomingEvent?.image}
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
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default UpcomingEventinHomecard;
