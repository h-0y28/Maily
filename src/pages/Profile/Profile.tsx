import * as S from "./Profile.styles";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/auth/utils/firebaseConfig";
import Loading from "../../components/Loading";

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  metadata: { lastSignInTime: string | undefined };
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser as User);
      setLoading(false);
    } else {
      setLoading(false);
      setError("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate("/");
    }
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <S.ProfileContainer>
      <S.Title>My Profile</S.Title>
      <S.ProfileDetails>
        <S.ProfileImg
          src={user?.photoURL || "/default-avatar.png"}
          alt="프로필 이미지"
        />
        <S.ProfileInfo>
          <S.Name>{user?.displayName || "이름이 없습니다."}</S.Name>
          <S.Email>이메일: {user?.email}</S.Email>
          <S.Time>
            로그인 시간:
            {user?.metadata.lastSignInTime
              ? new Date(user?.metadata.lastSignInTime).toLocaleString()
              : "정보 없음"}
          </S.Time>
        </S.ProfileInfo>
      </S.ProfileDetails>
    </S.ProfileContainer>
  );
};

export default ProfilePage;
