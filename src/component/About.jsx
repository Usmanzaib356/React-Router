import React from 'react'
import AboutImage from "../component/img.jpg"

function About() {
  return (
    
    <div>
       <br />
       <br />
       <br />
       <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-12">
            <div class="about-img">
              <img src={AboutImage} alt="" class="img-fluid"/>
            </div>
          </div>
          <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div class="about-text">
              <h2>We Provide Best Quality <br/> Services Ever</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil optio ea, quis mollitia dignissimos voluptatibus nam
                 laboriosam  cumque facilis nemo exercitationem tempore aut id consequuntur quod, quia tenetur quidem?</p>    
            </div>
            <a class="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About