import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 1rem; */
  height: 100vh;
`;

export const State = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.primaryRed};

  padding-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${theme.colors.primaryBlack};

  padding-bottom: 3rem;
`;

export const Button = styled.button`
  background-color: ${theme.colors.primaryRed};

  color: ${theme.colors.primaryWhite};
  font-size: 1.5rem;

  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;
`;
