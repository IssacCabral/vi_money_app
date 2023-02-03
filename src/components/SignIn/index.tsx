import { Container, ContainerLogin, WrapLogin } from "./style";

import logoImg from "../../assets/favicon.png";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <ContainerLogin>
        <WrapLogin>
          <form>
            <span>Bem Vindo!</span>

            <span>
              <img src={logoImg} alt="" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </form>
        </WrapLogin>
      </ContainerLogin>
    </Container>
  );
};

export default SignIn;
