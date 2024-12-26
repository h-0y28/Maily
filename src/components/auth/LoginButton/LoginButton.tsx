import { useNavigate } from "react-router-dom";
import { handleLogin } from "../utils/authFunctions";
import * as S from "./LoginButton.styles";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <S.ButtonContainer onClick={() => handleLogin(navigate)}>
      Google로 로그인
    </S.ButtonContainer>
  );
};

export default LoginButton;
