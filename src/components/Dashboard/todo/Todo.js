import React from "react";

const Todo = (props) => (
  <div className="item">
    <div className="right floated content">
      <button className="ui negative button" onClick={props.onDelete}>
        Delete
      </button>
    </div>
    <div className="content" onClick={props.toggleComplete}>
      <div className="header">Task - {props.todo.title}</div>
      <div
        className="description"
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
        }}
      >
        {props.todo.description}
      </div>
    </div>
  </div>
);

export default Todo;
