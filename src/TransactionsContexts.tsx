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

interface TransactionsProviderProps {
  children: ReactNode //para se ter acesso aos conteúdos do react
}

export const TransactionsContext = createContext<TransactionsProps[]>([])

export function TransactionsProvider({children}:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get("transactions")
      .then(response =>setTransactions(response.data.transactions))
  }, []) //será executado sempre que minha página iniciar

  return (
    <TransactionsContext.Provider value = {transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
