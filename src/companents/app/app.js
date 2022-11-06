import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import './app.css'


const todoData = [
  {label : 'Drink bear', important : false, id : 1},
  {label : 'Make cool App', important : true, id : 2},
  {label : 'Have a lunch', important : false, id : 3},
]

const App = () => {
  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList data = {todoData}/>
    </div> 
  )
}

export default App