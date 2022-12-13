import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
      <Navbar />

      <div class="dark-body container px-4 py-4 my-5 text-center">
        <h1 class="display-5 fw-bold">Contact Me</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4  py-2">Contact me using my following handles</p>

          <div class="row">
            <div class="col-sm-6">
              <div class="dark-card card">
                <div class=" card-body">
                  <h5 class="card-title">Linkdin</h5>
                  <p class="card-text">Here is my LinkedIn profile</p>
                  <a href="https://linkedin.com/in/SanchitDang" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go to Linkdin</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="dark-card card">
                <div class="card-body">
                  <h5 class="card-title">Github</h5>
                  <p class="card-text">Here is my Github profile</p>
                  <a href="https://github.com/SanchitDang" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go to Github</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer name='fixed-bottom' />
    </>
  )
}
