import CalendarComponent from "../../Calendar";
import DiaryCard from "../../Diary/DiaryCard";
import * as S from "./Quick.styles";

const Quick = () => {
  return (
    <S.QuickContainer>
      <S.LockSection></S.LockSection>

      <S.DiarySection>
        <DiaryCard
          title="내 생일, 나를 위한 하루"
          date="2024.08.02"
          content="오늘은 내 생일이다. 아침에 눈을 뜨자마자 왠지 모르게 설레는 기분이 들었다. 평소와 다르지 않은 하루처럼 보였지만, 오늘만큼은 나를 위한 날이라는 생각에 마음이 따뜻해졌다."
        />
      </S.DiarySection>

      <S.NamalSection>
        <CalendarComponent />
      </S.NamalSection>
    </S.QuickContainer>
  );
};

export default Quick;
