import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){

  useEffect(()=>{
    api.get('transactions')
    .then(response => console.log(response.data))
  },[])

  return(
    <Container>
      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Hambúrguer</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}