import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />

      <div class=" dark-body container px-4 py-4 my-5 text-center">
        <h1 class="display-5 fw-bold">My Projects</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 py-2">
            I've completed numerous projects in freelance, personal, and office
            capacities. Here's some recent ones
          </p>
        </div>

        <div class="row py-5">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Transporter</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Created Flutter frontend and admin panel.</li>
                    <li>Utilized Java Spring Boot for backend.</li>
                    <li>
                      Implemented Spring Data JPA for efficient database
                      interactions with PostgreSQL.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Echo Bidding</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Developed Flutter frontend and admin panel.</li>
                    <li>Backend built with Python Django.</li>
                    <li>Utilized HTML, CSS, and JavaScript for admin panel.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">LinkedIn Automation Bot</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Utilized Java Android accessibility features.</li>
                    <li>Implemented admin controls for different bots.</li>
                    <li>Integrated ChatGPT API for user messaging.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row py-3">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">GoRide</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Developed Flutter application.</li>
                    <li>Integrated Google Maps APIs for navigation.</li>
                    <li>
                      Firebase integration for database, authentication, and
                      hosting.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Instagram Unfollow Checker</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Used Python Selenium library for scraping.</li>
                    <li>Made GUI using tkinter.</li>
                    <li>
                      Implemented functionality to check unfollowers on
                      Instagram.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Pictho</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Developed Java photo editing application.</li>
                    <li>
                      Supported multiple layers of images, video editing, and
                      collage creation.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row py-3">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Vswach</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Made application using Flutter.</li>
                    <li>Made the backend using PHP Laravel.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Mission 11</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Created cricket fantasy app in Java Android.</li>
                    <li>
                      Implemented state management and handled Android
                      lifecycle.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="card-title">Prodokraft</h5>
                <p class="card-text-2">
                  <ul>
                    <li>Developed entire application using Flutter.</li>
                    <li>Utilized Provider for state management.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
