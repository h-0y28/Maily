import { ChangeEvent, useRef, useEffect } from "react";
import * as S from "./DiaryForm.styles";
import BackArrow from "../../../assets/BackArrow.png";
import { useNavigate } from "react-router-dom";

import CreatePattern from "../../../assets/CreatePattern.png";
import EditPattern from "../../../assets/EditPattern.png";
import { Container } from "../../../styles/commonStyles";

interface DiaryFormProps {
  title: string;
  content: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  buttonText: string;
}

const DiaryForm = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  buttonText,
}: DiaryFormProps) => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // textarea 높이 조절
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.FormContainer>
      {buttonText === "작성 완료" ? (
        <S.Pattern src={CreatePattern} />
      ) : (
        <S.Pattern src={EditPattern} />
      )}

      <Container>
        <S.Header>
          <S.BackArrow onClick={goBack} src={BackArrow} />
          <S.Description>당신의 추억을 기록해보세요!</S.Description>
        </S.Header>

        {/* 입력 폼 */}
        <S.FormWrapper>
          <S.Title
            type="text"
            value={title}
            onChange={onTitleChange}
            placeholder="제목을 입력해주세요."
          />
          <S.Content
            ref={contentRef} // useRef 연결
            value={content}
            onChange={onContentChange}
            placeholder="내용을 입력해주세요."
            rows={20} // 기본 높이 설정
          />
        </S.FormWrapper>
        <S.ButtonContainer>
          <S.Button onClick={onSubmit}>{buttonText}</S.Button>
        </S.ButtonContainer>
      </Container>
    </S.FormContainer>
  );
};

export default DiaryForm;
