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
  const [isDiaryMenuOpen, setIsDiaryMenuOpen] = useState(false);
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

  const handleDiaryHover = () => {
    setIsDiaryMenuOpen(true);
  };

  const handleDiaryLeave = () => {
    setIsDiaryMenuOpen(false);
  };

  return (
    <S.HeaderWrapper>
      {user ? (
        // 로그인 됐을 때
        <S.Logo src={MailyLogo} alt="logo" onClick={() => navigate("/home")} />
      ) : (
        // 로그인 안 됐을 때
        <S.Logo src={MailyLogo} alt="logo" onClick={() => navigate("/")} />
      )}
      <S.Nav>
        {/* 로그인 됐을 때 */}
        {user ? (
          <>
            <S.NavItem
              onMouseEnter={handleDiaryHover}
              onMouseLeave={handleDiaryLeave}
            >
              다이어리
              {isDiaryMenuOpen && (
                <S.DiaryMenu>
                  <S.DiaryMenuItem onClick={() => navigate("/write")}>
                    다이어리 작성하기
                  </S.DiaryMenuItem>
                  <S.DiaryMenuItem onClick={() => navigate("/diaryMonth")}>
                    기본 다이어리 보기
                  </S.DiaryMenuItem>
                  <S.DiaryMenuItem onClick={() => navigate("/pick ")}>
                    Pick 다이어리 보기
                  </S.DiaryMenuItem>
                </S.DiaryMenu>
              )}
            </S.NavItem>
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
