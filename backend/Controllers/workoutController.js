const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

// GET ALL WORKOUT
const getWorkouts = async (req, res) => {
  // EACH USER
  // const user_id = req.user._id;
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params;
  // CHECKING IF AN ID IS VALID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Not such workout" });
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
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields.", emptyFields });
  }

  // ADD DOCUMENT TO MONGO_DB
  try {
    // each user with profile
    const user_id = req.user._id;
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
