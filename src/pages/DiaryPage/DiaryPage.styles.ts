import styled from "styled-components";
import { theme } from "../../styles/theme";

export const DiaryPageContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 9rem;
`;

// Empty styels

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  padding: 8rem;
  padding-left: 7rem;
  padding-right: 7rem;

  border: 2px solid ${theme.colors.primaryBrown};
  border-radius: 2rem;

  width: 100%;
  height: fit-content;

  margin: auto;
`;

export const EmptyAlarm = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.primaryBlack};
`;

export const CreateButton = styled.button`
  font-size: 1.5rem;
  text-decoration: underline;
  color: ${theme.colors.primaryRed};
  border: none;

  background-color: transparent;
  cursor: pointer;
`;
