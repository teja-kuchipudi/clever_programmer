import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input, ListItemText } from '@material-ui/core';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk','Take rubbish out','hello teja ','hey dude'])
  const [input, setInput] = useState('')
  console.log('its wroking',input)
  const addTodo = (event) => {
  event.preventDefault();// will stop the refresh
  console.log('Im Working')
  setTodos([...todos, input]);
  setInput('');//will clear the input after hitting submit
  }
    return (
    <div className="App">
      <form>
     <h1>Hello TeJa Kuchipudi</h1>

     <FormControl>
       <InputLabel>Write a Todo...</InputLabel>
       <Input value={input} onChange={event => setInput(event.target.value)}></Input>
     </FormControl>
     <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
      Add Todo
     </Button>
     <ul>
       {todos.map(todo => (
        <Todo text ={todo}/>
       ))}
     </ul>
     </form>
    </div>
  );
}

export default App;
