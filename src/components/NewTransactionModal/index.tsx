import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = (props: NewTransactionModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("deposit");
  const [selectedCategory, setSelectedCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    console.log("categoria selecionada: " + selectedCategory);

    props.onRequestClose();
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          min={0}
          step="any"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <select
          name="select"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          placeholder="Escolha a Categoria"
        >
          <option value="valor1">Valor1</option>
          <option value="valor2">Valor2</option>
          <option value="valor3">Valor3</option>
        </select>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
