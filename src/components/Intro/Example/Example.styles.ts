import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ExampleContainer = styled.div`
  display: flex;
  color: ${theme.colors.primaryBlack};
  height: 50vh;
`;

export const Pattern = styled.div`
  background-color: ${theme.colors.primaryYellow};
  width: 50%;
  height: 100%;
`;
