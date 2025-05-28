import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Intro from "./pages/Intro";
import PickPage from "./pages/PickPage";
import Layout from "./layout/Layout";
import Calendar from "./pages/CalendarPage";
import DiaryPage from "./pages/DiaryPage";
import CreateDiaryPage from "./pages/CreateDiaryPage/CreateDiaryPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* 공통 레이아웃 적용 페이지 */}
          <Route path="/" element={<Layout />}>
            {/* 메인 페이지 */}
            <Route index element={<Intro />} />

            {/* 다이어리 관련 페이지 */}
            <Route path="calendar" element={<Calendar />} />
            <Route path="/diary/:date" element={<DiaryPage />} />
            <Route path="/diary/form/:date" element={<CreateDiaryPage />} />
            {/* <Route path="/diary/edit/:date" element={<EditDiaryPage />} /> */}

            {/* 기타 페이지 */}
            <Route path="pick" element={<PickPage />} />
          </Route>

          {/* 404 페이지 (공통 레이아웃 제외) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
