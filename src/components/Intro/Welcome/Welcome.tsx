import { useEffect, useState } from "react";
import Pattern from "../../../assets/welcomePattern.svg";
import LoginButton from "../../auth/LoginButton";
import * as S from "./Welcome.styles";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../auth/utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navgatie = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  // 로그인 상태 추적
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <S.WelcomeContainer>
      <S.Pattern src={Pattern} />
      <S.ContentContainer>
        <S.Title>Welcome to Maily :)</S.Title>
        <S.WelcomePhrase>당신의 매일을 기록하세요.</S.WelcomePhrase>
        {user ? (
          // 로그인 됐을 때
          <S.HomeButton onClick={() => navgatie("/home")}>
            홈으로 가기
          </S.HomeButton>
        ) : (
          <>
            {/* 로그인 안 됐을 때 */}
            <S.LoginPhrase>로그인 후 Maily를 이용해 보세요! ↓</S.LoginPhrase>
            <LoginButton />
          </>
        )}
      </S.ContentContainer>
    </S.WelcomeContainer>
  );
};

export default Welcome;
