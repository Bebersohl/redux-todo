let nextTodoId = 0;
export function addTodo(text){
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export function removeTodo(id){
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export function toggleTodo(index){
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export function setVisibilityFilter(filter){
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
