import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import useAuth from "../../components/auth/utils/authFunctions";
import { db } from "../../components/auth/utils/firebaseConfig";
import DiaryForm from "../../components/Diary/DiaryForm";

const CreateDiaryPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { date } = useParams<{ date: string }>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 다이어리 저장 함수
  const saveDiary = async () => {
    if (!user || !date) {
      console.error("User or date is missing!");
      return;
    }

    try {
      const diaryRef = doc(db, "diaries", `${user.uid}_${date}`);
      await setDoc(diaryRef, {
        userId: user.uid,
        title,
        content,
        date,
        createdAt: new Date(),
      });

      alert("다이어리가 저장되었습니다.");
      navigate(`/diary/${date}`);
    } catch (error) {
      console.error("Error saving diary:", error);
    }
  };

  return (
    <DiaryForm
      header="당신의 추억을 기록해보세요!"
      title={title}
      content={content}
      onTitleChange={(e) => setTitle(e.target.value)}
      onContentChange={(e) => setContent(e.target.value)}
      onSubmit={saveDiary}
    />
  );
};

export default CreateDiaryPage;
