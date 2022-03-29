import { useContext } from "react";

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){

  const transactions = useContext(TransactionsContext);

  console.log(transactions)

  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="icon of entry" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="icon of outcome" />
        </header>
        <strong> R$ 500,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="icon of total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}