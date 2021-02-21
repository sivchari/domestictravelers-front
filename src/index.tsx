import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import SliderButton from './components/SliderButton/SliderButton'

ReactDOM.render(
  <React.StrictMode>
    <App name='hello' />
    <SliderButton color='primary' />
  </React.StrictMode>,
  document.getElementById('app')
)
