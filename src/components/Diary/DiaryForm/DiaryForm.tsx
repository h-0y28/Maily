import { ChangeEvent, useRef, useEffect, useState } from "react";
import * as S from "./DiaryForm.styles";
import { useNavigate } from "react-router-dom";

import BackArrow from "../../../assets/BackArrow.png";
import CreatePattern from "../../../assets/CreatePattern.png";
import EditPattern from "../../../assets/EditPattern.png";
import CloseButton from "../../../assets/closeButton.png"; // 날씨, 기분 박스 닫기 버튼

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

interface DiaryFormProps {
  header: string;
  title: string;
  content: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (weather: string, mood: string) => void;
}

const weatherIcons = [
  { src: SunnyIcon, value: "sunny" },
  { src: CloudyInTheSunIcon, value: "cloudyInTheSun" },
  { src: CloudyIcon, value: "cloudy" },
  { src: RainyIcon, value: "rainy" },
  { src: SnowyIcon, value: "snowy" },
  { src: WindyIcon, value: "windy" },
];

const moodIcons = [
  { src: GoodIcon, value: "goob" },
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

const DiaryForm = ({
  header,
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
}: DiaryFormProps) => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [weather, setWeather] = useState<string>("");
  const [mood, setMood] = useState<string>("");
  const [visibleBox, setVisibleBox] = useState<"weather" | "mood" | null>(null);

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

  return (
    <S.FormContainer>
      <S.Pattern
        src={
          header === "당신의 추억을 기록해보세요!" ? CreatePattern : EditPattern
        }
      />

      <Container>
        <S.Header>
          <S.BackArrow onClick={goBack} src={BackArrow} />
          <S.Description>{header}</S.Description>
        </S.Header>

        {/* 입력 폼 */}
        <S.FormWrapper>
          <S.TitleAndIcons>
            <S.Title
              type="text"
              value={title}
              onChange={onTitleChange}
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
            </S.IconContainer>
          </S.TitleAndIcons>
          <S.Content
            ref={contentRef}
            value={content}
            onChange={onContentChange}
            placeholder="내용을 입력해주세요."
            rows={20}
          />
        </S.FormWrapper>

        {/* 날씨 선택 상자 */}
        {visibleBox === "weather" && (
          <S.SelectionBox>
            <S.SelectionLabel src={WeathersIcon}></S.SelectionLabel>
            <S.CloseButton onClick={() => setVisibleBox(null)}>
              닫기
            </S.CloseButton>
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
            <S.SelectionLabel src={FeelingsIcon}></S.SelectionLabel>
            <S.CloseButton
              src={CloseButton}
              onClick={() => setVisibleBox(null)}
            ></S.CloseButton>
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
          <S.Button onClick={() => onSubmit(weather, mood)}>완료</S.Button>
        </S.ButtonContainer>
      </Container>
    </S.FormContainer>
  );
};

export default DiaryForm;
