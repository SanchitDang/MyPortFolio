import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Projects() {
  return (
    <>
      <Navbar />

      <div class=" dark-body container px-4 py-4 my-5 text-center">
        <h1 class="display-5 fw-bold">My Projects</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 py-2">I've made many projects since I've stepped in world of programming, here are some of those projects</p>
        </div>

        <div class="row py-5">
          

          <div class="col d-flex justify-content-center">
            
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/note.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Note Taker</h5>
                <p class="card-text">A Note taker web app which allows user to take notes anywhere without needing to install an app.</p>
                <a href="https://github.com/SanchitDang/NoteTaker" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Git Repository</a>
              </div>
            </div>
          </div>


          <div class="col d-flex justify-content-center">
            
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/brain.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Psyium</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/SanchitDang/Psyium" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Git Repository</a>
              </div>
            </div>

          </div>
          <div class="col d-flex justify-content-center">
            
            <div class="dark-card card " style={{ width: '18rem' }}>
              <img src={require('./images/tic.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Tic Tac Toe</h5>
                <p class="card-text">A simple tic tac toe game made with react for android using ionic capacitor.</p>
                <a href="#" class="btn btn-primary">Git Repository</a>
              </div>
            </div>
          </div>

        </div>




        <div class="row py-3" >
          

          <div class="col d-flex justify-content-center">
            
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/store.jpg')}class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Store Management System</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/SanchitDang/Store-Management-System" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Git Repository</a>
              </div>
            </div>
          </div>


          <div class="col d-flex justify-content-center">
            
            <div class="dark-card card" style={{ width: '18rem' }}>
              <img src={require('./images/insta.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Instagram Unfollow Checker</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Git Repository</a>
              </div>
            </div>

          </div>

          <div class="col d-flex justify-content-center">
            
            <div class="dark-card card " style={{ width: '18rem' }}>
              <img src={require('./images/ball.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Catch The Ball</h5>
                <p class="card-text">A simple Catch The Ball game made with python using turtle and tkinter library.</p>
                <a href="https://github.com/SanchitDang/Catch-The-Ball" target="_blank" rel="noopener noreferrer"  class="btn btn-primary">Git Repository</a>
              </div>
            </div>
          </div>

        </div>
      

      </div>


      <Footer />
    </>
  )
}
