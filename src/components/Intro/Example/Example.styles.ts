import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Pattern = styled.div`
  background-color: ${theme.colors.primaryYellow};
  flex: 1;
`;

export const DiaryWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;

  /* & > div {
    padding: 2.5rem 2.7rem 0 3.5rem;
    box-sizing: border-box;
  } */
`;

export const ExampleImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 2.5rem 2.7rem 0 3.5rem;
`;

export const ExampleContainer = styled.div`
  display: flex;
  color: ${theme.colors.primaryBlack};
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
