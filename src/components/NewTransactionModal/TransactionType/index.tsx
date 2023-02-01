import { useState } from "react";
import { RadioBox, TransactionTypeContainer } from "./styles";

import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";

interface TransactionTypeProps {
  onSelectTransactionType: (type: string) => void;
}

const TransactionType = (props: TransactionTypeProps) => {
  const [type, setType] = useState<string>("deposit");

  function handleSelectTransactionType(type: string) {
    setType(type);
    props.onSelectTransactionType(type);
  }

  return (
    <TransactionTypeContainer>
      <RadioBox
        type="button"
        onClick={() => handleSelectTransactionType("deposit")}
        isActive={type === "deposit"}
        activeColor="green"
      >
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
      </RadioBox>

      <RadioBox
        type="button"
        onClick={() => handleSelectTransactionType("withdraw")}
        isActive={type === "withdraw"}
        activeColor="red"
      >
        <img src={outcomeImg} alt="Saída" />
        <span>Saída</span>
      </RadioBox>
    </TransactionTypeContainer>
  );
};

export default TransactionType;
