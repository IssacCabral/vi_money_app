import { Container, Content } from "./styles";
import logoImg from "../../../public/favicon.png";

const Header = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="" />
          <p>
            <h2>Vi Money</h2>
          </p>
        </div>
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
