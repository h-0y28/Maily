import * as S from "./Loading.styles";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.Spinner />
      <S.Text>로딩중...</S.Text>
    </S.LoadingWrapper>
  );
};

export default Loading;
