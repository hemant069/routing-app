import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Productsdetails = () => {
    const [data, setdata] = useState([])
    const {id}=useParams()
    useEffect(() => {
      axios.get('http://localhost:8080/Products')
      .then((r)=>setdata(r.data))
      .catch(error=>console.log(error))
    
    }, [])
    
  return (
    <div>Productsdetails:-{id}
    <div>
        {data.map((p)=>(
            <div>{p.name}</div>
        ))}
    </div>
    </div>
  )
}

export default Productsdetails