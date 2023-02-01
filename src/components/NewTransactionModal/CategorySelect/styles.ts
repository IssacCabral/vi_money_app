import styled from "styled-components";

export const Container = styled.select`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid var(--background);
  background: #333333;

  font-weight: 500;
  font-size: 1rem;

  color: var(--text-title);

  option {
    background-color: var(--background);
  }
`;
