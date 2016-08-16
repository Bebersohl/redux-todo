import React from 'react'

const Todo = ({ text, completed, onTodoClick, onRemoveClick }) => (
<div>
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={onTodoClick}>
    {text}
  </li>
  <button onClick={onRemoveClick}>X</button>
</div>
)

export default Todo
