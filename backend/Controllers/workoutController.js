const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

// GET ALL WORKOUT
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params;
  // CHECKING IF AN ID IS VALID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Not such workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    res.status(404).json({ error: "Not such workout" });
  }
  res.status(200).json(workout);
};

// CREATE A NEW WORKOUT POST
const createWorkout = async (req, res) => {
  const { load, reps, title } = req.body;

  // ERROR HANDLING ON THE EMPTYFIELD
  let emptyField = [];

  if (!title) {
    emptyField.push("title");
  }
  if (!load) {
    emptyField.push("load");
  }
  if (!reps) {
    emptyField.push("reps");
  }
  if (emptyField.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields.", emptyField });
  }

  // ADD DOCUMENT TO MONGO_DB
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A WORKOUT POST
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  // CHECKING IF AN ID IS VALID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Not such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(400).json({ error: "Not such workout" });
  }
  res.status(200).json(workout);
};

// UPDATE A WORKOUT POST
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  // CHECKING IF AN ID IS VALID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Not such workout" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    res.status(400).json({ error: "Not such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
