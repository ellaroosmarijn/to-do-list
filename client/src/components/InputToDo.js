import { Fragment, useState } from 'react'

export default function InputToDo() {
  const [description, setDescription] = useState('')

  async function onSubmitForm(e) {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      window.location = '/'
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Stack - To Do</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}
