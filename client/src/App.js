import { Fragment } from 'react'

import './App.css'
import InputToDo from './components/InputToDo'

export default function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
      </div>
    </Fragment>
  )
}
