const Task = ({description, onCompleted, onDeleted}) => {
    return(
      <div >
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={onCompleted}>
            <span className="description">{description}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
                  onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task" />
      </div>   
    )
}

export default Task