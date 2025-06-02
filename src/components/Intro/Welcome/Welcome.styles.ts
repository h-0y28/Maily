import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const WelcomeContainer = styled.div`
  position: relative;
  margin: 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Pattern = styled.img`
  position: relative;
  transform: translateX(-1rem);

  width: 100%;
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.primaryBlack};
  padding-bottom: 1rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const WelcomePhrase = styled.h2`
  color: ${theme.colors.primaryBlack};
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding-bottom: 1.5rem;
  }
  @media (max-width: 360px) {
    font-size: 0.8rem;
    padding-bottom: 1rem;
  }
`;

export const LoginPhrase = styled.p`
  color: ${theme.colors.primaryBrown};
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.7rem 2rem;
  background-color: ${theme.colors.primaryBrown};

  border: none;
  border-radius: 0.5rem;

  color: ${theme.colors.primaryBackground};
  font-weight: 400;
  font-size: 1rem;

  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 1.5rem;
  }
`;
