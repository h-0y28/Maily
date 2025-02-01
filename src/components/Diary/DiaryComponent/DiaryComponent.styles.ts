import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  padding: 1rem;
  width: 45rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const TitleAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Date = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Content = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #555;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
