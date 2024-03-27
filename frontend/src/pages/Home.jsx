import { useEffect } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts/");
      const data = await response.json();
      if (response.ok) {
        // setWorkouts(data);
        dispatch({ type: "SET_WORKOUTS", payload: data });
        // console.log("SET_WORKOUTS", data);
        // console.log(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <>
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
};

export default Home;
