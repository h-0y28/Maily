import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import useAuth from "../../auth/utils/authFunctions";
import { db } from "../../auth/utils/firebaseConfig";
import Loading from "../../Loading";
import * as S from "./DiaryComponent.styles";

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

export interface Diary {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
  mood: string;
  weather: string;
  pick: boolean;
}

export default function DiaryComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const date = location.pathname.split("/diary/")[1];

  const [diary, setDiary] = useState<Diary | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDiary = async () => {
    if (!user || !date) {
      console.error("User or diaryDate is missing!");
      return;
    }

    const diaryID = `${user.uid}_${date}`.replace(/\//g, "-");

    try {
      const diaryRef = doc(db, "diaries", diaryID);
      const diarySnap = await getDoc(diaryRef);

      if (diarySnap.exists()) {
        const diaryData = diarySnap.data();
        setDiary({
          id: diarySnap.id,
          title: diaryData.title,
          date: diaryData.date,
          content: diaryData.content,
          imageUrl: diaryData.imageUrl,
          mood: diaryData.mood,
          weather: diaryData.weather,
          pick: diaryData.pick,
        });
      } else {
        setDiary(null);
      }
    } catch (error) {
      console.error("Error fetching diary:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDiary();
    }
  }, [user, date]);

  const deleteDiary = async () => {
    if (!diary) return;

    try {
      const diaryRef = doc(db, "diaries", diary.id);
      await deleteDoc(diaryRef);
      setDiary(null);
      navigate(`/diary/${diary.date}`);
    } catch (error) {
      console.error("Error deleting diary:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {diary ? (
        <S.DiaryContainer>
          <S.Title>{diary.title}</S.Title>

          <S.ButtonContainer>
            {diary?.date && (
              <S.EditButton
                onClick={() => navigate(`/diary/form/${diary.date}`)}
              >
                수정
              </S.EditButton>
            )}
            <S.DeleteButton onClick={deleteDiary}>삭제</S.DeleteButton>
          </S.ButtonContainer>

          <S.SubContainer>
            <S.Date>{diary.date.split("-").join(".")}</S.Date>

            <S.IconContainer>
              <S.Icon
                src={
                  diary.mood
                    ? moodIcons.find((icon) => icon.value === diary.mood)?.src
                    : FeelingsIcon
                }
              />
              <S.Icon
                src={
                  diary.weather
                    ? weatherIcons.find((icon) => icon.value === diary.weather)
                        ?.src
                    : WeathersIcon
                }
              />
              <S.Icon src={diary.pick ? FillHeart : EmptyHeartIcon} />
            </S.IconContainer>
          </S.SubContainer>

          <S.Content>{diary.content}</S.Content>
        </S.DiaryContainer>
      ) : (
        <S.EmptyContainer>
          <S.EmptyText>다이어리가 비어있습니다.</S.EmptyText>
          <S.CreateButton onClick={() => navigate(`/diary/form/${date}`)}>
            다이어리 작성하러 가기 →
          </S.CreateButton>
        </S.EmptyContainer>
      )}
    </>
  );
}
