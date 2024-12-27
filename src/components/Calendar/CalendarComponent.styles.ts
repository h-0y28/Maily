import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CalendarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const ArrowButton = styled.img`
  cursor: pointer;
`;

export const YearMonth = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primaryRed};
  padding-left: 4.8rem;
  padding-right: 4.8rem;
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const DayOfWeekWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  background-color: ${theme.colors.primaryWhite};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 2rem;
`;

export const DayOfWeek = styled.div<{ index: number }>`
  text-align: center;
  font-weight: bold;
  color: ${({ index }) =>
    index === 0
      ? theme.colors.primaryRed
      : index === 6
      ? theme.colors.primaryBlue
      : "black"};
`;

export const DayCell = styled.div<{ isSelected: boolean }>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#f39c12" : "transparent"};
  border-radius: 8px;
`;
