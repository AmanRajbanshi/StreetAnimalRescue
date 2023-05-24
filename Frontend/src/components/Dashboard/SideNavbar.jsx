import React from "react";
import { Link } from "react-router-dom";
import "./sidenavbar.css";
const SideNavbar = () => {
  return (
    <>
      <div
        className="container-fluid sidenav_dashboard"
        style={{
          marginTop: "0px",
          marginLeft: "-15px",
        }}
      >
        <div className="row">
          <div className="col-md-12  mt-4">
            <div>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "#9D92E8" }}
              >
                <h3 className="text-start">Dashboard</h3>
              </Link>
            </div>
            <div
              className="row p-1"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <nav>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    className="onHoverSidenavbarElement"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/home"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Home
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/dashboard-events"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Event
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/notice"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Notice
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/donate"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Donate
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/postInfo"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Post Information
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/adoption"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Request to Adopt
                    </Link>
                  </p>
                </div>

                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/upcoming-events"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      UpcomingEvent
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/testimonial"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Testimonial
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/contact"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Contact
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/all-user"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      All user
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/subscriber"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      All Subscriber
                    </Link>
                  </p>
                </div>
                <div className="col d-flex justify-content-flex-start onHoverSidenavbarElement">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* <Link
                      to="/logout"
                      className="mt-2 dashboard_link"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                      }}
                    >
                      Logout
                    </Link> */}
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideNavbar;
