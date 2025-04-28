import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: flex-end;
  align-items: start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
  }
`;

export const EditButton = styled.button`
  color: ${theme.colors.primaryBlue};
  background-color: transparent;

  font-size: 1rem;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      width: 100%;
    }
    font-weight: 500;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const DeleteButton = styled.button`
  color: ${theme.colors.primaryRed};
  background-color: transparent;

  font-size: 1rem;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      width: 100%;
    }
    font-weight: 500;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid ${theme.colors.primaryBrown};
`;

export const Date = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Content = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 1.5rem 0rem;
  color: #555;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem 0rem;
  }
`;
