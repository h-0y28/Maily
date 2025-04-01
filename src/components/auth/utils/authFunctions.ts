import { useState, useEffect } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // 로그인 함수
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
    // navigate("/home");
    navigate("/");
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
    navigate("/"); // intro page
  };

  // 유저 상태 추적
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return { user, login, logout };
};

export default useAuth;
