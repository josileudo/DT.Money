import React, {useState} from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContexts";

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
    <TransactionsContext.Provider value = {[]} >
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen = {isNewTransactionModalOpen} 
        onRequestClose = {handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
