import { loadState, saveState } from './localStorage'
import { createStore } from 'redux'
import todoApp from './reducers'

const configureStore = () => {
  const persistedState = loadState()
  let store = createStore(todoApp, persistedState)
  let unsubscribe = store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    })
  })
  return store;
}
export default configureStore;
