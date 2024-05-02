import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from "./details.module.css"

const Data = () => {
  let [state, setState] = useState([])

  // let navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3004/user").then((res)=>{
      setState(res.data.filter((data)=>data.name && data.email && data.phone && data.password));
    }).catch(()=>{
      console.log("data not fetched.......")
    });
  },[])

  let deletedata = (id) => {
    axios.delete("http://localhost:3004/user/"+id)
    setState(state.filter((ele)=>ele.id!==id))
  }

  return (
    <div className={styles.dataMainContainer}>
      <div className={styles.dataContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {state.map((data, index) => {
              return(
                <tr key={data.id}>
                  <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.password}</td>
                  <td><button onClick={()=>deletedata(data.id)} className={styles.btn}>Delete</button></td>
                  <td><Link to = {`/view/${data.id}`} className={styles.btn}>View</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
          {/* {state.map((data)=>{
              return <div key={data.id}>
                <div className={styles.personData}>
                  <p>{data.name}</p>
                  <p>{data.email}</p>
                  <p>{data.phone}</p>
                  <p>{data.password}</p>
                  <button onClick={()=>deletedata(data.id)}>Delete</button>
                  <Link to = {`/view/${data.id}`} className={styles.view}>View</Link>
                </div>
              </div>
          })} */}
        </div>
        <h2 className={styles.addmore}>Add more : <Link to="/" className={styles.addmore}>Add</Link></h2>
    </div>
  )
}

export default Data