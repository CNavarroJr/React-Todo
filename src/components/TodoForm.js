import React from "react";

class TodoForm extends React.Component {

  // This is where the Constructor with state goes 
  constructor(props) {
    super(props)
    this.state = {
      item: ""
    };
  }

  // This is for the handleChanges 
  handleChanges = e => {
    this.setState({ item: e.target.value });
  };

  // This is for the onSubmit function and also so we can pass state to add the item 
  handleSubmit = e => {
    e.preventDefault();

    this.props.addItem(this.state.item);
  };

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <input placeholder="Create a New Task" type="text" name="item" value={this.state.item} onChange={this.handleChanges} />   
          
        <button>Add Task</button>   

      </form>
    );
  }
}

export default TodoForm;