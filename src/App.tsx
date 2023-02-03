import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Dashboard from "./components/Dashboard";
import Modal from "react-modal";
import NewTransactionModal from "./components/NewTransactionModal";
import { useState } from "react";
import NewCategoryModal from "./components/NewCategoryModal";
import SignIn from "./components/SignIn";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModelOpen] =
    useState<boolean>(false);
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] =
    useState<boolean>(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false);
  }

  function handleOpenNewCategoryModal() {
    setIsNewCategoryModalOpen(true);
  }

  function handleCloseNewCategoryModal() {
    setIsNewCategoryModalOpen(false);
  }

  return (
    <>
      <SignIn />

      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
        onOpenNewCategoryModal={handleOpenNewCategoryModal}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>

      <NewCategoryModal
        isOpen={isNewCategoryModalOpen}
        onRequestClose={handleCloseNewCategoryModal}
      ></NewCategoryModal>

      <GlobalStyle />
    </>
  );
}

export default App;
