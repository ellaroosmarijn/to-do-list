import { Fragment } from 'react'

import './App.css'
import InputToDo from './components/InputToDo'
import ListToDos from './components/ListToDo'

export default function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
        <ListToDos />
      </div>
    </Fragment>
  )
}
