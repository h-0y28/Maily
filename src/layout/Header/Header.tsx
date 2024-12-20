import * as S from "./Header.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MailyLogo from "../../assets/MailyLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isDiaryMenuOpen, setIsDiaryMenuOpen] = useState(false);

  const handleDiaryHover = () => {
    setIsDiaryMenuOpen(true);
  };

  const handleDiaryLeave = () => {
    setIsDiaryMenuOpen(false);
  };

  return (
    <S.HeaderWrapper>
      <S.Logo src={MailyLogo} alt="logo" onClick={() => navigate("/")} />
      <S.Nav>
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
        <S.LogoutButton onClick={() => console.log("Logout")}>
          로그아웃
        </S.LogoutButton>
      </S.Nav>
    </S.HeaderWrapper>
  );
};

export default Header;
