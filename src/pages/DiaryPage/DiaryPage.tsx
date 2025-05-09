import * as S from "./DiaryPage.styles";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import useAuth from "../../components/auth/utils/authFunctions";
import { db } from "../../components/auth/utils/firebaseConfig";
import Loading from "../../components/Loading";
import CalendarComponent from "../../components/Calendar";
import { Container } from "../../styles/commonStyles";
import DiaryComponent from "../../components/Diary/DiaryComponent";

const DiaryPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { date } = useParams<{ date: string }>();

  const [diary, setDiary] = useState<{
    id: string;
    title: string;
    content: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  // 다이어리 데이터를 가져오기
  const fetchDiary = async () => {
    if (!user || !date) return;

    const diaryRef = doc(db, "diaries", `${user.uid}_${date}`);
    const diarySnap = await getDoc(diaryRef);

    if (diarySnap.exists()) {
      const diaryData = diarySnap.data();
      setDiary({
        id: diarySnap.id,
        title: diaryData.title,
        content: diaryData.content,
      });
    } else {
      setDiary(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (user && date) {
      fetchDiary();
    }
  }, [user, date]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <S.DiaryPageContainer>
        <CalendarComponent />

        {diary ? (
          <DiaryComponent />
        ) : (
          <S.EmptyContainer>
            <S.EmptyAlarm>다이어리가 비어있습니다.</S.EmptyAlarm>
            <S.CreateButton onClick={() => navigate(`/diary/form/${date}`)}>
              다이어리 작성하러 가기 →
            </S.CreateButton>
          </S.EmptyContainer>
        )}
      </S.DiaryPageContainer>
    </Container>
  );
};

export default DiaryPage;
