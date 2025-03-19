import { useNavigate } from "react-router-dom";
import LockIcon from "../../../assets/LockIcon.png";
// import CalendarComponent from "../../Calendar";
import DiaryCard from "../../Diary/DiaryCard";
import * as S from "./Quick.styles";
import { Container } from "../../../styles/commonStyles";

const Quick = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <S.QuickContainer>
        {/* Lock Section */}
        <S.Section>
          <S.Card isTransparent={true}>
            <S.Lock src={LockIcon} />
          </S.Card>
          <S.Title>다른 사람 다이어리 구경하러 가기 →</S.Title>
        </S.Section>

        {/* Diary Section */}
        <S.Section
          onClick={() =>
            navigate(`/diary/create/${new Date().toISOString().split("T")[0]}`)
          }
        >
          <S.Card>{/* <CalendarComponent /> */}</S.Card>
          <S.Title>다이어리 쓰러 가기 →</S.Title>
        </S.Section>

        {/* Calendar Section */}
        <S.Section
          onClick={() =>
            navigate(`/diary/${new Date().toISOString().split("T")[0]}`)
          }
        >
          <DiaryCard
            title="내 생일, 나를 위한 하루"
            date="2024.08.02"
            content="오늘은 내 생일이다. 아침에 눈을 뜨자마자 왠지 모르게 설레는 기분이 들었다. 평소와 다르지 않은 하루처럼 보였지만, 오늘만큼은 나를 위한 날이라는 생각에 마음이 따뜻해졌다."
          />
          <S.Title>내 다이어리 보러 가기 →</S.Title>
        </S.Section>
      </S.QuickContainer>
    </Container>
  );
};

export default Quick;
