import './app-header.css'

const AppHeader = ({toDo, done}) => {
    return (
        <div className='app-header d-flex'>
            <h1>To Do List</h1>
            <h2>{toDo} more todo, {done} done</h2>
        </div>
    ) 
}
export default AppHeader 