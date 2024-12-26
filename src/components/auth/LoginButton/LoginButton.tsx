import useAuth from "../utils/authFunctions";
import * as S from "./LoginButton.styles";

const LoginButton = () => {
  const { login } = useAuth();
  return <S.ButtonContainer onClick={login}>Google로 로그인</S.ButtonContainer>;
};

export default LoginButton;
