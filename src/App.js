import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList.js';
import NewItem from './components/NewItem.js';
import generateID from 'unique-id-generator';

var items = [
  {
    id: "we87rnyw47r4",
    description: "Look for passport",
    completed: true
  },
  {
    id: "c45t24tv3t4gv4",
    description: "Pack cloths",
    completed: false
  },
  {
    id: "3tv545g34tgv",
    description: "Prepare suitcase",
    completed: false
  },
  {
    id: "v6h5b45yv5h",
    description: "Meet with friends at the airport",
    completed: false
  },
  {
    id: "bv346vh5yh",
    description: "Get plane tickets",
    completed: false
  }
]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoItems: items
    };
    this.onCheckHandler = this.onCheckHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onCheckHandler(event, toDoItem) {
    toDoItem.completed = !toDoItem.completed;
    var index = this.state.toDoItems.findIndex(item => 
      item.id === toDoItem.id
    )
    var newItems = this.state.toDoItems;
    newItems[index] = toDoItem;
    this.setState({
      items: newItems
    });
  }

  onSubmitHandler(event){
    var newItem = {
      id: generateID({prefix:"item-"}),
      description: event.target.value,
      completed: false
    }
    var newItems = this.state.toDoItems.concat([newItem]);
    this.setState({
      toDoItems: newItems
    });
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewItem placeholder="What needs to be done?" onSubmitHandler={this.onSubmitHandler} />
        </header>
        <ItemList list={this.state.toDoItems} onCheckHandler={this.onCheckHandler}/>
      </section>
    );
  }
}

export default App;
