import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import useAuth from "../../components/auth/utils/authFunctions";
import { db } from "../../components/auth/utils/firebaseConfig";

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
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">다이어리 작성</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        className="w-full p-2 mb-4 border rounded"
        rows={6}
      />
      <button
        onClick={saveDiary}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        저장
      </button>
    </div>
  );
};

export default CreateDiaryPage;
