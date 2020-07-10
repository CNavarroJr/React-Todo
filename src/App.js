import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './Todo.css'
// import styled from 'styled-components';


// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-width: 100%;
//   margin: 0 auto;
//   text-align: center;
//   border: solid 1px black;
//   background-color: #ACFFFF;
// ` 


const todoTasks = [
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
      todoTasks: todoTasks
    };
  }

  // This is where the addItem goes, this is used so you can add an item to the list
  addItem = itemName =>
  {
    this.setState({
      todoTasks: [
        ...this.state.todoTasks, {
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
      todoTasks: this.state.todoTasks.map(item => {
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
      todoTasks: this.state.todoTasks.filter(item => {
        return !item.completed;
      })
    });
  };


  render() {
    return (

     
      <div className="App">
        
        <div className="header">
          {/* <h2>Welcome to your Todo App!</h2> */}
          <h2>Todo List</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
          things={this.state.todoTasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />

      </div>
      
    );
  }
}

export default App;
