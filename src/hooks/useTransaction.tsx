import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../Services/api'


interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<TransactionsProps, "id" | "createdAt" >

interface TransactionsProviderProps {
  children: ReactNode //para se ter acesso aos conteúdos do react
}

interface TransactionsContextData {
  transactions: TransactionsProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({children}:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get("transactions")
      .then(response =>setTransactions(response.data.transactions))
  }, []) //será executado sempre que minha página iniciar

  async function createTransaction(transactionInput : TransactionInput) {
    const response = await api.post("/transactions", { 
      ...transactionInput,
      createdAt: new Date()
    })
    const {transaction} = response.data

    setTransactions([
      ...transactions,
       transaction //aqui eu adiciono um novo vetor (imutabilidade) 
    ])
  }
  return (
    <TransactionsContext.Provider value = {{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext)
  
  return context
}