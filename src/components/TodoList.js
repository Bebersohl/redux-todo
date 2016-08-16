import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, onTodoClick, onRemoveClick }) => (
  <ul>
    { todos.map(todo =>
      <Todo
      onTodoClick={ () => onTodoClick(todo.id) }
      onRemoveClick={ () => onRemoveClick(todo.id) }
      key={ todo.id } { ...todo }/>
    )}
  </ul>
)

export default TodoList
