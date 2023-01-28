import React from 'react'
import { Outlet } from 'react-router-dom'
function Products() {
 
  return (
    <div>
     <br />
     <br />
      <div>
        <div className='prdct bg-dark'>
        <h1 >Products</h1>
        </div>
        <Outlet/>
      </div>
        
        
    </div>
  )
}

export default Products