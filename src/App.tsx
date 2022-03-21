import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root');


function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionOpen(false)
  }

  return (
    <>
      <Header
        onOpenNewTransactionModal = {handleOpenNewTransactionModal}
      />
      <Dashboard />

      <Modal
        isOpen = {isNewTransactionOpen}
        onRequestClose = {handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
