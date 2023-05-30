import { Fragment } from 'react'

export default function InputToDo() {
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern To Do</h1>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}
