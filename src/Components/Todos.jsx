import React from 'react'
import AddTodo from './AddTodo'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch(); 
  return (
   <>
   <h3>Todo List with Redux Toolkit </h3>
   <AddTodo/>

    <h5>Todo List</h5>
    <ul>
    {
        todos.map(todo => (
            <li key={todo.id}>{todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}  className='border-2 p-1 m-1 rounded-md bg-green-500' >delete</button>
            </li>
        )) 
    }
    </ul> 
   </>
  )
}
 
export default Todos