import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";

export const handleLogin = async (navigate: ReturnType<typeof useNavigate>) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User logged in: ", user);
    navigate("/home");
  } catch (error) {
    console.error("Login error: ", error);
  }
};
