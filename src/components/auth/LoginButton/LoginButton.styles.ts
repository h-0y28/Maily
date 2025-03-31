import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ButtonContainer = styled.button`
  padding: 0.7rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${theme.colors.primaryBrown};

  border: none;
  border-radius: 0.5rem;

  color: ${theme.colors.primaryBackground};
  font-weight: 400;

  cursor: pointer;
`;
