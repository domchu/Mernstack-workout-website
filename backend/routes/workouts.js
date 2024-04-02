const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

// EXPRESS ROUTER
const router = express.Router();

// REQUIRE AUTH FOR ALL WORKOUTS ROUTES/MIDDLEWARE TO PROTECT API
router.use(requireAuth);

// GET ALL WORKOUTS
router.get("/", getWorkouts);

// GET A SINGLE WORKOUTS
router.get("/:id", getWorkout);

// POST A NEW WORKOUTS
router.post("/", createWorkout);

// DELETE A WORKOUTS
router.delete("/:id", deleteWorkout);

// UPDATE A WORKOUTS
router.patch("/:id", updateWorkout);


module.exports = router