import React from "react";
import * as S from "./DiaryCard.styles";

interface DiaryCardProps {
  title: string;
  date: string;
  content: string;
}

const DiaryCard: React.FC<DiaryCardProps> = ({ title, date, content }) => {
  return (
    <S.Card>
      <S.CardHeader>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDate>{date}</S.CardDate>
      </S.CardHeader>
      <S.CardContent>{content}</S.CardContent>
    </S.Card>
  );
};

export default DiaryCard;
