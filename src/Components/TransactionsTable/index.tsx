import {useEffect, useState} from "react"
import { api } from "../../Services/api";
import { Container } from "./styles";

interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionsTable (){
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get("transactions")
      .then(response =>setTransactions(response.data.transactions))
  }, []) //será executado sempre que minha página iniciar

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return(
              <tr key = {transaction.id}>
                <td>{transaction.title}</td>
                <td className = {transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}