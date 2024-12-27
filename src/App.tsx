import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Pick from "./pages/Pick";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";
import Calendar from "./pages/CalendarPage";
import DiaryPage from "./pages/DiaryPage";
import CreateDiaryPage from "./pages/CreateDiaryPage/CreateDiaryPags";
import EditDiaryPage from "./pages/EditDiaryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 공통 레이아웃 적용 페이지 */}
        <Route path="/" element={<Layout />}>
          {/* 메인 페이지 */}
          <Route index element={<Intro />} />
          <Route path="/home" element={<Home />} />

          {/* 다이어리 관련 페이지 */}
          <Route path="calendar" element={<Calendar />} />
          <Route path="/diary/:date" element={<DiaryPage />} />
          <Route path="/diary/create/:date" element={<CreateDiaryPage />} />
          <Route path="/diary/edit/:id" element={<EditDiaryPage />} />

          {/* 기타 페이지 */}
          <Route path="pick" element={<Pick />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* 404 페이지 (공통 레이아웃 제외) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
