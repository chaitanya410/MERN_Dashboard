import React from 'react'
import {BsTrash} from 'react-icons/bs';
import {BiEditAlt} from "react-icons/bi";
import axios from "axios";
import {baseURL} from "../utils/constant"
const List = ({id,task,updateMode,setUpdateUI}) => {

  const handleDelete=() =>{
      axios.delete(`${baseURL}/delete/${id}`)
    }


  return (
    
    <li  style={{listStyle:"none"}}>
      {task}
      <div className='iconHolder'>
        <BiEditAlt className='icon' style={{cursor:"pointer" , fontSize:"30px"}} />
        <BsTrash className='icon' style={{cursor:"pointer", fontSize:"30px" , marginLeft:"30px"}} onClick={handleDelete}/>  
      </div>
    </li>
  )
}

export default List
