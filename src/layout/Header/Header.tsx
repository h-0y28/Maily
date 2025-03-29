import * as S from "./Header.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MailyLogo from "../../assets/MailyLogo.svg";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../components/auth/utils/firebaseConfig";
import useAuth from "../../components/auth/utils/authFunctions";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  // 로그인 상태 추적
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // 컴포넌트가 unmount될 때 리스너 해제
    return () => unsubscribe();
  }, []);

  return (
    <S.HeaderWrapper>
      <S.Logo src={MailyLogo} alt="logo" onClick={() => navigate("/")} />

      <S.Nav>
        {/* 로그인 됐을 때 */}
        {user ? (
          <>
            <S.NavItem
              onClick={() =>
                navigate(
                  `/diary/create/${new Date().toISOString().split("T")[0]}`
                )
              }
            >
              다이어리 작성
            </S.NavItem>
            <S.NavItem
              onClick={() =>
                navigate(`/diary/${new Date().toISOString().split("T")[0]}`)
              }
            >
              다이어리
            </S.NavItem>
            {/* <S.NavItem onClick={() => navigate("/pick")}>Pick</S.NavItem> */}
            <S.NavItem onClick={() => navigate("/profile")}>프로필</S.NavItem>
            <S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
          </>
        ) : (
          // 로그인 안 됐을 때
          <S.LoginButton onClick={login}>로그인</S.LoginButton>
        )}
      </S.Nav>
    </S.HeaderWrapper>
  );
};

export default Header;
