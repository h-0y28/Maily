import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ExampleContainer = styled.div`
  display: flex;
  color: ${theme.colors.primaryBlack};
  height: fit-content;
`;

export const Pattern = styled.div`
  background-color: ${theme.colors.primaryYellow};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DiaryWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;

  & > div {
    padding: 2.5rem 2.7rem 0 3.5rem;
    box-sizing: border-box;
  }
`;
