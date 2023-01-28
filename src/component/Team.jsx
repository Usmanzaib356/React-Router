import React from 'react'
import BilderImage from '../component/builder.png'
function Team() {
  return (
    <div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Necessitatibus, suscipit.</p>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={BilderImage} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Jack Wilson</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing 
                      Obcaecati, nostrum aspernatur dolores accusantium quo laborum.!</p>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={BilderImage} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Jack Wilson</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Obcaecati, nostrum aspernatur dolores accusantium quo laborum.!</p>                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={BilderImage} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Jack Wilson</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Obcaecati, nostrum aspernatur dolores accusantium quo laborum.!</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={BilderImage} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Jack Wilson</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Obcaecati, nostrum aspernatur dolores accusantium quo laborum.!</p>
                  </div>
                </div>
              </div>
            </div> 
        </div>
        </div>
  )
}

export default Team