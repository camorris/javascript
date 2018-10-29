import React from 'react' 
import ReactDOM from 'react-dom'

// const heading = React.createElement('h1', null, 'Hello WDI!')
import App from './App.jsx'
import './styles.css'

// this is going to tell the react file where we want the react code to appear
ReactDOM.render(
  <App />,
  // heading,
  document.getElementById('root')
)