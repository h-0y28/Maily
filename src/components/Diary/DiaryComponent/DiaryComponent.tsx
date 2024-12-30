import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import useAuth from "../../auth/utils/authFunctions";
import { db } from "../../auth/utils/firebaseConfig";
import Loading from "../../Loading";
import * as S from "./DiaryComponent.styles";

export interface Diary {
  id: string;
  title: string;
  content: string;
}

export default function DiaryComponent() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { date } = useParams<{ date: string }>(); // URL에서 날짜를 가져옴 => 에러 해결...

  const [diary, setDiary] = useState<Diary | null>(null);
  const [loading, setLoading] = useState(true);

  // 다이어리 데이터를 가져오기
  const fetchDiary = async () => {
    if (!user || !date) {
      console.error("User or diaryDate is missing!");
      return;
    }

    console.log("Current User ID:", user.uid);
    console.log("Target Date:", date);

    const diaryID = `${user.uid}_${date}`;
    console.log("Firestore Query ID:", diaryID);

    try {
      const diaryRef = doc(db, "diaries", diaryID);
      const diarySnap = await getDoc(diaryRef);

      if (diarySnap.exists()) {
        const diaryData = diarySnap.data();
        console.log("Diary Data:", diaryData);

        setDiary({
          id: diarySnap.id,
          title: diaryData.title,
          content: diaryData.content,
        });
      } else {
        console.log("No diary found for this user and date.");
        setDiary(null);
      }
    } catch (error) {
      console.error("Error fetching diary:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiary();
  }, [user, date]);

  // 다이어리 삭제 함수
  const deleteDiary = async () => {
    if (!diary) return;

    try {
      const diaryRef = doc(db, "diaries", diary.id);

      console.log("Deleting diary with ID:", diary.id);

      await deleteDoc(diaryRef);
      setDiary(null);
      navigate("/diary");
    } catch (error) {
      console.error("Error deleting diary:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!diary) {
    return <p>다이어리를 찾을 수 없습니다.</p>;
  }

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.EditButton onClick={() => navigate(`/diary/edit/${diary.id}`)}>
          수정하기
        </S.EditButton>
        |<S.DeleteButton onClick={deleteDiary}>삭제하기</S.DeleteButton>
      </S.ButtonContainer>

      <S.Header>
        <S.Title>{diary.title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.Header>

      <S.Content>{diary.content}</S.Content>
    </S.Container>
  );
}
