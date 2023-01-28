import React from 'react'

function Services() {
  return (
    <div>
        <br />
        <br />  
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className= "section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Necessitatibus, suscipit.</p>
              </div>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-subtract me-5 "></i>
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat nobis voluptas at,
                     sed enim dolore cumque. Sapiente cumque tenetur error ipsa labore recusandae atque!</p>
                     <button className="btn btn-warning text-dark ">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-slack me-5"></i>
                  <h3 className="card-title">Sustanbility</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat nobis voluptas at,
                     sed enim dolore cumque. Sapiente cumque tenetur error ipsa labore recusandae atque!</p>
                     <button className="btn btn-warning text-dark ">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-playstation me-5"></i>
                  <h3 className="card-title">Integrity</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat nobis voluptas at,
                     sed enim dolore cumque. Sapiente cumque tenetur error ipsa labore recusandae atque!</p>
                     <button className="btn btn-warning text-dark ">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     

    </div>
  )
}

export default Services