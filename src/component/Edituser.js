
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Textfield from './Textfield'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { edituser } from './userSlice'
// import Button from './Button'

const Edituser = () => {
  const params=useParams();
  // console.log(param.id)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const users=useSelector(state=>state.users);
    const existingUser=users.filter(user => user.id === params.id)
    const{name,email}=existingUser[0]
    const[values,setValues]=useState({
        name:name,
        email:email
    })

    const handelEdituser=()=>{
        setValues({name:'',email:''})
        dispatch( edituser({
          id:params.id,
          name:values.name,
          email:values.email
        }));
        navigate('/')
    }
  return (
    <div id='Add_user1'>
      <Textfield
      
      lable="Name"
      value={values.name}
      onChange={(e)=> setValues({...values ,name:e.target.value})}
      inputProps={{type:'text', placeholder:"name"}}      
      />
    <br></br>
      <Textfield
      lable="Email"
      value={values.email}
      onChange={(e)=> setValues({...values ,email:e.target.value})}
      inputProps={{type:'text', placeholder:"Email"}}      
      />
      <button id='edit_btn' onClick={handelEdituser}>Edit</button>
    </div>
  )
}

export default Edituser
