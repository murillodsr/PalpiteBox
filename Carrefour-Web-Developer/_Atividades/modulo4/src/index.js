import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"


const App = () => {
  return { 
    < div className = 'App' > Hello World    </ >
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)