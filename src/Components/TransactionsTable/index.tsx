import {useState, useEffect} from "react"
import { api } from "../../Services/api";
import { Container } from "./styles";


export function TransactionsTable (){

  useEffect(() => {
    api.get("transactions")
      .then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className = "deposit">R$2.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel de casa</td>
            <td className="withdrawal">-R$350</td>
            <td>Aluguel</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}