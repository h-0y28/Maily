import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ExplainContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.primaryBrown};
  color: ${theme.colors.primaryWhite};
  height: 50vh;
`;

export const Pattern = styled.div`
  background-color: ${theme.colors.primaryYellow};
  border-top-right-radius: 1000px;
  width: 50%;
  height: 100%;
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 8rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 2rem;
`;

export const Content = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.8;
  display: flex;
`;

export const TextHightLight = styled.p`
  text-decoration: underline;
  display: flex;
`;
