import styled from "styled-components";
import { theme } from "../../styles/theme";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const CalendarContainer = styled.div`
  width: 100%;
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
  width: 1.5rem;
  height: 1.5rem;
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
  font-weight: bold;
  color: ${({ index }) =>
    index === 0
      ? theme.colors.primaryRed
      : index === 6
      ? theme.colors.primaryBlue
      : "black"};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const DayCell = styled.div<{ isSelected: boolean }>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#f39c12" : "transparent"};
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f39c12;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px;
  }
`;
