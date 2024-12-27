import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import useAuth from "../../components/auth/utils/authFunctions";
import { db } from "../../components/auth/utils/firebaseConfig";
import DiaryForm from "../../components/Diary/DiaryForm";

const EditDiaryPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  // 기존 다이어리 데이터를 불러오기
  const fetchDiary = async () => {
    if (!user || !id) return;

    try {
      const diaryRef = doc(db, "diaries", id);
      const diarySnap = await getDoc(diaryRef);

      if (diarySnap.exists()) {
        const diaryData = diarySnap.data();
        setTitle(diaryData.title);
        setContent(diaryData.content);
      } else {
        alert("다이어리가 존재하지 않습니다.");
        navigate("/"); // 다이어리가 없으면 메인 페이지로 이동
      }
    } catch (error) {
      console.error("Error fetching diary:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiary();
  }, [user, id]);

  // 다이어리 업데이트 함수
  const updateDiary = async () => {
    if (!user || !id) return;

    try {
      const diaryRef = doc(db, "diaries", id);
      await updateDoc(diaryRef, {
        title,
        content,
        updatedAt: new Date(),
      });

      alert("다이어리가 수정되었습니다.");
      navigate(`/diary/${id}`);
    } catch (error) {
      console.error("Error updating diary:", error);
    }
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <DiaryForm
      title={title}
      content={content}
      onTitleChange={(e) => setTitle(e.target.value)}
      onContentChange={(e) => setContent(e.target.value)}
      onSubmit={updateDiary}
      buttonText="수정 완료"
    />
  );
};

export default EditDiaryPage;
