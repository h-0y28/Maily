import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 6rem;
  border-top: 2px solid ${theme.colors.primaryRed};
  color: ${theme.colors.primaryBrown};
  background-color: ${theme.colors.primaryBackground};
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15rem;
  width: 100%;
  margin-bottom: 2.5rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h2`
  font-size: 700;
  font-weight: 500;
`;

export const TextContent = styled.p`
  margin: 0.5rem 0;
`;

export const LinkContent = styled.a`
  color: ${theme.colors.primaryBrown};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primaryRed};
  }
`;

export const Copyright = styled.p`
  font-size: 0.9rem; /* 크기 조정 */
  color: ${theme.colors.primaryBrown};
`;
