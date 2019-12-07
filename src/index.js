import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/reset.scss'
import './style/style.scss'
import store from './store'
import {Provider} from 'react-redux'
import { TransitionGroup, CSSTransition } from "react-transition-group";


ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
  document.querySelector('#root')
)