import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps){

  const [type, setType] = useState('deposit');

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

          <RadioBox 
            type='button' 
            onClick={()=> { setType('deposit'); }} 
            isActive = {type === 'deposit'}
            activeColor = "green"
          >
            <img src={incomeImg} alt="img deposit" />
            <span>Income</span>
          </RadioBox>

          <RadioBox 
            type='button' 
            onClick={()=> { setType('withdraw'); }}
            isActive = {type === 'withdraw'}
            activeColor = "red"
          >

            <img src={outcomeImg} alt="img withdraw" />
            <span>Outcome</span>
          </RadioBox>

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