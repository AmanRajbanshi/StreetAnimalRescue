import React from "react";
import "./whoweare.css";
import Footer from "../Footer/Footer";
const WhoWeAre = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row about_landing_container">
          <div
            className="col-md-6  "
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3 className="about_landing_title ">About US</h3>
            <p className="about_landing_description">
              Street Animal Rescue has been connecting hundreds of volunteers to
              local communities all over the world since its first initiation in
              2015. The emergency response program and the mad street animal
              rehabilitation programs were the initial programs successfully
              carried out by Street Animal Rescue.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#EFF1F3" }}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="col introduction_section mt-5">
              <h3
                className="introduction_part"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                INTRODUCTION
              </h3>
              <p
                className="introduction_description"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Street Animal Rescue is a non-profit organisation, which
                directly connects the donors and the recipients. Our main
                objective is to help anyone in need without any hesitations and
                expectation of payback. The organisation doesn’t spend any of
                the received donations on administration cost as we believe that
                100% of the donation should reach the recipient in order to
                establish effective helping. All of our volunteers, mobilised
                for the authentication of the problem, logistics and delivery,
                cover their own expenses in order to save the administrative
                expense.
              </p>
            </div>
            <div
              className="col history_section"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <h3 className="history_part">HISTORY OF THE ORGANIZATION</h3>
              <p className="history_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quae dolor delectus facere provident quasi enim a
                excepturi in sapiente, atque dolores qui similique corporis id
                consequuntur unde deserunt velit maxime temporibus odio fugiat
                perferendis asperiores. Id eos excepturi, possimus fuga autem ut
                explicabo a inventore dolorem soluta porro, quibusdam vero
                dolore harum quaerat consectetur quam. Magni voluptas, quae,
                rerum praesentium rem sint, aut hic numquam repellat quod
                quisquam perspiciatis. Iure sunt magnam quia dolores recusandae
                rerum quaerat accusamus quasi provident numquam, veritatis
                quidem deleniti culpa maiores. Id itaque laboriosam aliquam
                molestiae distinctio eaque natus, explicabo neque iusto facere
                provident.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhoWeAre;
