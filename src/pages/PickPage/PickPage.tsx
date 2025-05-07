import * as S from "./PickPage.styles";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/auth/utils/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../components/Loading";
import { Container } from "../../styles/commonStyles";

type DiaryType = {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  mood?: string;
  weather?: string;
  pick: boolean;
};

export default function Pick() {
  const [pickDiaries, setPickDiaries] = useState<DiaryType[]>([]);
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
            } as DiaryType;
          })
          .filter((diary): diary is DiaryType => diary !== null && diary.pick);

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
    <Container>
      <S.Header>
        <S.Title>PICK 다이어리</S.Title>
        <S.InfoBox>
          <S.Description>PICK 한 추억들을 한눈에 볼 수 있어요!</S.Description>
        </S.InfoBox>
      </S.Header>

      <S.CardContainer>
        {pickDiaries.map((diary) => (
          <span key={diary.id}>
            <S.Card>
              <S.CardHeader>
                <S.CardTitle>{diary.title}</S.CardTitle>
                <S.CardDate>{diary.date}</S.CardDate>
              </S.CardHeader>
              <S.CardContent>{diary.content}</S.CardContent>
            </S.Card>
          </span>
        ))}
      </S.CardContainer>
    </Container>
  );
}
