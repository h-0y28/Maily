import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 15rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${theme.colors.primaryBrown};

  @media screen and (max-width: 1728px) {
    margin: 0rem 13rem;
  }
  @media screen and (max-width: 1600px) {
    margin: 0rem 11rem;
  }
  @media screen and (max-width: 1440px) {
    margin: 0rem 9rem;
  }
  @media screen and (max-width: 1200px) {
    margin: 0rem 6rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 0rem 3rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0rem 1rem;
  }
  @media screen and (max-width: 480px) {
    margin: 0rem 1rem;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

export const NavItem = styled.div`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  /* border-bottom: 1px solid ${theme.colors.primaryBrown}; */

  cursor: pointer;
  position: relative;

  &:hover {
    /* &::after {
      width: 100%;
    } */
    font-weight: 600;
  }

  &::after {
    /* content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${theme.colors.primaryRed};
    transition: width 0.3s ease-in-out; */
  }
`;

export const LogoutButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  color: ${theme.colors.primaryRed};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  color: ${theme.colors.primaryRed};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
