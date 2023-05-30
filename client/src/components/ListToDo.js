import { Fragment } from 'react'

export default function ListToDos() {
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
        <tbody></tbody>
      </table>
    </Fragment>
  )
}
