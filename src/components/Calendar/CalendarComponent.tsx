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
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.ArrowButton
          src={LeftArrow}
          onClick={goToPreviousMonth}
        ></S.ArrowButton>
        <S.YearMonth>{format(selectedDate, "yyyy년 MM월")}</S.YearMonth>
        <S.ArrowButton src={RightArrow} onClick={goToNextMonth}></S.ArrowButton>
      </S.CalendarHeader>

      <S.DayOfWeekWrapper>
        {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
          <S.DayOfWeek key={day} index={index}>
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
