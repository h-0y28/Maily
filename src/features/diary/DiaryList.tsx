import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const dummyData = [
    { id: 1, title: "오늘의 일기", content: "좋은 하루였다." },
    { id: 2, title: "내일의 목표", content: "운동하기!" },
  ];

  return (
    <ul className="space-y-4">
      {dummyData.map((diary) => (
        <DiaryItem key={diary.id} title={diary.title} content={diary.content} />
      ))}
    </ul>
  );
};

export default DiaryList;
