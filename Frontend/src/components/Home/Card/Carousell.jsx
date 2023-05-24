import React from "react";
import "./carousell.css";
const Carousell = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 px-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <section className="pt-5 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-6  ">
                    <h3
                      className=" text-start our_testimonial_title "
                      style={{
                        textAlign: "start",
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      Our Testimonials
                    </h3>
                  </div>
                  <div className="col-6 left_right_arrow text-right ">
                    <a
                      className="btn  mb-3 mr-1"
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="prev"
                      style={{ backgroundColor: "#9d92e8", color: "white" }}
                    >
                      <i className="fa fa-arrow-left"></i>
                    </a>
                    <a
                      className="btn  mb-3 "
                      href="#carouselExampleIndicators2"
                      role="button"
                      data-slide="next"
                      style={{ backgroundColor: "#9d92e8", color: "white" }}
                    >
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <div
                      id="carouselExampleIndicators2"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-md-4 paper mb-3  ">
                              <div className="card parent ">
                                <img
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                  style={{ height: "300px" }}
                                />
                                <div className="card-body">
                                  <h4 className="card-title">Anu Adhikari</h4>
                                  <p className="card-text">
                                    "I had always been hesitant to adopt a pet,
                                    but after seeing the incredible work that a
                                    street animal care organization does, I
                                    decided to give it a try. Now, my rescue dog
                                    is the light of my life, and I couldn't
                                    imagine my home without him."
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 paper mb-3 ">
                              <div className="card parent ">
                                <img
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://media.istockphoto.com/id/129944283/photo/teenage-boy-sitting-with-father.jpg?b=1&s=170667a&w=0&k=20&c=xDFAHCmlaLIw5J3pUanPeMNg80gBy2CNCZQQ2tgvfpA="
                                  style={{ height: "300px" }}
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1674503508221-f85101224731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdWx0JTIwYm95cyUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                  style={{ height: "300px" }}
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://media.istockphoto.com/id/129944283/photo/teenage-boy-sitting-with-father.jpg?b=1&s=170667a&w=0&k=20&c=xDFAHCmlaLIw5J3pUanPeMNg80gBy2CNCZQQ2tgvfpA="
                                  style={{ height: "300px" }}
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  style={{ height: "300px" }}
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://media.istockphoto.com/id/1356630979/photo/teenage-students-talking-in-the-classroom.jpg?b=1&s=170667a&w=0&k=20&c=BxpFBqQTeYTBqDw3tXBbNbxOnV06jVwz-XGLFIhgbhI="
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  style={{ height: "300px" }}
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  style={{ height: "300px" }}
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  style={{ height: "300px" }}
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 paper mb-3">
                              <div className="card parent ">
                                <img
                                  style={{ height: "300px" }}
                                  className="img-fluid child"
                                  alt="100%x280"
                                  src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                                />
                                <div className="card-body">
                                  <h4 className="card-title">
                                    Special title treatment
                                  </h4>
                                  <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousell;
