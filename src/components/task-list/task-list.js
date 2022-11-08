import Task from "../task"

const TaskList = ({todoData, onCompleted, onDeleted}) => {
    const tasks = todoData.map(task => {
      return(
      <li key={task.id} className={task.className}>
        <Task id= {task.id} 
              description={task.description} 
              onCompleted={()=>onCompleted(task.id)} 
              onDeleted={()=>onDeleted(task.id)} />
      </li>
      )
    })
    return(
        <ul className="todo-list">
          {tasks}
        </ul>
    )
}

export default TaskList