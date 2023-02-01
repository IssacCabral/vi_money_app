import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import CategorySelect from "./CategorySelect";

import { Container } from "./styles";
import TransactionType from "./TransactionType";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = (props: NewTransactionModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>("deposit");
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryName: string) {
    setSelectedCategory(categoryName);
  }

  function handleSelectTransactionType(transactionType: string) {
    setType(transactionType);
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    setTitle("");
    setAmount(0);
    setSelectedCategory("");
    setType("deposit");

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

        <TransactionType
          onSelectTransactionType={handleSelectTransactionType}
        />

        <CategorySelect onSelectCategory={handleSelectCategory} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
