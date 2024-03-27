const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/workoutController");

// EXPRESS ROUTER
const router = express.Router();

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