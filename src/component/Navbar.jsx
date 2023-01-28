import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <p className="navbar-brand" id="nav-main" ><span className="text-warning"  >Build</span>Con</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" id='fz' to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id='fz' to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id='fz' to="services">Services</Link>
              </li>
              <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span id='pro'> Products </span>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="products/banglow">Banglow</Link></li>
            <li><Link className="dropdown-item" to="products/flats">Flates</Link></li>
              
            <li><Link className="dropdown-item" to="products/plots">Plotes</Link></li>
          </ul>
        </li>

              <li className="nav-item">
                <Link className="nav-link" id='fz' to="team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  id='fz' to="contact">Contact</Link>
              </li>
            </ul> 
          </div>
        </div>
        </nav>  
     </div> 
    </>
  )
}

export default Navbar