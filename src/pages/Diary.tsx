import DiaryList from "../features/diary/DiaryList";

const Diary = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primaryBlack mb-4">Your Diary</h1>
      <DiaryList />
    </div>
  );
};

export default Diary;
