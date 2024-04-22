require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors()); //CORS => CROSS ORIGIN REQUEST SERVICES

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// API ROUTE   
app.use("/api/workouts/", workoutRoutes);

// USER ROUTE
app.use("/api/user/", userRoutes);

// CONNECT TO MONGODB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // LISTEN FOR REQUEST
    app.listen(process.env.PORT, () => {
      console.log("Connecting to db & listening for Port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });


