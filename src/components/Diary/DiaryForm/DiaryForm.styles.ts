import styled from "styled-components";
import { theme } from "../../../styles/theme";

// Form 관련 스타일
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
  margin-top: 5rem;
  margin-bottom: 4.25rem;
  width: 100%;
`;

export const BackArrow = styled.img`
  cursor: pointer;
`;

export const Description = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.primaryBrown};
  flex-grow: 1;
  text-align: center;
`;

// Form 내부 요소들
export const FormWrapper = styled.div`
  padding: 1.5rem 4rem;
  margin-bottom: 2.5rem;
  width: 100%;
  border-radius: 1.25rem;
  background-color: ${theme.colors.primaryWhite};
`;

export const TitleAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
  border-bottom: 2px solid ${theme.colors.primaryBrown};
`;

export const Title = styled.input`
  outline: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: transparent;
  color: ${theme.colors.primaryBlack};

  &::placeholder {
    color: ${theme.colors.primaryRed};
  }
`;

export const Content = styled.textarea`
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  outline: none;
  border: none;
  resize: none;
  overflow: hidden;
  font-size: 1rem;
  background-color: transparent;
`;

// Button 관련 스타일
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

// Selection 관련 스타일
export const SelectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const SelectionGroup = styled.div`
  margin-bottom: 1rem;
`;

export const IconWrapper = styled.div<{ hasBorder: boolean }>`
  display: flex;
  gap: 8px;
  padding: 4px;
  border-radius: 8px;
  border: ${({ hasBorder }) => (hasBorder ? "2px solid #ccc" : "none")};
`;

export const IconBorder = styled.div<{ hasBorder: boolean }>`
  padding: 4px;
  border-radius: 6px;
  border: ${({ hasBorder }) => (hasBorder ? "2px solid #ccc" : "none")};
`;

// 설명 및 안내 스타일
export const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
`;

export const Question = styled.p`
  color: ${theme.colors.primaryBlack};
`;

export const Invitation = styled.p`
  color: ${theme.colors.primaryRed};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

// 드롭다운 및 선택 박스 스타일
export const SelectionBox = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 13rem;
  background: ${theme.colors.primaryBackground};
  padding: 16px;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.img`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  margin-left: 1.3rem;
  margin-top: 0.5rem;
`;

export const SelectionLabel = styled.img`
  margin-bottom: 12px;
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const IconItem = styled.div<{ selected: boolean }>`
  padding: 8px;
  border-radius: 8px;
  background: ${({ selected }) => (selected ? "#eee" : "transparent")};
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 200px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
`;
