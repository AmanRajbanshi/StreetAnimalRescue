import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import CountUp from "react-countup";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [eventLength, setEventLength] = useState("");
  const [requestToAdoptLength, setRequestToAdoptLength] = useState("");
  const [getDonateAmount, setGetDonateAmount] = useState("");
  const [donatedBy, setDonatedBy] = useState("");

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
      `http://localhost:5000/api/v1/street-animal/adopt`
    );
    try {
      const totalRequestToAdopt = data.message;
      const valueObtained = totalRequestToAdopt.reduce((acc, cur) => {
        return (acc += cur.quantity);
      }, 0);
      setRequestToAdoptLength(valueObtained);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchAddedDonation = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/street-animal/donate`
    );
    try {
      console.log(data.totalAmount);
      let donatedBy = data.DonatedBy;
      let donation = data.totalAmount;
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
  return (
    <>
      <div className="container " style={{ marginTop: "20px" }}>
        <div className="row">
          <MainContent />
          <div className="row mt-2 px-3">
            <div className="col-md-3 p-1">
              <div className="card p-5 zoom" style={{ height: "25vh" }}>
                <h6 className="text-center">Total Event </h6>
                <h3 className="text-center">
                  <CountUp end={eventLength} duration={5} />
                  {/* {eventLength} */}
                </h3>
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="card p-5" style={{ height: "25vh" }}>
                <h6>Total Animal Adopted</h6>
                <h3 className="text-center">
                  <CountUp end={requestToAdoptLength} duration={5} />
                  {/* {requestToAdoptLength} */}
                </h3>
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="card p-5" style={{ height: "25vh" }}>
                <h6 className="text-center"> Number of People Donated</h6>
                <h3 className="text-center">
                  <CountUp end={donatedBy} duration={5} />
                </h3>
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="card p-5" style={{ height: "25vh" }}>
                <h6>Total Fund Collected </h6>
                <h3>
                  Amount : Rs.
                  <CountUp end={getDonateAmount} duration={5} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
