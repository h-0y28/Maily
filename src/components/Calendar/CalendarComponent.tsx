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
import Loading from "../Loading";

export default function CalendarComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const highlightedDate = location.pathname.split("/diary/")[1] || "2024-08-02";
  const selectedDate = new Date(highlightedDate);

  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));
  const [diaryTitles, setDiaryTitles] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const firstDayOfMonth = startOfMonth(currentMonth);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const emptyDays = Array.from({ length: firstDayOfWeek }, (_, i) => i);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(currentMonth),
  });

  const handlePreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (day: Date) =>
    navigate(`/diary/${format(day, "yyyy-MM-dd")}`);

  const fetchDiaryTitles = async () => {
    setLoading(true);
    try {
      const titles: Record<string, string> = {};

      if (user) {
        for (const day of daysInMonth) {
          const dateString = format(day, "yyyy-MM-dd");
          const diaryID = `${user.uid}_${dateString}`.replace(/\//g, "-");

          const diaryRef = doc(db, "diaries", diaryID);
          const diarySnap = await getDoc(diaryRef);

          if (diarySnap.exists()) {
            titles[dateString] = diarySnap.data().title;
          }
        }
        setDiaryTitles(titles);
      }
    } catch (error) {
      console.error("Error fetching diary titles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiaryTitles();
  }, [currentMonth]);

  return (
    <S.CalendarContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Calendar Header */}
          <S.CalendarHeader>
            <S.ArrowButton src={LeftArrow} onClick={handlePreviousMonth} />
            <S.YearMonth>{format(currentMonth, "yyyy.MM.dd")}</S.YearMonth>
            <S.ArrowButton src={RightArrow} onClick={handleNextMonth} />
          </S.CalendarHeader>

          {/* 요일 */}
          <S.DayOfWeekWrapper>
            {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
              <S.DayOfWeek key={index} index={index}>
                {day}
              </S.DayOfWeek>
            ))}
          </S.DayOfWeekWrapper>

          <S.CalendarBody>
            {/* 빈 칸 렌더링 */}
            {emptyDays.map((_, index) => (
              <S.DayWithTitle key={`empty-${index}`} />
            ))}

            {/* 날짜 렌더링 */}
            {daysInMonth.map((day: Date) => {
              const dateString = format(day, "yyyy-MM-dd");
              const title = diaryTitles[dateString] || "";

              return (
                <S.DayWithTitle
                  key={dateString}
                  onClick={() => handleDateClick(day)}
                >
                  {title ? (
                    <S.DayTitle>{title}</S.DayTitle>
                  ) : (
                    <S.DayTitle style={{ visibility: "hidden" }}>
                      No Title
                    </S.DayTitle>
                  )}

                  <S.DayNumber
                    isSelected={
                      selectedDate
                        ? format(day, "yyyy-MM-dd") ===
                          format(selectedDate, "yyyy-MM-dd")
                        : false
                    }
                    isToday={isToday(day)}
                  >
                    {format(day, "d")}
                  </S.DayNumber>
                </S.DayWithTitle>
              );
            })}
          </S.CalendarBody>
        </>
      )}
    </S.CalendarContainer>
  );
}
