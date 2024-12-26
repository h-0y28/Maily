import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flwex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const DayOfWeek = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const DayCell = styled.div<{ isSelected: boolean }>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#f39c12" : "transparent"};
  border-radius: 8px;
`;
