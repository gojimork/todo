import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import './index.css'

class App extends Component  {
    state = {
      todoData: [
        {className: "completed", description: "Completed task", id: 1},
        {className: "editing", description: "Editing task", id: 2},
        {className: "", description: "Active task", id: 3}
      ]
    }

    deleteTask = (id) => {
      this.setState(({todoData})=>{
        const newTodoData = [...todoData].filter(task => task.id !== id )
        return {
          todoData: newTodoData
        }

      })
    }

    completeTask = (id) => {
      this.setState( ({todoData}) => {
        const completedTask = todoData.filter(task => task.id === id)
        const completedTaskIndex = todoData.indexOf(...completedTask)
        const newTodoData = [...todoData]
        newTodoData[completedTaskIndex].className ?  newTodoData[completedTaskIndex].className = "" : newTodoData[completedTaskIndex].className = "completed"
        return {
          todoData: newTodoData
        }
      })
    }
    
    render(){
      return (
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm />
          </header>
          <section className="main">
            <TaskList todoData={this.state.todoData} onCompleted={this.completeTask} onDeleted={this.deleteTask}/>
            <Footer />
          </section>
        </section>
      )
    }
    
}
    

    
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />) 
