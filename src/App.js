import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const things = [
 {
  task: "Clean Room",
  id: "125",
  completed: "false"
 },
 {
  task: "Clean Living Room",
  id: "146",
  completed: "false"
 }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // This is where the Constructor with state goes 
  constructor() {
    super();
    this.state = {
      things: things
    };
  }

  // This is where the addItem goes, this is used so you can add an item to the list
  addItem = itemName =>
  {
    this.setState({
      things: [
        ...this.state.things, {
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  // This is for toggleCompleted, this is so you can see when something is completed. Use map to add the new array from the state above when adding item
  toggleCompleted = itemId => {
    this.setState({
      things: this.state.things.map(item => {
        if(item.id === itemId) {
          return {
            ...item, 
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  // This is for the completed button so it removes the complted items. Use filter to filter out all the completed items.
  clearCompleted = () => {
    this.setState({
      things: this.state.things.filter(item => {
        return !item.completed;
      })
    });
  };


  render() {
    return (
      <div>
        <div>
          {/* <h2>Welcome to your Todo App!</h2> */}
          <h2>Todo List</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
          things={this.state.things}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
