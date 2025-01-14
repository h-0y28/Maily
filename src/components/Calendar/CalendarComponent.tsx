import { useState, useEffect } from "react";
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
import { doc, getDoc } from "firebase/firestore";
import * as S from "./CalendarComponent.styles";
import LeftArrow from "../../assets/LeftArrow.png";
import RightArrow from "../../assets/RightArrow.png";
import { db } from "../auth/utils/firebaseConfig";
import useAuth from "../auth/utils/authFunctions";

export default function CalendarComponent() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [diaryTitles, setDiaryTitles] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

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

  const fetchDiaryTitles = async () => {
    try {
      const titles: Record<string, string> = {};

      const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
      });

      if (user) {
        for (const day of daysInMonth) {
          const dateString = format(day, "yyyy-MM-dd");
          const diaryID = `${user.uid}_${dateString}`.replace(/\//g, "-");

          console.log("Checking diary ID:", diaryID);

          const diaryRef = doc(db, "diaries", diaryID);
          const diarySnap = await getDoc(diaryRef);

          if (diarySnap.exists()) {
            console.log("Diary found for:", dateString, diarySnap.data());
            titles[dateString] = diarySnap.data().title;
          } else {
            console.log("No diary found for:", dateString);
          }
        }

        console.log("Final fetched titles:", titles);
        setDiaryTitles(titles);
      } else {
        console.log("User is not logged in.");
      }
    } catch (error) {
      console.error("Error fetching diary titles:", error);
    }
  };

  useEffect(() => {
    fetchDiaryTitles();
  }, [currentMonth]);

  return (
    <S.CalendarContainer>
      {/* Calendar Header */}
      <S.CalendarHeader>
        <S.ArrowButton src={LeftArrow} onClick={handlePreviousMonth} />
        <S.YearMonth>{format(currentMonth, "yyyy.MM")}</S.YearMonth>
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
        {daysInMonth.map((day: Date) => {
          const dateString = format(day, "yyyy-MM-dd");
          const title = diaryTitles[dateString] || "";

          return (
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
              <S.DayWithTitle>
                <S.DayNumber>{format(day, "d")}</S.DayNumber>
                {title ? (
                  <S.DayTitle>{title}</S.DayTitle>
                ) : (
                  <S.DayTitle style={{ visibility: "hidden" }}>
                    No Title
                  </S.DayTitle>
                )}
              </S.DayWithTitle>
            </S.DayCell>
          );
        })}
      </S.CalendarBody>
    </S.CalendarContainer>
  );
}
