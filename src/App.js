import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';

function App() {

  const addCart = () => {
    console.log("Se agrego al carrito")
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Productos'}/>
      <Counter onAdd={addCart} stock={5} text={'Celular'}/>
    </div>
  );
}

export default App;
