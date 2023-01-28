import React from 'react'

function Contact() {
  return (
    <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Necessitatibus, suscipit.</p>
              </div>
            </div>
          </div>
          
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input type="text" className="form-control" required placeholder="Your Full Name"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input type="email" className="form-control" required placeholder="Your Email Here"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea rows="3" required className="form-control" placeholder="Your Query Here"></textarea>
                  </div>
                </div>
                <button className="btn btn-warning btn-lg btn-block mt-3">Send Now</button>
              </div>
            </div>

            <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
               <form action="#" className="bg-light p-4.m-auto"></form>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Contact