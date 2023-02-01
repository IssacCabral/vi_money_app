import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Category {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewTransactionModal = (props: NewTransactionModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>("deposit");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NjY2ZGNjMC00NmQ3LTRmOTQtOGE5YS02MTFhMDgzNGRlZTgiLCJlbWFpbCI6Imlzc2FjQGVtYWlsLmNvbSIsImlhdCI6MTY3NTIwNDM3NywiZXhwIjoxNjc1MjkwNzc3fQ.8Da_2trJ-VLHYWEvLr7N2EOYZt7RRSYG9LFNhdZi57o";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/categories/user?page=1&limit=20", config).then((response) => {
      const categoriesData = response.data.data;
      setCategories(categoriesData);
    });
  }, []);

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
        >
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
