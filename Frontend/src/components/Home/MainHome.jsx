// import axios from "axios";
// import React from "react";
// // import HomeCarousel from "./Carousel/HomeCarousel";
// // import Khalti from "../Khalti/Khalti";

// const MainHome = () => {
//   let config = {
//     publicKey: "test_public_key_217cd8ec1209455bbc10c8a7c1c7813e",
//     productIdentity: "1234567890",
//     productName: "Drogon",
//     productUrl: "http://localhost:3000",
//     eventHandler: {
//       onSuccess(payload) {
//         alert("Payment Successful");
//         console.log(payload);
//         axios
//           .post("http://localhost:5000/api/v1/payment/verify/", payload)
//           .then((response) => {
//             console.log(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//         const { amount, idx, mobile, product_name, product_url } = payload;
//         const { data } = axios.post("http://localhost:3000/api/v1/payment", {
//           amount,
//           idx,
//           mobile,
//           product_name,
//           product_url,
//         });
//         console.log(data);
//       },
//       onError(error) {
//         console.log(error);
//       },
//       onClose() {
//         console.log("widget is closing");
//       },
//     },
//     paymentPreference: [
//       "KHALTI",
//       "EBANKING",
//       "MOBILE_BANKING",
//       "CONNECT_IPS",
//       "SCT",
//     ],
//   };

//   // let checkout = new KhaltiCheckout(config);
//   // const handleClick = (e) => {
//   //   e.preventDefault();

//   //   console.log(checkout.show({ amount: 1000 }));
//   // };
//   return (
//     <>
//       {/* <HomeCarousel /> */}
//       {/* <div className="container">
//         <div className="row">
//           <div
//             className="col"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center",
//             }}
//           > */}
//       {/* <p className="" style={{ textAlign: "center", marginTop: "100px" }}> */}
//       {/* hello MainHome */}
//       {/* </p>
//           </div> */}
//       <div className="title ">
//         <button
//           onClick={handleClick}
//           style={{
//             width: "100px",
//             height: "40px",
//             color: "white",
//             backgroundColor: "#4D2A7A",
//             borderRadius: "10px",
//             fontSize: "16px",
//           }}
//         >
//           Checkout
//         </button>
//       </div>
//       {/* </div>
//       </div> */}
//     </>
//   );
// };

// export default MainHome;
