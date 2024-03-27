import { useContext } from "react";
import { WorkoutsContext } from "../Context/WorkoutContext";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used in side an WorkoutsContextProvider"
    );
  }

  return context;
};

export default useWorkoutsContext;
