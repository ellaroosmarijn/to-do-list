import { Fragment, useEffect, useState } from 'react'

export default function ListToDos() {
  const [todos, setTodos] = useState([])

  async function deleteTodo(id) {
    try {
      const deleteToDo = await fetch(`http://localhost:4000/todos/${id}`, {
        method: 'DELETE',
      })

      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getToDos() {
    try {
      const response = await fetch('http://localhost:4000/todos')
      const jsonData = await response.json()
      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getToDos()
  }, [])

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
