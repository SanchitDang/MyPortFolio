import Navbar from './Navbar'

import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function About() {

  return (
    <>
      <Navbar />

      <div className=" dark-body container px-4 py-4 my-5 text-center">
        <h1 className="display-5 fw-bold">About</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          I am a self-starter with strong interpersonal skills. I work efficiently both as an individual contributor as well as along with a team. I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem.  
          </p>
        </div>


        <div class="container px-4 py-5" id="icon-grid">
          <h2 class="pb-2 border-bottom">Programming Languages</h2>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">C</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Python</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Java</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">R</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Javscript</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">SQL</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">HTML, CSS</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">C++</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="container px-4 py-2" id="icon-grid">
          <h2 class="pb-2 border-bottom">Libraries And Frameworks</h2>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Bootstrap</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">OpenCV</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Numpy</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">TensorFLow</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">React.js</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Node.js</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Selenium</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Pandas</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>



        <div class="container px-4 py-2" id="icon-grid">
          <h2 class="pb-2 border-bottom">Tools</h2>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Github</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Git</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Google Cloud Platform</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Amazon AWS</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Adobe Photoshop</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">Figma</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">VS Code</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use to="/" /></svg>
              <div>
                <h4 class="fw-bold mb-0">IDE's</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>




      </div>







      <Footer />



    </>
  )
}
