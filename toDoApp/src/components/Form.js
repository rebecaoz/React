import React, {useState, useEffect} from 'react'
import "./Form.css";
import ToDo from './ToDo'

const Form = () =>{
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const data = window.localStorage.getItem('toDoItem')
    if(data!=null) setTasks(JSON.parse(data))
  },[])

  useEffect(()=>{
    const data= JSON.stringify(tasks)
    window.localStorage.setItem('toDoItem',data)
  },[tasks])

  const handleChange = e => 
  setTask({[e.target.name]: e.target.value,completed:false})
  //console.log(task);;
  
  const handleClick = e => setTasks([...tasks, task])
  //console.log(task);;

  const deleteToDo = indice =>{
    const newTasks = [...tasks]
    newTasks.splice(indice, 1)
    setTasks(newTasks)
  }

  const tachar = (indice)=>{
    const newTasks = [...tasks];
    if(newTasks[indice].completed==false){
      newTasks[indice].completed=true;
    }else{
      newTasks[indice].completed=false;
    }
    
    setTasks(newTasks);
    console.log(newTasks);
  }

  return(
    <div>
      <form onSubmit={e => e.preventDefault()} >
        <label>Agregar Tarea</label>
        <input type="text" name="task" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
      {
        tasks.map((value,index)=>(
          <ToDo task= {value.task} completed={value.completed} key={index} index={index} deleteToDo={deleteToDo} tachar={tachar}  />
        ))
      }
    </div>
    
  )
}

export default Form