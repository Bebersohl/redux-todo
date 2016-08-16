import { toggleTodo, removeTodo } from '../actions'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) =>
      dispatch(toggleTodo(id)),
    onRemoveClick: (id) =>
      dispatch(removeTodo(id))
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
