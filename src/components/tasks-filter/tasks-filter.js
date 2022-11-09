const TasksFilter = ({showActiveTasks,showAllTasks,showCompletedTasks}) => {
    return (
        <ul className="filters">
            <li>
              <button 
              onClick={showAllTasks}>All</button>
            </li>
            <li>
              <button onClick={showActiveTasks}>Active</button>
            </li>
            <li>
              <button onClick={showCompletedTasks}>Completed</button>
            </li>
          </ul>
    )
}

export default TasksFilter