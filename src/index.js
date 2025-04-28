import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import TodoHeader from './components/header/header';
import TodoList from './components/task-list/todo-list'
import Footer from './components/footer/footer'
import { render } from '@testing-library/react';
import './components/common/common.css'

const App = () =>  {
    const todoData = [
        {className: 'completed', description: 'Completed task', created: 'created 17 seconds ago'},
        {className: 'editing', description: 'Editing task', created: 'created 5 minutes ago'},
        {description: 'Active task', created: 'created 5 minutes ago'}
    ]

    return (
        <section className='todoapp'>
            <TodoHeader />
            <section className='main'>
                <TodoList todoData={todoData} />
                <Footer />
            </section>
        </section>
    )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)