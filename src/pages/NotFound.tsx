import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primaryBackground">
      <h1 className="text-4xl font-bold text-primaryRed mb-6">
        ⚠️ 404 - 페이지를 찾을 수 없습니다!
      </h1>
      <button
        onClick={handleNavigateHome}
        className="px-4 py-2 bg-primaryBrown text-white rounded hover:bg-primaryNavy transition"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
