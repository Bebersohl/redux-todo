import { combineReducers } from 'redux'

export function visibilityFilter(state = 'SHOW_ALL', action){
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export function todos(state = [], action){
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed || false
        }
      ]
    case 'REMOVE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id
      })
    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if( index === action.index ){
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default combineReducers({
  visibilityFilter,
  todos
})
