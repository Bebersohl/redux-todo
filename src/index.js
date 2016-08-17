import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore();
render(
  <Root store={store}/>,
  document.getElementById('root')
)
