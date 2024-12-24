import * as S from "./Explain.styles";

const Explain = () => {
  return (
    <S.ExplainContainer>
      <S.Pattern />
      <S.TextContainer>
        <S.Title>Maily는</S.Title>
        <S.Content>
          Memoir(기록)과 Daily(매일)를 결합한 이름입니다.
          <br />
          Maily를 통해 소중한 추억 여정을 기록하시길 바랍니다.
        </S.Content>
      </S.TextContainer>
    </S.ExplainContainer>
  );
};

export default Explain;
