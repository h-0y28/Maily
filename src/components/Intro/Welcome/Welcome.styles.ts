import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const WelcomeContainer = styled.div`
  position: relative;
  margin-top: 7rem;
  margin-bottom: 7rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Pattern = styled.img`
  position: relative;
  transform: translateX(-1rem);
`;

export const ContentContainer = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Title = styled.h1`
  color: ${theme.colors.primaryBlack};
  padding-bottom: 1rem;
  font-size: 2.5rem;
`;

export const WelcomePhrase = styled.h2`
  color: ${theme.colors.primaryBlack};
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const LoginPhrase = styled.p`
  color: ${theme.colors.primaryBrown};
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1.5rem;
`;

export const HomeButton = styled.button`
  color: ${theme.colors.primaryWhite};
  background-color: ${theme.colors.primaryBrown};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;

  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryRed};
  }
`;

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
