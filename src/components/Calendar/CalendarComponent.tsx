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
import * as S from "./CalendarComponent.styles";
import LeftArrow from "../../assets/LeftArrow.png";
import RightArrow from "../../assets/RightArrow.png";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const navigate = useNavigate();

  const startDate = startOfMonth(selectedDate);
  const endDate = endOfMonth(selectedDate);
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  const goToPreviousMonth = () => setSelectedDate(subMonths(selectedDate, 1));
  const goToNextMonth = () => setSelectedDate(addMonths(selectedDate, 1));

  const handleDateClick = (day: Date) => {
    const formattedDate = format(day, "yyyy-MM-dd");
    navigate(`/diary/${formattedDate}`);
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.ArrowButton src={LeftArrow} onClick={goToPreviousMonth} />
        <S.YearMonth>{format(selectedDate, "yyyy.MM.dd")}</S.YearMonth>
        <S.ArrowButton src={RightArrow} onClick={goToNextMonth} />
      </S.CalendarHeader>

      <S.DayOfWeekWrapper>
        {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
          <S.DayOfWeek key={index} index={index}>
            {day}
          </S.DayOfWeek>
        ))}
      </S.DayOfWeekWrapper>

      <S.CalendarBody>
        {daysInMonth.map((day) => (
          <S.DayCell
            key={day.toString()}
            isSelected={
              format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
            }
            onClick={() => handleDateClick(day)}
          >
            {format(day, "d")}
          </S.DayCell>
        ))}
      </S.CalendarBody>
    </S.CalendarContainer>
  );
}
