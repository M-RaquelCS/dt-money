import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps){
  return(
    <Modal
      isOpen = {isOpen}
      onRequestClose = {onRequestClose}
      overlayClassName = 'react-modal-overlay'
      className = 'react-modal-content'
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="botão de fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder='Title'
        />
        <input
          type="number"
          placeholder='Value'
        />

        <TransactionTypeContainer>

          <button type='button'>
            <img src={incomeImg} alt="image do símbolo de entrada de dinheiro" />
            <span>Income</span>
          </button>
          
          <button type='button'>
            <img src={outcomeImg} alt="image do símbolo de saída de dinheiro" />
            <span>Outcome</span>
          </button>

        </TransactionTypeContainer> 

        <input
          placeholder='Category'
        />
        
        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}