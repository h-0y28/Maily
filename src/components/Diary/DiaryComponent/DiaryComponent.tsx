import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import useAuth from "../../auth/utils/authFunctions";
import { db } from "../../auth/utils/firebaseConfig";
import Loading from "../../Loading";
import * as S from "./DiaryComponent.styles";

export interface Diary {
  id: string;
  title: string;
  date: string;
  content: string;
}

export default function DiaryComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const date = location.pathname.split("/diary/")[1] || "example";

  const [diary, setDiary] = useState<Diary | null>(null);
  const [loading, setLoading] = useState(true);

  const exampleDiary: Diary = {
    id: "example",
    date: "2024.08.02",
    title: "내 생일, 나를 위한 하루",
    content: `
오늘은 내 생일이다. 아침에 눈을 뜨자마자 왠지 모르게 설레는 기분이 들었다. 평소와 다르지 않은 하루처럼 보였지만, 오늘만큼은 나를 위한 날이라는 생각에 마음이 따뜻해졌다.

[하루 시작]
아침에 가족들이 준비한 작은 이벤트가 있었다. 엄마가 내게 좋아하는 음식으로 아침을 차려주셨다. 작은 일이지만 마음이 꽉 차는 기분이었다.

[축하 메시지와 선물]
오늘 하루 종일 친구들에게서 축하 메시지를 받았다. 평소에 연락이 뜸했던 친구까지 메시지를 보내줘서 정말 고마웠다. OO가 보내준 편지는 읽고 정말 감동했다.

[특별한 순간]
오늘은 가족과 함께 맛있는 케이크를 먹으며 사진도 찍었다. 케이크를 자르는 순간, 정말 행복했다.
내가 태어난 날을 이렇게 축하받을 수 있다는 게 참 감사하게 느껴졌다.

[다짐과 목표]
올해는 더 성장하고, 나 자신을 더 사랑하는 한 해가 되었으면 좋겠다. 내년 생일에는 지금의 나보다 더 멋지고, 행복한 내가 되어 있기를 바라본다.

[마무리]
오늘 하루는 정말 완벽했다. 평범한 일상 속에서 특별한 순간을 느낄 수 있다는 게 얼마나 감사한 일인지 깨달았다. 내 곁에 있어준 모든 사람들에게 고맙다는 말을 전하고 싶다. 그리고 오늘의 나는, 정말 행복했다.
`,
  };

  const fetchDiary = async () => {
    if (!user || !date) {
      console.error("User or diaryDate is missing!");
      return;
    }

    if (date === "example") {
      setDiary(exampleDiary);
      setLoading(false);
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
    if (!diary || diary.id === "example") return;

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
      <S.ButtonContainer>
        <S.EditButton onClick={() => navigate(`/diary/edit/${diary.id}`)}>
          수정하기
        </S.EditButton>
        |<S.DeleteButton onClick={deleteDiary}>삭제하기</S.DeleteButton>
      </S.ButtonContainer>

      <S.Header>
        <S.Title>{diary.title}</S.Title>
        <S.Date>{diary.date}</S.Date>
      </S.Header>

      <S.Content>{diary.content}</S.Content>
    </S.Container>
  );
}
