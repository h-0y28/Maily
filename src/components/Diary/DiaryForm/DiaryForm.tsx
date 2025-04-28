import { useEffect, useRef, useState } from "react";
import * as S from "./DiaryForm.styles";
import { useNavigate, useParams } from "react-router-dom";

import BackArrow from "../../../assets/BackArrow.png";
import CloseButton from "../../../assets/closeButton.png";
import FillHeart from "../../../assets/FillHeartIcon.png";
import EmptyHeartIcon from "../../../assets/EmptyHeartIcon.png";

// 날씨 아이콘
import WeathersIcon from "../../../assets/Weathers.png";
import SunnyIcon from "../../../assets/SunnyIcon.png";
import CloudyInTheSunIcon from "../../../assets/CloudyInTheSunIcon.png";
import CloudyIcon from "../../../assets/CloudyIcon.png";
import RainyIcon from "../../../assets/RainyIcon.png";
import WindyIcon from "../../../assets/WindyIcon.png";
import SnowyIcon from "../../../assets/SnowyIcon.png";

// 기분 아이콘
import FeelingsIcon from "../../../assets/Feelings.png";
import GoodIcon from "../../../assets/GoodIcon.png";
import HappyIcon from "../../../assets/HappyIcon.png";
import NiceIcon from "../../../assets/NiceIcon.png";
import LoveIcon from "../../../assets/LoveIcon.png";
import SadIcon from "../../../assets/SadIcon.png";
import BadIcon from "../../../assets/BadIcon.png";
import AngryIcon from "../../../assets/AngryIcon.png";
import SickIcon from "../../../assets/SickIcon.png";
import SleepingIcon from "../../../assets/SleepingIcon.png";
import MoneyIcon from "../../../assets/MoneyIcon.png";
import HotIcon from "../../../assets/HotIcon.png";

import { Container } from "../../../styles/commonStyles";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import useAuth from "../../auth/utils/authFunctions";
import { db } from "../../auth/utils/firebaseConfig";
import Loading from "../../Loading";

const weatherIcons = [
  { src: SunnyIcon, value: "sunny" },
  { src: CloudyInTheSunIcon, value: "cloudyInTheSun" },
  { src: CloudyIcon, value: "cloudy" },
  { src: RainyIcon, value: "rainy" },
  { src: SnowyIcon, value: "snowy" },
  { src: WindyIcon, value: "windy" },
];

const moodIcons = [
  { src: GoodIcon, value: "good" },
  { src: HappyIcon, value: "happy" },
  { src: NiceIcon, value: "nice" },
  { src: SadIcon, value: "sad" },
  { src: BadIcon, value: "bad" },
  { src: AngryIcon, value: "angry" },
  { src: SickIcon, value: "sick" },
  { src: LoveIcon, value: "love" },
  { src: SleepingIcon, value: "sleeping" },
  { src: MoneyIcon, value: "money" },
  { src: HotIcon, value: "hot" },
];

const DiaryForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { date } = useParams<{ date: string }>();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [weather, setWeather] = useState<string>("");
  const [mood, setMood] = useState<string>("");
  const [pick, setPick] = useState(false);
  const [visibleBox, setVisibleBox] = useState<"weather" | "mood" | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement>(null);

  const fetchDiary = async () => {
    if (!user || !date) return;

    const diaryRef = doc(db, "diaries", `${user.uid}_${date}`);
    const diarySnap = await getDoc(diaryRef);

    if (diarySnap.exists()) {
      const diaryData = diarySnap.data();
      setTitle(diaryData.title);
      setContent(diaryData.content);
      setWeather(diaryData.weather);
      setMood(diaryData.mood);
      setPick(diaryData.pick || false);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDiary();
  }, [date, user]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  const goBack = () => navigate(-1);

  const toggleBox = (boxType: "weather" | "mood") => {
    setVisibleBox((prev) => (prev === boxType ? null : boxType));
  };

  const handleSelect = (type: "weather" | "mood", value: string) => {
    if (type === "weather") setWeather(value);
    else setMood(value);
    setVisibleBox(null);
  };

  const handleSubmit = async () => {
    if (!user || !date) return;

    const diaryRef = doc(db, "diaries", `${user.uid}_${date}`);

    const diaryData = {
      title,
      content,
      weather,
      mood,
      pick,
      userId: user.uid,
      date,
    };

    if (isEditing) {
      await updateDoc(diaryRef, diaryData);
    } else {
      await setDoc(diaryRef, diaryData);
    }

    navigate(`/diary/${date}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <S.FormContainer>
      <Container>
        <S.Header>
          <S.BackArrow onClick={goBack} src={BackArrow} />
          <S.Description>
            {isEditing ? "다이어리 수정" : "당신의 추억을 기록해보세요!"}
          </S.Description>
        </S.Header>

        {/* 입력 폼 */}
        <S.FormWrapper>
          <S.TitleAndIcons>
            <S.Title
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요."
            />

            {/* 날씨 & 기분 아이콘 */}
            <S.IconContainer>
              <S.ExplainContainer>
                <S.Question>오늘의 기분과 날씨는 어떠셨나요?</S.Question>
                <S.Invitation>
                  이모티콘을 클릭해 현재를 표현해보세요!
                </S.Invitation>
              </S.ExplainContainer>
              <S.Icon
                onClick={() => toggleBox("mood")}
                src={
                  mood
                    ? moodIcons.find((icon) => icon.value === mood)?.src
                    : FeelingsIcon
                }
              />
              <S.Icon
                onClick={() => toggleBox("weather")}
                src={
                  weather
                    ? weatherIcons.find((icon) => icon.value === weather)?.src
                    : WeathersIcon
                }
                alt="날씨 아이콘"
              />
              <S.Icon
                src={pick ? FillHeart : EmptyHeartIcon}
                onClick={() => setPick((prev) => !prev)}
              />
            </S.IconContainer>
          </S.TitleAndIcons>

          <S.Content
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요."
            rows={20}
          />
        </S.FormWrapper>

        {/* 날씨 선택 상자 */}
        {visibleBox === "weather" && (
          <S.SelectionBox>
            <S.SelectionLabel src={WeathersIcon} />
            <S.CloseButton
              onClick={() => setVisibleBox(null)}
              src={CloseButton}
            />
            <S.IconGrid>
              {weatherIcons.map((icon) => (
                <S.IconItem
                  key={icon.value}
                  selected={weather === icon.value}
                  onClick={() => handleSelect("weather", icon.value)}
                >
                  <img src={icon.src} alt={icon.value} />
                </S.IconItem>
              ))}
            </S.IconGrid>
          </S.SelectionBox>
        )}

        {/* 기분 선택 상자 */}
        {visibleBox === "mood" && (
          <S.SelectionBox>
            <S.SelectionLabel src={FeelingsIcon} />
            <S.CloseButton
              onClick={() => setVisibleBox(null)}
              src={CloseButton}
            />
            <S.IconGrid>
              {moodIcons.map((icon) => (
                <S.IconItem
                  key={icon.value}
                  selected={mood === icon.value}
                  onClick={() => handleSelect("mood", icon.value)}
                >
                  <img src={icon.src} alt={icon.value} />
                </S.IconItem>
              ))}
            </S.IconGrid>
          </S.SelectionBox>
        )}

        <S.ButtonContainer>
          <S.Button onClick={handleSubmit}>완료</S.Button>
        </S.ButtonContainer>
      </Container>
    </S.FormContainer>
  );
};

export default DiaryForm;
