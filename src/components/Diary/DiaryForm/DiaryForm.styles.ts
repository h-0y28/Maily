import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Pattern = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 4.25rem;
  margin-top: 5rem;
  width: 100%;
`;

export const BackArrow = styled.img`
  cursor: pointer;
`;

export const Description = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${theme.colors.primaryBrown};
  flex-grow: 1;
  text-align: center;
`;

export const FormWrapper = styled.div`
  padding: 1.5rem 4rem;
  margin-bottom: 2.5rem;
  width: 100%;
  border-radius: 1rem;

  background-color: ${theme.colors.primaryWhite};
`;

export const Title = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  outline: none;
  border: none;
  border-bottom: 2px solid ${theme.colors.primaryBrown};
  font-size: 2rem;
  font-weight: 500;

  background-color: transparent;
  color: ${theme.colors.primaryBlack};

  &::placeholder {
    color: ${theme.colors.primaryRed};
  }
`;

export const Content = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;

  outline: none;
  border: none;
  resize: none;
  overflow: hidden;

  font-size: 1.5rem;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem 7rem;
  border-radius: 0.5rem;
  border: none;

  background-color: ${theme.colors.primaryBrown};
  color: ${theme.colors.primaryWhite};
  font-size: 2rem;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.primaryRed};
  }
`;
