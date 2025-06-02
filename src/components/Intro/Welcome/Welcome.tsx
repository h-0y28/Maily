import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

import Pattern from "../../../assets/welcomePattern.svg";
import { auth } from "../../auth/utils/firebaseConfig";
import useAuth from "../../auth/utils/authFunctions";
import * as S from "./Welcome.styles";

const Welcome = () => {
  const [user, setUser] = useState<User | null>(null);
  const { login } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return (
    <S.WelcomeContainer>
      <S.Pattern src={Pattern} alt="Welcome background pattern" />
      <S.ContentContainer>
        <S.Title>Welcome to Maily :)</S.Title>
        <S.WelcomePhrase>당신의 매일을 기록하세요.</S.WelcomePhrase>

        {!user && (
          <>
            <S.LoginPhrase>로그인 후 Maily를 이용해 보세요! ↓</S.LoginPhrase>
            <S.ButtonContainer onClick={login}>
              Google로 로그인
            </S.ButtonContainer>
          </>
        )}
      </S.ContentContainer>
    </S.WelcomeContainer>
  );
};

export default Welcome;
