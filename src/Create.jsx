import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './details.module.css'

const Create = () => {
  let [state, setState] = useState({
      name : "",
      email : "",
      phone : "",
      password : ""
  })

  let navigate = useNavigate();

  let {name, email, phone, password} = state;

  let handleChange = (e) => {
    let {name, value} = e.target;
      setState({...state,[name]:value})
  }

  let handleSubmit = (e) => {
      e.preventDefault();
      console.log(state);
      if(name && email && phone && password) {
        axios.post("http://localhost:3004/user",state).then((res)=>{
          console.log(res)
          navigate("./data")
        }).catch(()=>{
          console.log("data not fetchedddd..........")
        })
      }
      else{
        console.log("please fill all the fields")
      }
  }
  return (
    <div className={styles.createMainContainer}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.createContainer}>
          <h1>Please Fill The Form</h1>
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

export default Create