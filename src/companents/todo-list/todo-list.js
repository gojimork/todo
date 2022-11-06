import ToDoListItem from "../todo-list-item"
import './todo-list.css'

const TodoList = ({data}) => {
  const items = data.map(item => {
    const {id, ...itemProps} = item
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem {...itemProps} />
      </li>
    )
  })
    return (
    <ul className="list-group todo-list">
      {items}
    </ul>
    )
  }

export default TodoList