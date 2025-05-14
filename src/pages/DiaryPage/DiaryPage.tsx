import * as S from "./DiaryPage.styles";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../components/auth/utils/authFunctions";
import Loading from "../../components/Loading";
import CalendarComponent from "../../components/Calendar";
import { Container } from "../../styles/commonStyles";
import DiaryComponent from "../../components/Diary/DiaryComponent";

const DiaryPage = () => {
  const { user } = useAuth();
  const { date } = useParams<{ date: string }>();

  const [loading, setLoading] = useState(true);

  const fetchDiary = async () => {
    if (!user || !date) return;
    setLoading(false);
  };

  useEffect(() => {
    if (user && date) {
      fetchDiary();
    }
  }, [user, date]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <S.DiaryPageContainer>
        <CalendarComponent />
        <DiaryComponent />
      </S.DiaryPageContainer>
    </Container>
  );
};

export default DiaryPage;
