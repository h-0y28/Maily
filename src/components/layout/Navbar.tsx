import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/404") {
    return null;
  }

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 ">
        <p>홈</p>
        <p>내 일기 쓰기</p>
        <p>기록장</p>
      </div>
      <div className="flex gap-3">
        <p>내 프로필</p>
        <p>로그아웃</p>
      </div>
    </div>
  );
};

export default Navbar;
