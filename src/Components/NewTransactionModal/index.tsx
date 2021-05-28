import {FormEvent, useState, useContext } from "react"
import Modal from "react-modal"
import { api } from "../../Services/api"
import { TransactionsContext } from "../../TransactionsContexts"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import {Container, TransactionTypeContainer, RadioBox} from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  
  function handleCreateNewTransaction(event : FormEvent) {
    event.preventDefault() //previne o carregamento da página
   
    createTransaction({
      title, 
      amount,
      category,
      type
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName = "react-modal-overlay"
      className = "react-modal-content"
    > 
      <button 
        type="button" 
        onClick = {onRequestClose}
        className = "react-modal-close"
      >
        <img src={closeImg} alt= "close button modal"/>
      </button> 

      <Container onSubmit = {handleCreateNewTransaction}>  
        <h2>Cadastrar transação</h2>
        <input          
          placeholder = "Título"  
          value = {title}
          onChange = {event => setTitle(event.target.value)}
        />
        <input
          type= "number"
          placeholder = "Valor"
          value = {amount}
          onChange = {event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick = {() => setType("deposit")}
            isActive= {type === "deposit"}
            activeColor = {"green"}
          >
            <img src={incomeImg} alt="income" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick = {() => setType("witdrown")}
            isActive= {type === "witdrown"}
            activeColor = {"red"}
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Saída</span>

          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value = {category}
          onChange = {event => setCategory(event.target.value)}
        />

        <button 
          type = "submit"
        >
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}