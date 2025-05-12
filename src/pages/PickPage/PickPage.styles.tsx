import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Header = styled.div`
  display: flex;

  background-color: ${theme.colors.primaryBackground};
  padding: 3rem 6.25rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.primaryBrown};
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;

  margin-left: 2.5rem;
  font-size: 1rem;
`;

export const Description = styled.p`
  color: ${theme.colors.primaryBlack};
`;

export const EditButton = styled.button`
  color: ${theme.colors.primaryRed};
  background-color: transparent;
  border: none;
`;
