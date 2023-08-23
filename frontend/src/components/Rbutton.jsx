import React from 'react'
import { baseURL } from '../utils/constant';
import axios from 'axios';
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const Rbutton = ({id,Name}) => {

    const removeTask=() =>{
        axios.delete(`${baseURL}/delete/${id}`)
        .then((res)=>{
            console.log(res);
        })
    }
  return (
    <div>
       {Name}
       <Button onclick={removeTask}><DeleteIcon/></Button>
    </div>
  )
}

export default Rbutton
