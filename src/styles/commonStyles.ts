import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 15rem;
  padding-right: 15rem;
  padding-bottom: 9rem;

  @media (max-width: 1440px) {
    padding-left: 12rem;
    padding-right: 12rem;
    padding-bottom: 8rem;
  }

  @media (max-width: 1280px) {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 7.5rem;
  }

  @media (max-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 7rem;
  }

  @media (max-width: 912px) {
    padding-left: 6rem;
    padding-right: 6rem;
    padding-bottom: 6.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 5rem;
  }

  @media (max-width: 600px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 3rem;
  }

  @media (max-width: 360px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
  }
`;
