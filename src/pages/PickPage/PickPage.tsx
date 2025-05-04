import * as S from "./PickPage.styles";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/auth/utils/firebaseConfig";
import { getAuth } from "firebase/auth";
import Loading from "../../components/Loading";

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
  const user = getAuth().currentUser;

  useEffect(() => {
    const fetchPickDiaries = async () => {
      if (!user) {
        console.error("User is missing!");
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
    };

    fetchPickDiaries();
  }, [user]);

  if (loading) return <Loading />;

  if (pickDiaries.length === 0) {
    return <p>Pick된 다이어리가 없습니다.</p>;
  }

  return (
    <div>
      <h1>Pick한 다이어리 목록</h1>
      <ul>
        {pickDiaries.map((diary) => (
          <li key={diary.id}>
            <S.Card>
              <S.CardHeader>
                <S.CardTitle>{diary.title}</S.CardTitle>
                <S.CardDate>{diary.date}</S.CardDate>
              </S.CardHeader>
              <S.CardContent>{diary.content}</S.CardContent>
            </S.Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
