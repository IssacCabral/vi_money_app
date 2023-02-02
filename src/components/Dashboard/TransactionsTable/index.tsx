import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../../services/api";
import { access_token } from "../../../../env";
import { ITransaction } from "../../../interfaces";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    const token = access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/transactions/user?page=1&limit=20", config).then((response) => {
      setTransactions(response.data.data);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type.toLowerCase()}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.Category.name}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
