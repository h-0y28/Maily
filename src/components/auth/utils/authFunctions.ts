import { useState, useEffect } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // 로그인 함수
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      toast.success("로그인 성공");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("로그인 실패");
    }
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      toast.success("로그아웃 성공");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("로그아웃 실패");
    }
  };

  // 유저 상태 추적
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return { user, login, logout };
};

export default useAuth;
