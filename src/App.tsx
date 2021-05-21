import React, {useState} from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./Components/NewTransactionModal";

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
      <Dashboard />
      <NewTransactionModal 
        isOpen = {isNewTransactionModalOpen} 
        onRequestClose = {handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}
