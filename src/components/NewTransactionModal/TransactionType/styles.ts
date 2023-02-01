import { darken, transparentize } from "polished";
import styled from "styled-components";

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
