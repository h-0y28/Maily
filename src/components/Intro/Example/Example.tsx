// import CalendarComponent from "../../Calendar";
// import DiaryComponent from "../../Diary/DiaryComponent";

import ExampleDiary from "../../../assets/ExampleDiary.png";
import ExampleCalender from "../../../assets/ExampleCalender.png";

import * as S from "./Example.styles";

const Example = () => {
  return (
    <S.ExampleContainer>
      {/* <S.Pattern>
        <CalendarComponent />
      </S.Pattern>
      <S.DiaryWrapper>
        <DiaryComponent />
      </S.DiaryWrapper> */}

      <S.Pattern>
        <S.ExampleImg src={ExampleCalender}></S.ExampleImg>
      </S.Pattern>
      <S.DiaryWrapper>
        <S.ExampleImg src={ExampleDiary}></S.ExampleImg>
      </S.DiaryWrapper>
    </S.ExampleContainer>
  );
};

export default Example;
