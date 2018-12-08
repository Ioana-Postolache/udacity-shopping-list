import React from 'react';
import NewItem from './NewItem.js'
import DeleteLastItem from './DeleteLastItem.js'
import ItemList from './ItemList.js'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  };

  
 onAddItem=(newItem)=>{
   this.setState((prevState) =>({items: [...prevState.items, newItem]}));
 };

 onDeleteLastItem=(event)=>{
   this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
 };

 onNoItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <NewItem  onAddItem={this.onAddItem}/>

        <DeleteLastItem
             onDeleteLastItem={this.onDeleteLastItem}
             onNoItemsFound={this.onNoItemsFound}/>
         <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
