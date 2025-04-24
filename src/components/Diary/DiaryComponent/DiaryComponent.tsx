import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import useAuth from "../../auth/utils/authFunctions";
import { db } from "../../auth/utils/firebaseConfig";
import Loading from "../../Loading";
import * as S from "./DiaryComponent.styles";

// import BackArrow from "../../../assets/BackArrow.png";

export interface Diary {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
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
      {/* <S.Header>
        <S.BackArrow src={BackArrow} />
      </S.Header> */}
      <S.Title>{diary.title}</S.Title>

      <S.ButtonContainer>
        <S.EditButton onClick={() => navigate(`/diary/create/${diary.id}`)}>
          수정
        </S.EditButton>
        |<S.DeleteButton onClick={deleteDiary}>삭제</S.DeleteButton>
      </S.ButtonContainer>

      <S.MainContetn>
        {/* 날씨 + 기분 */}
        <S.Date>{diary.date}</S.Date>
      </S.MainContetn>

      <S.Content>{diary.content}</S.Content>
    </S.Container>
  );
}
