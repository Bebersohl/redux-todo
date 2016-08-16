import * as actions from '../src/actions'
import {expect} from 'chai'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text
    }
    expect(actions.addTodo(text)).to.eql(expectedAction)
  })
  it('should create an action to remove a todo', () => {
    const id = 3
    const expectedAction = {
      type: 'REMOVE_TODO',
      id
    }
    expect(actions.removeTodo(id)).to.eql(expectedAction)
  })
  it('should create an action to toggle a todo', () => {
    const index = 3
    const expectedAction = {
      type: 'TOGGLE_TODO',
      index
    }
    expect(actions.toggleTodo(index)).to.eql(expectedAction)
  })
  it('should create an action to filter the todos', () => {
    const filter = 'SHOW_COMPLETED'
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
    expect(actions.setVisibilityFilter(filter)).to.eql(expectedAction)
  })
})
