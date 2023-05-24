const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("morgan");
const mongoose = require("mongoose");
const { createSeedAdmin } = require("./common/generalHelpers");
require("express-async-handler");
require("dotenv").config();
const cors = require("cors");

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

//Routes Imports
const contactRoute = require("./routes/contactRoute");
const upcomingEventRoute = require("./routes/upcomingEventRoute");
const userRoute = require("./routes/user");
const eventRoute = require("./routes/event");
const eventLikesRoute = require("./routes/eventLike");
const donationRoute = require("./routes/donationRoute");
const reqToAdoptRoute = require("./routes/reqToAdoptRoute");
const khaltiRoute = require("./routes/KhaltiRoute");
const uploadStreetAnimalInfo = require("./routes/uploadStreetAnimalInfoRoute");
const errorHandler = require("./middlewares/error");
const whatPeopleSayroute = require("./routes/whatPeopleSayRoute");
const userSubscribeRoute = require("./routes/userSubscribeRoute");

//Routes Middlewares
app.use("/api/v1/", contactRoute);
app.use("/api/v1/", upcomingEventRoute);
app.use("/api/v1/street-animal/", donationRoute);
app.use("/api/v1/street-animal", reqToAdoptRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1", khaltiRoute);
app.use("/api/v1/events", eventRoute);
app.use("/api/v1/", uploadStreetAnimalInfo);
app.use("/api/v1/like-event", eventLikesRoute);
app.use("/api/v1/", whatPeopleSayroute);
app.use("/api/v1/", userSubscribeRoute);

app.use(errorHandler);

// sendEmailToAllSubscriber([ "amanmongodb@gmail.com"]);
mongoose.set("strictQuery", true);
const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Connected to database");
        createSeedAdmin();
      }
    });
  } catch (err) {
    console.log(err);
  }
};

mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
