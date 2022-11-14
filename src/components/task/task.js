import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

const Task = ({description, timeStamp, onCompleted, onDeleted}) => {
    return(
      <div >
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={onCompleted}>
            <span className="description">{description}</span>
            <span className="created">{formatDistanceToNow(timeStamp, { addSuffix: true })}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
                  onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task" />
      </div>   
    )
}

Task.defaultProps = {
  description: '',
  timeStamp: '',
  onCompleted: ()=>{},
  onDeleted: ()=>{}
}

Task.propTypes = {
  description: PropTypes.string,
  timeStamp: PropTypes.number,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func
}

export default Task