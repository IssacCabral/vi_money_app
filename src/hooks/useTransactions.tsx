import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";
import { access_token } from "../../env";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt" | "updatedAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsProvider = (props: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const token = access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/transactions/user?page=1&limit=50", config).then((response) => {
      console.log(response.data);
    });
  });

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });

    const createdTransaction = response.data.transaction;

    setTransactions((prevState) => [...prevState, createdTransaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
