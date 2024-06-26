import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <div className="container">
      <header className=" dark-body d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">

        <Link to="/" class={`dark-body d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none`}>
          My Portfolio
        </Link>

        <ul className={`nav col-12 col-md-auto mb-2 d-flex justify-content-center mb-md-0`}>
          <li><Link to="/" className={`nav-link px-2 `}>Home</Link></li>
          <li><Link to="/Projects" className={`nav-link px-2 `}>Projects</Link></li>
          <li><Link to="/About" className={`nav-link px-2 `}>About</Link></li>
          <li><Link to="/Achievements" className={`nav-link px-2 `}>Certificates</Link></li>
          <li><Link to="/WorkExperience" className={`nav-link px-2 `}>Work Experience</Link></li>
          <li><Link to="/Contact" className={`nav-link px-2 `}>Contact</Link></li>
        </ul>
        <div class="col-md-3 text-end ">
          <button type="button" class="btn btn-link " onClick={()=>{
            var icon = document.getElementById("icon");
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
              
              icon.path.d=''
              icon.svg.path.d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z";
            }
            
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16" id='icon'>    
                <path id='light' d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                <path id='dark' d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>              
            </svg>
            <span class="visually-hidden">Button</span>
          </button>

        </div>

      </header>
    </div>

  )
}


Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Notes Taker"
}
