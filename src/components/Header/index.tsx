import { Container, Content } from "./styles";
import logoImg from "../../assets/favicon.png";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="" />
          <p>
            <h2>Vi Money</h2>
          </p>
        </div>
        <button onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
