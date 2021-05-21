import React, {useState} from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root') // Ele passa o modal por cima da página

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Nova Transação</h2>
      </Modal>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
