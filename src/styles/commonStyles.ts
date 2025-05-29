import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 15rem;
  padding-right: 15rem;
  padding-bottom: 9rem;

  @media (max-width: 1024px) {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 7rem;
  }
  @media (max-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 5rem;
  }
  @media (max-width: 480px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 3rem;
  }
`;
