// import { useState, useEffect } from "react";
// import { db } from "./utils/firebaseConfig";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   updateDoc,
//   deleteDoc,
//   doc,
//   getDoc,
//   setDoc,
// } from "firebase/firestore";

// interface Diary {
//   id: string;
//   title: string;
//   content: string;
//   date: string;
//   userId: string;
// }

// const useDiary = (userId: string) => {
//   const [diaries, setDiaries] = useState<Diary[]>([]);

//   // 다이어리 가져오기
//   const fetchDiaries = async () => {
//     const diaryRef = collection(db, "diaries");
//     const q = query(diaryRef, where("userId", "==", userId));
//     const querySnapshot = await getDocs(q);
//     const fetchedDiaries = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as Diary[];

//     setDiaries(fetchedDiaries);
//   };

//   // // 다이어리 저장하기
//   // const saveDiary = async (title: string, content: string, date: string) => {
//   //   try {
//   //     await addDoc(collection(db, "diaries"), {
//   //       userId: userId,
//   //       title: title,
//   //       content: content,
//   //       date: date,
//   //       createdAt: new Date(),
//   //     });
//   //     fetchDiaries(); // 저장 후 다이어리 목록 업데이트
//   //   } catch (error) {
//   //     console.error("Error saving diary:", error);
//   //   }
//   // };

//   // 날짜 기반 다이어리 저장 함수
//   const saveDiary = async (title: string, content: string, date: string) => {
//     const today = new Date();
//     const dateString = today.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식으로 날짜 추출

//     try {
//       // Firestore에서 해당 날짜에 다이어리가 이미 존재하는지 확인
//       const diaryDoc = doc(db, "diaries", dateString);
//       const docSnap = await getDoc(diaryDoc);

//       // 만약 다이어리가 존재하지 않으면 저장
//       if (!docSnap.exists()) {
//         await setDoc(diaryDoc, {
//           content: content,
//           userId: "currentUserId", // 현재 로그인된 사용자 ID (예: auth.currentUser.uid)
//           createdAt: new Date(),
//         });
//         console.log("다이어리 저장 완료");
//       } else {
//         console.log("오늘의 다이어리는 이미 작성되었습니다.");
//       }
//     } catch (error) {
//       console.error("다이어리 저장 중 오류:", error);
//     }
//   };

//   // 다이어리 수정하기
//   const updateDiary = async (id: string, title: string, content: string) => {
//     try {
//       const diaryRef = doc(db, "diaries", id);
//       await updateDoc(diaryRef, { title, content });
//       fetchDiaries(); // 수정 후 다이어리 목록 업데이트
//     } catch (error) {
//       console.error("Error updating diary:", error);
//     }
//   };

//   // 다이어리 삭제하기
//   const deleteDiary = async (id: string) => {
//     try {
//       const diaryRef = doc(db, "diaries", id);
//       await deleteDoc(diaryRef);
//       fetchDiaries(); // 삭제 후 다이어리 목록 업데이트
//     } catch (error) {
//       console.error("Error deleting diary:", error);
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchDiaries();
//     }
//   }, [userId]);

//   return { diaries, saveDiary, updateDiary, deleteDiary };
// };

// export default useDiary;
