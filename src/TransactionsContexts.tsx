import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './Services/api'


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
  createTransaction: (transaction: TransactionInput) => void
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

  function createTransaction(transactions : TransactionInput) {
    api.post("/transactions",transactions)
  }
  return (
    <TransactionsContext.Provider value = {{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}
