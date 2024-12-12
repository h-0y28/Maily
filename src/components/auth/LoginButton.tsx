import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in: ", user);
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="px-6 py-2 text-white bg-primaryBlack rounded-lg hover:bg-green-600"
    >
      Google로 로그인
    </button>
  );
};

export default LoginButton;
