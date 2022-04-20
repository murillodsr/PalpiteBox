import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import "./style.css"

function sum(a, b) {
  alert(a + b)
}

/*JSX
function primeirojsx() {
  return (
    <div className="teste">Murillo Souza - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>

  )
}*/

function App() {
  return (
    <div className='App' >
      Hello world
      <Button onClick={() => sum(10, 5)} name="Murillo" />
    </div >
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)