import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem 9rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--text-title);
    }
  }

  #new_transaction_button {
    font-size: 1rem;
    color: #ffffff;
    background: var(--green-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  #new_category_button {
    font-size: 1rem;
    color: #ffffff;
    background: var(--shape);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    margin-right: 3rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
