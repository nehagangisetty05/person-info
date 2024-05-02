import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./details.module.css"

const View = () => {
  let [state, setState] = useState(null)
  let {id} = useParams()

  useEffect(()=>{
    axios.get("http://localhost:3004/user/"+id).then((res)=>{
      setState(res.data)
    }).catch(()=>{
      console.log("not fetched...");
    })
  },[id])
  return (
    <div className={styles.viewMainContainer}>

      <div >
        {state == null ? "nothing" : (<div key={state.id} className={styles.viewContainer}>
            <h4><span>Name : </span>{state.name}</h4>
            <h4><span>Email :</span> {state.email}</h4>
            <h4><span>Phone Number : </span> {state.phone}</h4>
            <h4><span>Password : </span>{state.password}</h4>
            <Link to="/data" className={styles.btn}>Back</Link>
            <Link to={`/update/${state.id}`} className={styles.btn}>Edit</Link>
        </div>)}
      </div>
        
    </div>
  )
}

export default View