import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
      <Header
        onOpenNewTransactionModal = {handleOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal 
        isOpen = {isNewTransactionOpen}
        onRequestClose = {handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
