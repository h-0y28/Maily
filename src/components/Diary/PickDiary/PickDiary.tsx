import { useState, useEffect } from "react";

import { db } from "../../auth/utils/firebaseConfig";
import Loading from "../../Loading";
import * as S from "./PickDiary.styles";

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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

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

export default function PickDiary() {
  const [pickDiaries, setPickDiaries] = useState<Diary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.error("User is missing!");
        setLoading(false);
        return;
      }

      try {
        const diariesRef = collection(db, "diaries");
        const querySnapshot = await getDocs(diariesRef);

        const picked = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();
            if (!data.userId || data.userId !== user.uid) return null;

            return {
              id: doc.id,
              title: data.title,
              date: data.date,
              content: data.content,
              imageUrl: data.imageUrl ?? "",
              mood: data.mood ?? "",
              weather: data.weather ?? "",
              pick: data.pick ?? false,
            } as Diary;
          })
          .filter((diary): diary is Diary => diary !== null && diary.pick);

        setPickDiaries(picked);
      } catch (error) {
        console.error("Error fetching pick diaries:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
  }, []);

  if (loading) return <Loading />;
  if (pickDiaries.length === 0) return <p>Pick된 다이어리가 없습니다.</p>;
  return (
    <S.CardContainer>
      {pickDiaries.map((diary) => (
        <span key={diary.id}>
          <S.Card>
            <S.CardHeader>
              <S.TitleAndDate>
                <S.CardTitle>{diary.title}</S.CardTitle>
                <S.CardDate>{diary.date}</S.CardDate>
              </S.TitleAndDate>
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
                      ? weatherIcons.find(
                          (icon) => icon.value === diary.weather
                        )?.src
                      : WeathersIcon
                  }
                />
              </S.IconContainer>
            </S.CardHeader>
            <S.CardContent>{diary.content}</S.CardContent>
          </S.Card>
        </span>
      ))}
    </S.CardContainer>
  );
}
