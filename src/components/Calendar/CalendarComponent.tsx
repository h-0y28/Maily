import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isToday,
} from "date-fns";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./CalendarComponent.styles";
import LeftArrow from "../../assets/LeftArrow.png";
import RightArrow from "../../assets/RightArrow.png";

export default function CalendarComponent() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const navigate = useNavigate();
  const location = useLocation();

  const highlightedDate = location.pathname.split("/diary/")[1] || "2024-08-02";
  const selectedDate = new Date(highlightedDate);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handlePreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (day: Date) =>
    navigate(`/diary/${format(day, "yyyy-MM-dd")}`);

  return (
    <S.CalendarContainer>
      {/* Calendar Header */}
      <S.CalendarHeader>
        <S.ArrowButton src={LeftArrow} onClick={handlePreviousMonth} />
        <S.YearMonth>{format(selectedDate, "yyyy.MM.dd")}</S.YearMonth>
        <S.ArrowButton src={RightArrow} onClick={handleNextMonth} />
      </S.CalendarHeader>

      {/* Day of the Week Header */}
      <S.DayOfWeekWrapper>
        {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
          <S.DayOfWeek key={index} index={index}>
            {day}
          </S.DayOfWeek>
        ))}
      </S.DayOfWeekWrapper>

      {/* Calendar Body */}
      <S.CalendarBody>
        {daysInMonth.map((day: Date) => (
          <S.DayCell
            key={day.toString()}
            isSelected={
              selectedDate
                ? format(day, "yyyy-MM-dd") ===
                  format(selectedDate, "yyyy-MM-dd")
                : false
            }
            isToday={isToday(day)}
            onClick={() => handleDateClick(day)}
          >
            {format(day, "d")}
          </S.DayCell>
        ))}
      </S.CalendarBody>
    </S.CalendarContainer>
  );
}
