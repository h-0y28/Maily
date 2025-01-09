import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;
`;

export const EditButton = styled.button`
  color: ${theme.colors.primaryBlue};
  background-color: transparent;

  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${theme.colors.primaryBlue};
    transition: width 0.3s ease-in-out;
  }
`;

export const DeleteButton = styled.button`
  color: ${theme.colors.primaryRed};
  background-color: transparent;

  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${theme.colors.primaryRed};
    transition: width 0.3s ease-in-out;
  }
`;

export const Header = styled.div``;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #333;
`;

export const Date = styled.p``;

export const Content = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #555;
  white-space: pre-line;
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

export const NoDiaryText = styled.p`
  font-size: 1.2rem;
  color: red;
`;
