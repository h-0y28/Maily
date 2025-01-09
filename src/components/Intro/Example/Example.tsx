import CalendarComponent from "../../Calendar";
import DiaryComponent from "../../Diary/DiaryComponent";
import * as S from "./Example.styles";

const Example = () => {
  return (
    <S.ExampleContainer>
      <S.Pattern>
        <CalendarComponent />
      </S.Pattern>
      <S.DiaryWrapper>
        <DiaryComponent />
      </S.DiaryWrapper>
    </S.ExampleContainer>
  );
};

export default Example;
