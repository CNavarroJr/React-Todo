import React from 'react';


const Todo = props => {

  // This is the other part of the toggleCompleted. This toggles the completed state of the props.item
const handleClick = e => {
  props.toggleCompleted(props.item.id);
}

  return (
    <div onClick={handleClick} className={`item${props.item.completed ? " completed" : ""}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;