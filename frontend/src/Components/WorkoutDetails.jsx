import React from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";
// DATE FNS
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  // DELETING WORKOUT FUNCTION
  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const deleteData = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: { _id: deleteData._id } });
    }
  };

  return (
    <>
      <div className="workout-details">
        <h4> {workout.title} </h4>
        <p>
          <strong>Load (in Kg):</strong> {workout.load}
        </p>
        <p>
          <strong>Reps:</strong> {workout.reps}
        </p>
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        <p> {workout.createdAt} </p>
        <span onClick={handleClick} className="material-symbols-outlined">
          Delete
        </span>
      </div>
    </>
  );
};

export default WorkoutDetails;
