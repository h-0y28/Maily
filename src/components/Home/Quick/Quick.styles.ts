import styled from "styled-components";

export const QuickContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const NamalSection = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const LockSection = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export const DiarySection = styled.div`
  flex: 3;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
