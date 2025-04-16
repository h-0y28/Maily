import styled from "styled-components";
import { theme } from "../../styles/theme";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 43.75rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

export const ArrowButton = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

export const YearMonth = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primaryRed};
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  width: 100%;
  background-color: ${theme.colors.primaryYellow};

  @media (max-width: ${breakpoints.mobile}) {
    gap: 2px;
  }
`;

export const DayOfWeekWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${theme.colors.primaryWhite};
  padding: 0.5rem;
  font-size: 2rem;
  width: 100%;
  border-bottom: solid 2px ${theme.colors.primaryBrown};

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
  flex-direction: column;
  align-items: end;
  text-align: end;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  aspect-ratio: 1 / 1.2;
  border: 2px solid ${theme.colors.primaryBrown};
  border-top: none;

  &:hover {
    background-color: #ffe9be;
  }

  &:nth-child(7n) {
    border-right: none;
  }

  &:nth-child(n) {
    border-left: none;
  }
`;

export const DayTitle = styled.h1`
  font-size: 1rem;
  font-weight: 600;

  color: ${theme.colors.primaryBrown};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  text-align: end;
`;

export const DayNumber = styled.p<{ isSelected: boolean; isToday: boolean }>`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  text-align: end;
  justify-content: center;
  font-size: 1.2rem;

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
