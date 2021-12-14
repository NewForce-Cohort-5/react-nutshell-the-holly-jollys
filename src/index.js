import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Nutshell } from './components/Nutshell'
import './index.css'

ReactDOM.render(
  <Router>
      <Nutshell />
  </Router>
  , document.getElementById('root'))


// import React from "react"
// import ReactDOM from "react-dom"
// import { BrowserRouter as Router } from "react-router-dom"
// import { Nutshell } from "./components/Nutshell.js"
// import "./index.css"

// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <Nutshell />
//         </Router>
//     </React.StrictMode>,
//     document.getElementById("root")
// )