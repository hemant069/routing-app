import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>Navbar
        <div className='Maindiv'>
        <Link to='/'>Home</Link>
        <Link to='/allproducts'>AllProducts</Link>
        <Link to='/productsdetails'>ProductsDetails</Link>
        </div>
    </div>
  )
}

export default Navbar