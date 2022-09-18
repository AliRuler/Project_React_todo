import './App.css';
import React, {useState} from 'react';
import ToDo from "./components/ToDo/ToDo";
import FlexContainer from './components/FlexContainer/FlexContainer';
import todos from './db'
import Form from "./components/Form/Form"
import Inputs from './components/Inputs/Inputs';
function App() {
  // let var1= todos;
  const [state,setState] = useState(todos);
  const [mode, setMode] = useState("save");
  const [uptTodo, setuptTodo] = useState({id:Math.floor(Math.random()*1000),title:"",description:""});

  const handleSubmit = (e)=>{
    e.preventDefault();
      const formData = new FormData(e.target);
      const todo = Object.fromEntries(formData.entries());
    if(mode==="save"){
      setState([...state,todo]);
      setuptTodo({id:Math.floor(Math.random()*1000),title:"",description:""});
    }
    else{
      setState(state.map(elem => elem.id===uptTodo.id?todo:elem));
      setMode("save");
      setuptTodo({id:Math.floor(Math.random()*1000),title:"",description:""});
    }
  }
  const handleDelete = (id)=>{
    console.log(id,state.filter(elem => elem.id !== id));
    setState(state.filter(elem => elem.id !== id))
  };

  const handleUpdate = (todo)=>{
    setuptTodo(todo);
    setMode("update");
  }

  const handleUpdateInput = (e)=>{  
    setuptTodo({...uptTodo,[e.target.name] : e.target.value})
  }
  return (
    <div className="flex-row justify-center items-center">
      <Form w-4 onSubmit={handleSubmit}>
          <Inputs title={"title"} name={"title"} type={"text"} value={uptTodo.title} onChange={handleUpdateInput}/>
          <Inputs title={"description"} name={"description"} type={"text"} value={uptTodo.description} onChange={handleUpdateInput}/>
          <Inputs title={"id"} name={"id"} type={"number"} value={uptTodo.id} onChange={handleUpdateInput}/>
          <button type="submit" class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">{mode}</button>
      </Form>
      <FlexContainer flexDirection='column' gap={100}>
        {state.map(user =>(
              <ToDo 
              key={user.id}
              title={user.title} 
              description={user.description}
              Delete = {()=>handleDelete(user.id)}
              update = {()=>handleUpdate(user)}
              />
        ))}
      </FlexContainer>
  </div>
)}

export default App;
