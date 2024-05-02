import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./details.module.css"

const Update = () => {
  let [state, setState] = useState({
    name : "",
    email : "",
    phone : "",
    password : ""
  })
  let {id} = useParams();
  let navigate = useNavigate()

  useEffect(()=>{
      axios.get("http://localhost:3004/user/"+id).then((res)=>{
        setState(res.data);
      }).catch(()=>{
        console.log("no data...");
      })
  },[id])

  let {name, email, phone, password} = state;

  let handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state,[name]:value})
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3004/user/"+id,state).then((res)=>{
      console.log(res.data);
      navigate("/data")
    }).catch(()=>{
      console.log("data not updated..")
    })
  }

  return (
    <div className={styles.updateMainContainer}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.updateContainer}>
          <h1>Update</h1>
            <input type="text" className={styles.inputBox} placeholder='Enter Name' value={name} name='name' onChange={handleChange}/><br/>
            <input type="text" className={styles.inputBox} placeholder='Enter Email' value={email} name='email' onChange={handleChange}/><br/>
            <input type="text" className={styles.inputBox} placeholder='Enter PhoneNumber' value={phone} name='phone' onChange={handleChange}/><br/>
            <input type="text" className={styles.inputBox} placeholder='Enter Password' value={password} name='password' onChange={handleChange}/><br/>
            <button className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Update