import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ExplainContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.primaryBrown};
  color: ${theme.colors.primaryWhite};
  height: 50vh;
  position: relative;

  @media (max-width: 912px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 4rem 1rem;
  }
`;

export const Pattern = styled.div`
  background-color: ${theme.colors.primaryYellow};
  border-top-right-radius: 1000px;
  width: 50%;
  height: 100%;

  @media (max-width: 912px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 8rem;

  @media (max-width: 912px) {
    padding: 0;
    text-align: center;
  }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 2rem;

  @media (max-width: 912px) {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.8;

  @media (max-width: 912px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;
