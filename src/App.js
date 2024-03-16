import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const App = () => {
  const [data, setData]= useState([]);
  const [input, setInput]= useState([]);
  const [updatingIndex, setUpdatingIndex] = useState(null);
  const [updatingValue, setUpdatingValue] = useState('');
const handleInputChange=(e)=>{
     setInput(e.target.value);
}
const handleAddButton=()=>{
  setData([input,...data])
  setInput("")
}
const handleDelete=(key)=>{
 const newData= data.filter((value, index)=>{
  return index!==key
 })
 setData(newData)
}
const handleUpdate=(key)=>{
setUpdatingIndex(key)
}
const handleConfirmEvent=()=>{
  const newData = [...data]
  newData[updatingIndex]=updatingValue;
  setData(newData)
  setUpdatingIndex(null)
}
  return (
   <>
   <div>
    <input type='text' placeholder='Enter your toDo' value={input} onChange={handleInputChange}></input>
    <button onClick={handleAddButton}>Add ToDO</button>
    <div>
      {
        data.map((obj,index)=>{
          return(
            <div key={index}>
            {(updatingIndex === index)?
                  <input type='text' onChange={(e)=>{setUpdatingValue(e.target.value)}}></input>  
                  :
                  <span>{obj}</span>
            }
              
            {
              (updatingIndex === index)?
              null
              :
              <button onClick={()=>handleDelete(index)}>Delete</button>
            }
            {
              (updatingIndex === index)?
              <button onClick={handleConfirmEvent}>Confirm</button>
              :
              <button onClick={()=>handleUpdate(index)}>Update</button>
            }
              
            </div>
          )
        })
      }
    </div>
   </div>
   </>
  )
}

export default App