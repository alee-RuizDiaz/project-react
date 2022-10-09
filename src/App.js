import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Productos'}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
