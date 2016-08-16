import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import App from './components/App'
import todoApp from './reducers'
import { Provider } from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions'

let store = createStore(todoApp)
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(addTodo('todo1'))
store.dispatch(addTodo('todo2'))
store.dispatch(addTodo('todo3'))
store.dispatch(toggleTodo(1))
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
