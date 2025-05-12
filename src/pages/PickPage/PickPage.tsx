import * as S from "./PickPage.styles";
import { Container } from "../../styles/commonStyles";
import PickDiary from "../../components/Diary/PickDiary";

export default function Pick() {
  return (
    <Container>
      <S.Header>
        <S.Title>PICK 다이어리</S.Title>
        <S.InfoBox>
          <S.Description>PICK 한 추억들을 한눈에 볼 수 있어요!</S.Description>
        </S.InfoBox>
      </S.Header>
      <PickDiary />
    </Container>
  );
}
