import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../component/first.jpg'
import img2 from '../component/second.jpg'
import img3 from '../component/third.jpg'

function Home() {
  return (
    <div classNameName='main'>


<div id="carouselExampleCaptions" class="carousel-slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>Your Dream House</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente facere, eligendi
                 veritatis iusto non.</p>
                 <p><a class="btn btn-warning" href="">Learn More</a></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>Always Dedicated</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente facere, eligendi
                veritatis iusto non.</p>
                <p><Link class="btn btn-warning" to="/">Learn More</Link></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>True Construction</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente facere, eligendi
                veritatis iusto non.</p>
                <p><a class="btn btn-warning" href="">Learn More</a></p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
  )
}

export default Home