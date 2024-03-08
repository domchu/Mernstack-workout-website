const express = require('express');
const router = express.Router();


// GETB A WORKOUTS
router.get("/", (req, res) => {
    res.json({mssg: "Get all workouts"})
})

// GET A SINGLE WORKOUTS

router.get("/:id", (req, res) => {
res.json({mssg: "Get a single workouts"})
})

// POST A NEW WORKOUTS
router.post("/", (req, res) => { 
    res.json({mssg: "Post a new workout"})
})

// DELETE A WORKOUTS
router.delete("/:id", (req, res) => { 
    res.json({mssg: "delete a workout"})
})

// UPDATE A WORKOUTS
router.patch("/:id", (req, res) => { 
    res.json({mssg: "update a workout"})
})


module.exports = router