import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 0 6.25rem;
`;

// card 관련 스타일
export const Card = styled.div`
  background-color: ${theme.colors.primaryWhite};
  padding: 2rem;
  border-radius: 1.5rem;
  width: 24rem;
  height: 16rem;
  cursor: pointer;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${theme.colors.primaryBrown};
  color: ${theme.colors.primaryBlack};
`;

export const TitleAndDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CardDate = styled.p`
  font-size: 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: auto;
`;

export const CardContent = styled.p`
  color: ${theme.colors.primaryBlack};
  font-size: 1rem;
  font-weight: 600;

  line-height: 1.5;
  padding-top: 0.5rem;
`;
