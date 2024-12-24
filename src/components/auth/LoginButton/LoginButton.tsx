import { handleLogin } from "../utils/authFunctions";
import * as S from "./LoginButton.styles";

const LoginButton = () => {
  return (
    <S.ButtonContainer onClick={handleLogin}>Google로 로그인</S.ButtonContainer>
  );
};

export default LoginButton;
