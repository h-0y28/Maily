import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid ${theme.colors.primaryBrown};
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

// export const DiaryMenu = styled.div`
//   position: absolute;
//   width: 12rem;
//   top: 110%;
//   left: -50%;
//   padding: 1.5rem;
//   padding-top: 1rem;
//   background-color: ${theme.colors.primaryWhite};
//   box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
//   border-radius: 1rem;
//   overflow: hidden;
//   z-index: 10;
//   font-weight: 600;
// `;

export const NavItem = styled.div`
  /* padding-bottom: 0.5rem;
  padding-top: 0.5rem; */
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid ${theme.colors.primaryBrown};

  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${theme.colors.primaryRed};
    transition: width 0.3s ease-in-out;
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
