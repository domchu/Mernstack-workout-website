require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/api/workouts/", workoutRoutes);

// CONNECT TO MONGODB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("connecting to DB & listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// app.listen(process.env.PORT, () => {
//     console.log("listening on port ", process.env.PORT);
// })
