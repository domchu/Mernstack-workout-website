import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const jsonData = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(jsonData.error);
    }
    if (response.ok) {
      // SAVE THE USER TO LOCAL STORAGE
      localStorage.setItem("user", JSON.stringify(jsonData));

      // UPDATE THE AUTH CONTEXT
      dispatch({ type: "LOGIN", payload: jsonData });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};

