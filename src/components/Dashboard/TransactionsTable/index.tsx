import { Container } from "./styles";

const TransactionsTable = () => {
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
          <tr>
            <td>Meu Título</td>
            <td className="deposit">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(1500)}
            </td>
            <td>Minha Categoria</td>
            <td>{new Intl.DateTimeFormat("pt-BR").format(new Date())}</td>
          </tr>

          <tr>
            <td>Meu Título</td>
            <td className="withdraw">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(500)}
            </td>
            <td>Minha Categoria</td>
            <td>{new Intl.DateTimeFormat("pt-BR").format(new Date())}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
