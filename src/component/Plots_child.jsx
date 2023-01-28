import React from 'react'
import { Link } from 'react-router-dom'
function Plots_child(props) {
  return (
    <>
    
    <div className='container ms-3 '>
            <br />
            <br />
      <div className="card" style={{width: "18rem"}}>
         <img src={props.data.img}  al t="..."/>
         <div className="card-body">
         <h5 className="card-title">{props.data.title}</h5>
         <p className="card-text">{props.data.text}</p>
         <Link to='/' class="btn btn-dark">{props.data.btn}</Link>
        </div>
      
      </div>
    </div>
        </>
  )
}

export default Plots_child