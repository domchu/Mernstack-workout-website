import { useAuthContext } from "./useAuthContext";
import useWorkoutsContext from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const logout = () => {
    // REMOVE USER FROM THE STORAGE
    localStorage.removeItem("user");

    // DISPATCH LOGOUT ACTION
    dispatch({ type: "LOGOUT" });
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};
