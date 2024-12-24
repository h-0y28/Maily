import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

export const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User logged in: ", user);
  } catch (error) {
    console.error("Login error: ", error);
  }
};
