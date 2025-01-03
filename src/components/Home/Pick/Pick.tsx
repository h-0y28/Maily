import { useNavigate } from "react-router-dom";
import * as S from "./Pick.styles";

const Pick = () => {
  const navigate = useNavigate();

  return (
    <S.PickContainer>
      <S.Header>
        <S.Title>PICK 다이어리</S.Title>
        <S.InfoBox>
          <S.Description>PICK 한 추억들을 한눈에 볼 수 있어요! |</S.Description>
          {/* 임시로 홈으로가게 해놓음 */}
          <S.EditButton onClick={() => navigate("/")}> 수정하기</S.EditButton>
        </S.InfoBox>
      </S.Header>

      <S.PickListContainer></S.PickListContainer>
    </S.PickContainer>
  );
};

export default Pick;
