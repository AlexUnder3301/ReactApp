import React from "react";
import Task from '../task/task.js'
import './todo-list.css'

const TodoList = ({todoData}) => {
    
    const tasks = todoData.map((item) => {
        if (item.className === 'editing') {
            return (
                <li className={item.className} key={item.id}>
                    <Task todoData={item}/>
                    <input type="text" className="edit" defaultValue="Editing task"></input>
                </li>
            )
        }
        return (
            <li className={item.className} key={item.id}>
                <Task todoData={item}/>
            </li>
        )
    })

    return (
        <ul className="todo-list">
            {tasks}
        </ul>
    )
}

export default TodoList