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

  const saveDiary = async () => {
    if (!user || !date) return;

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
      title={title}
      content={content}
      onTitleChange={(e) => setTitle(e.target.value)}
      onContentChange={(e) => setContent(e.target.value)}
      onSubmit={saveDiary}
      buttonText="작성 완료"
    />
  );
};

export default CreateDiaryPage;
