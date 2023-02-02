import { Container, Content } from "./styles";
import logoImg from "../../assets/favicon.png";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  onOpenNewCategoryModal: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="" />
          <h2>Vi Money</h2>
        </div>
        <div>
          <button
            id="new_category_button"
            onClick={props.onOpenNewCategoryModal}
          >
            Nova categoria
          </button>
          <button
            id="new_transaction_button"
            onClick={props.onOpenNewTransactionModal}
          >
            Nova transação
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
