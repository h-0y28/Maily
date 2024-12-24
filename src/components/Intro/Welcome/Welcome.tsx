import LoginButton from "../../auth/LoginButton/LoginButton";
import Pattern from "../../../assets/welcomePattern.svg";
import * as S from "./Welcome.styles";

const Welcome = () => {
  return (
    <S.WelcomeContainer>
      <S.Pattern src={Pattern} />
      <S.ContentContainer>
        <S.Title>Welcome to Maily :)</S.Title>
        <S.WelcomePhrase>당신의 매일을 기록하세요.</S.WelcomePhrase>
        <S.LoginPhrase>로그인 후 Maily를 이용해 보세요! ↓</S.LoginPhrase>
        <LoginButton />
      </S.ContentContainer>
    </S.WelcomeContainer>
  );
};

export default Welcome;
