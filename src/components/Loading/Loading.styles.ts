import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 0.5rem solid ${theme.colors.primaryWhite}; /* 배경 테두리 */
  border-top: 0.5rem solid ${theme.colors.primaryRed};

  border-radius: 50%;
  animation: ${spin} 1s linear infinite; /* 애니메이션 효과 */
`;

export const Text = styled.h3`
  color: ${theme.colors.primaryRed};
`;
