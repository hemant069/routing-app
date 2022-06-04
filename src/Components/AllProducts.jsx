import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const AllProducts = () => {

const [Data, setData] = useState([])

useEffect(() => {
axios.get('http://localhost:8080/Products')
.then((r)=>setData(r.data))
.catch(error=>console.log(error))
}, [])

  return (
    <div>AllProducts
      <table>
          <thead>
              <th>Product</th>
              <th>Product</th>
              <th>Product</th>
          </thead>
          <tbody>
              {Data.map((p)=>(
                  <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td><Link to={`/AllProducts/${p.id}`}>More Details</Link></td>
                
                </tr>
              ))}
              
              
              
          </tbody>
      </table>
    </div>
  )
}

export default AllProducts