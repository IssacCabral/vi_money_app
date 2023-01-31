import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--black);
    background: var(--black);

    font-weight: 400;
    font-size: 1rem;

    color: var(--text-title);

    &::placeholder {
      color: var(--text-body);
    }

    // todo input que antes tiver um input antes dele, eu quero aplicar essa estilização abaixo:
    & + input {
      margin-top: 1rem;
    }
  }

  select {
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
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #29292e;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.4, colors[props.activeColor])
      : "#29292e"};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
