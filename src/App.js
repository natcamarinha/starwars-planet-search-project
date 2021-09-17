import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Header />
      <Table />
    </ContextProvider>
  );
}

export default App;
