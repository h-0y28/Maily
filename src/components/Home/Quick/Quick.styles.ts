import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const QuickContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  padding-top: 7rem;
`;

export const Section = styled.div`
  flex: 1;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div<{ isTransparent?: boolean }>`
  width: 32rem;
  height: 22rem;

  /* 배경색: 조건에 따라 변경 */
  background-color: ${({ isTransparent }) =>
    isTransparent ? "rgba(0, 0, 0, 0.25)" : theme.colors.primaryWhite};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Lock = styled.img`
  position: absolute;
  width: 10rem;
  height: 10rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryBrown};
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
`;
