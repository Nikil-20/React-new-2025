import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const addFormHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }

    


  return (
    <>
    <form  onSubmit={addFormHandler} >
    <input type="text" placeholder='Enter Your Todo' value={input}  onChange={(e)=> setInput(e.target.value)  } />
    <button className='border-2 p-1 m-1 rounded-md bg-green-500'  >Submit</button>
    </form>
    </>
  )
}

export default AddTodo