import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Dashboard from "./components/Dashboard";
import Modal from "react-modal";
import NewTransactionModal from "./components/NewTransactionModal";
import { useState } from "react";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModelOpen] =
    useState<boolean>(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>

      <GlobalStyle />
    </>
  );
}

export default App;
