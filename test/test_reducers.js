import { visibilityFilter, todos } from '../src/reducers'
import {expect} from 'chai'
import * as actions from '../src/actions'

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(todos(undefined, {})).to.eql([])
  })
  it('should handle ADD_TODO', () => {
    expect(todos([], actions.addTodo('test'))).to.eql(
      [{
        id: 1,
        text: 'test',
        completed: false
      }]
    )
  })
  it('should handle REMOVE_TODO', () => {
    expect(todos([{text: 'todo', id: 0, completed: false}], actions.removeTodo(0))).to.eql(
      []
    )
  })
  it('should handle TOGGLE_TODO', () => {
    expect(todos([{text: 'todo', completed: false}], actions.toggleTodo(0))).to.eql(
      [{text: 'todo', completed: true}]
    )
  })
  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(visibilityFilter('SHOW_ALL', actions.setVisibilityFilter('SHOW_COMPLETED'))).to.equal(
      'SHOW_COMPLETED'
    )
  })
})
