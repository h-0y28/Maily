import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.styles";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <S.NotFoundContainer>
      <S.State>404</S.State>
      <S.Description>페이지를 찾을 수 없습니다.</S.Description>
      <S.Button onClick={handleNavigateHome}>홈으로 돌아가기 →</S.Button>
    </S.NotFoundContainer>
  );
};

export default NotFound;
