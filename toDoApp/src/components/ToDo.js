import React, { useState } from 'react'
import "./toDo.css";


const ToDo = ({task,completed,index, deleteToDo, tachar}) =>{
  
  //const [isChecked, setIsChecked] = useState(true);

  return(
    <div className="list">
      <h3 className="task"
                style={{ textDecoration: completed ? "line-through" : "" }}> {task} </h3>
      <button className="btn-delete" onClick={()=> deleteToDo(index)} >X</button>
      <input className="check" type="checkbox"  onChange={()=>tachar(index)} />
    </div>
  )
}

export default ToDo

