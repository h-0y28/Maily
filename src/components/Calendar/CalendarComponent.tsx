import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
} from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  CalendarContainer,
  CalendarHeader,
  CalendarBody,
  DayOfWeek,
  DayCell,
} from "./CalendarComponent.styles";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const navigate = useNavigate(); // navigate 훅 추가

  // 현재 월의 시작일과 종료일 계산
  const startDate = startOfMonth(selectedDate);
  const endDate = endOfMonth(selectedDate);

  // 시작일과 종료일 사이의 날짜들 가져오기
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  // 이전 달, 다음 달로 이동하는 함수
  const goToPreviousMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };

  const goToNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };

  // 해당 날짜의 다이어리 페이지로 이동
  const handleDateClick = (day: Date) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    navigate(`/diary/${formattedDate}`);
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <button onClick={goToPreviousMonth}>{"<"}</button>
        <span>{format(selectedDate, "yyyy년 MM월")}</span>
        <button onClick={goToNextMonth}>{">"}</button>
      </CalendarHeader>
      <CalendarBody>
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <DayOfWeek key={day}>{day}</DayOfWeek>
        ))}
        {daysInMonth.map((day) => (
          <DayCell
            key={day.toString()}
            isSelected={
              format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
            }
            onClick={() => handleDateClick(day)}
          >
            {format(day, "d")}
          </DayCell>
        ))}
      </CalendarBody>
    </CalendarContainer>
  );
}
