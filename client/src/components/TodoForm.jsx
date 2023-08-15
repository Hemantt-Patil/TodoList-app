import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions/index.js';
import { useDispatch } from 'react-redux';
const TodoForm = () => {
    const[text,setText]=useState("");
    const dispatch=useDispatch();
    const onFormSubmit=(e)=>{ 
      e.preventDefault();

      dispatch(addNewTodo(text));
      setText('');
    }
    
    const oninputChange=(e)=>{
        setText(e.target.value);
    }
  return (
    <form className='form' onSubmit={onFormSubmit}>
        <input
        placeholder='Enter New Todo'
        className='input'
        onChange={oninputChange}
        value={text}
        />
    </form>
  )
  }

export default TodoForm;