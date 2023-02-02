import { FormEvent, useState } from "react";
import { access_token } from "../../../env";
import { api } from "../../services/api";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import { Container } from "./style";

interface NewCategoryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewCategoryModal = (props: NewCategoryModalProps) => {
  const [categoryName, setCategoryName] = useState<string>("");

  async function handleCreateNewCategory(event: FormEvent) {
    event.preventDefault();

    const token = access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      name: categoryName,
    };

    api.post("/categories", bodyParameters, config).then((response) => {
      console.log(response.data);
    });

    setCategoryName("");

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

      <Container onSubmit={handleCreateNewCategory}>
        <h2>Cadastrar categoria</h2>

        <input
          placeholder="Categoria"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewCategoryModal;
