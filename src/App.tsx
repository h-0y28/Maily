import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiaryMonth from "./pages/DiaryMonth/DiaryMonth";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Write from "./pages/Write";
import DiaryYear from "./pages/DiaryYear";
import Edit from "./pages/Edit";
import Pick from "./pages/Pick";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";

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
          <Route path="write" element={<Write />} />
          <Route path="diaryMonth" element={<DiaryMonth />} />
          <Route path="diaryYear" element={<DiaryYear />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="edit/:id" element={<Edit />} />

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
