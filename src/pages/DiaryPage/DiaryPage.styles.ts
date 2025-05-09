import styled from "styled-components";
import { theme } from "../../styles/theme";

export const DiaryPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  padding-top: 6rem;
`;

// Empty styels
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  padding: 8rem 0;

  background-color: ${theme.colors.primaryWhite};
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
