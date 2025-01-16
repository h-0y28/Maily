import styled from "styled-components";
import { theme } from "../../styles/theme";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const CalendarContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ArrowButton = styled.img`
  cursor: pointer;
  width: 1rem;
  height: auto;
`;

export const YearMonth = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primaryRed};
  padding: 0 2rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  background-color: ${theme.colors.primaryYellow};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }
`;

export const DayOfWeekWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${theme.colors.primaryWhite};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const DayOfWeek = styled.div<{ index: number }>`
  text-align: center;
  font-weight: 600;
  color: ${({ index }) =>
    index === 0
      ? theme.colors.primaryRed
      : index === 6
      ? theme.colors.primaryBlue
      : theme.colors.primaryBrown};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const DayWithTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 7rem;
  height: 9rem;
  border: 1px solid ${theme.colors.primaryBrown};
  border-radius: 3px;

  &:hover {
    background-color: ${theme.colors.primaryWhite};
  }
`;

export const DayTitle = styled.h1`
  font-size: 1.5rem;
  color: ${theme.colors.primaryBrown};
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DayNumber = styled.p<{
  isSelected: boolean;
  isToday: boolean;
}>`
  border-radius: 100%;
  padding: 3px;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;

  background-color: ${({ isSelected, isToday }) =>
    isToday
      ? theme.colors.primaryRed
      : isSelected
      ? theme.colors.primaryWhite
      : "transparent"};

  color: ${({ isSelected, isToday }) =>
    isToday
      ? theme.colors.primaryWhite
      : isSelected
      ? theme.colors.primaryRed
      : theme.colors.primaryBlack};
`;
