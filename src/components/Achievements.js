import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'

export default function Achievements() {
  return (
    <>
      <Navbar />

      <div class=" dark-body container px-4 py-4 my-5 text-center">
        <h1 class="display-5 fw-bold">Acheivements</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Here are some of my acheivements and certificate courses i have done.
          </p>
        </div>

        <div class="row py-5">


          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/c.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">C Certificate</h5>
                <p class="card-text">
                  C is a machine-independent language that is mainly used to create many types of applications and operating systems.
                </p>
                <a href="https://in.coursera.org/account/accomplishments/verify/G3LUAX7QKQGS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Show Credential </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: '18rem' }}>
              <img src={require('./images/java.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Java Certificate</h5>
                <p class="card-text">
                  Java is a class-based, object-oriented language that is designed to have as few implementation dependencies as possible.
                </p>
                <a href="https://www.udemy.com/certificate/UC-f1a76eb4-68b4-4482-96bf-d0845b38a001/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Show Credential </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/r.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">R Certificate</h5>
                <p class="card-text">
                R is a programming language that is widely used as statistics-related libraries and provides statistical computing.
                </p>
                <a href="https://in.coursera.org/account/accomplishments/verify/ZBB8EMW754ZA" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Show Credential </a>
              </div>
            </div>
          </div>


        </div>


        <div class="row py-3" >

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: '18rem' }}>
              <img src={require('./images/react.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Front-End Development with React</h5>
                <p class="card-text">
                  React is component-based javascript frontend library, can also develop Mobile Apps and more.
                </p>
                <a href="https://in.coursera.org/account/accomplishments/verify/R7SGLS45NTWS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer" class="btn btn-primary"> Show Credential </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/dsa.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DSA Certificate</h5>
                <p class="card-text">
                DSA goes through solutions to problems and gives you an insight into how efficient it is to use each one of them.
                </p>
                <a href="https://in.coursera.org/account/accomplishments/verify/SZTB6UUSTZ3X?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Show Credential </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: '18rem' }}>
              <img src={require('./images/back.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Back-End Development with MERN</h5>
                <p class="card-text">
                  Full Server-side Development with NodeJS, Express and MongoDB specialization.
                </p>
                <a href="https://in.coursera.org/account/accomplishments/verify/F9WMRJNQSXB2" target="_blank" rel="noopener noreferrer" class="btn btn-primary"> Show Credential </a>
              </div>
            </div>
          </div>


        </div>

      </div>

      <Footer />
    </>

  )
}
