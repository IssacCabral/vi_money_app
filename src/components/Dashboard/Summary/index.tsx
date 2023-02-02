import { Container } from "./styles";

import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import totalImg from "../../../assets/total.svg";
import { useEffect, useState } from "react";
import { ITransaction } from "../../../interfaces";
import { access_token } from "../../../../env";
import { api } from "../../../services/api";

const Summary = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const summary = transactions.reduce(
    (accumulated, transaction) => {
      if (transaction.type === "DEPOSIT") {
        accumulated.deposits += transaction.amount;
        accumulated.total += transaction.amount;
      } else {
        accumulated.withdraws += transaction.amount;
        accumulated.total -= transaction.amount;
      }
      return accumulated;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  useEffect(() => {
    const token = access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/transactions/user?page=1&limit=20", config).then((response) => {
      setTransactions(response.data.data);
    });
  }, [transactions]);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div className="output-background">
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};

export default Summary;
