import TasksFilter from "../tasks-filter"

const Footer = ({showActiveTasks, showAllTasks, showCompletedTasks, clearCompleted, activeTasksCount}) => {
    return (
        <footer className="footer">
          <span className="todo-count">{activeTasksCount} items left</span>
          <TasksFilter showActiveTasks={showActiveTasks}
          showAllTasks={showAllTasks}
          showCompletedTasks={showCompletedTasks}/>
          <button className="clear-completed"
                  onClick={clearCompleted}
          >Clear completed</button>
        </footer>
    )
}

export default Footer