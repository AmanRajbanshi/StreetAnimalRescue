// import MessengerCustomerChat from "react-messenger-customer-chat";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import SideNavbar from "./components/Dashboard/SideNavbar";
import Home from "./components/Dashboard/Home";
import Notice from "./components/Dashboard/Notice";
import PostStreetAnimalInfo from "./components/Dashboard/PostStreetAnimalInfo";
import RequestToAdopt from "./components/Dashboard/RequestToAdopt";
import Donate from "./components/Dashboard/Donate";
import Contact from "./components/Dashboard/Contact";
import Events from "./components/Dashboard/Events";
import Logout from "./components/Dashboard/Logout";
import Register from "../src/components/Register/Register";
import Login from "../src/components/Login/Login";
import Services from "./components/Service/Services";
import About from "./components/About/About";
import Event from "./components/Events/Event";
import ContactUs from "./components/ContactUs/ContactUs";
import WhoWeAre from "./components/About/WhoWeAre";
import WhatWeDo from "./components/About/WhatWeDo";
import HowWeWork from "./components/About/HowWeWork";
import HomeCarousel from "./components/Home/Carousel/HomeCarousel";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Dashboard/Testimonial";
import UpcomingEvent from "./components/Dashboard/UpcomingEvent";
import AllSubscriber from "./components/Dashboard/AllSubscriber";
import User from "./components/Dashboard/User";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [pathname]);
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomeCarousel />} />
          <Route
            path="/services"
            element={
              <>
                <Services />
              </>
            }
          />{" "}
          <Route path="/abouts" element={<About />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/howwework" element={<HowWeWork />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contacts" element={<ContactUs />} />
          {user?.role === "Admin" && (
            <>
              <Route
                path="/home"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Home />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/dashboard-events"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Events />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/notice"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Notice />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/postInfo"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <PostStreetAnimalInfo />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/adoption"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <RequestToAdopt />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/upcoming-events"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <UpcomingEvent />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/testimonial"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Testimonial />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/donate"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Donate />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Contact />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/all-user"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <User />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/subscriber"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "62px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <AllSubscriber />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/logout"
                element={
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "100px",
                        backgroundColor: "#eff1f3",
                      }}
                    >
                      <div className="col-md-3">
                        <SideNavbar />
                      </div>
                      <div className="col-md-9">
                        <Logout />
                      </div>
                    </div>
                  </>
                }
              />
            </>
          )}
          <Route
            path="*"
            element={
              <>
                <div className="d-flex justify-content-centet align-items-center">
                  <img
                    src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
                    alt=""
                    srcset=""
                    style={{ margin: "20px auto" }}
                  />
                </div>
              </>
            }
          />
        </Routes>
        {/* <MessengerCustomerChat
          pageId="115346451534614"
          appId="786085039847900"
        /> */}
      </div>
    </>
  );
}

export default App;
