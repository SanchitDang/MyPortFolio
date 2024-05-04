import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function WorkExperience() {
  return (
    <>
      <Navbar />

      <div class=" dark-body container px-4 py-4 my-5 text-center">
        <h1 class="display-5 fw-bold">My Work Experience</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 py-2">
            Here is a comprehensive overview of my valuable work experience
            showcasing my skills, achievements, and contributions.
          </p>
        </div>

        <div class="workExperience">
          <ul>
            <li>
              <div class="jobPosition">
                <span class="bolded">Software Development Engineer</span>
                <span>December 2023 - Current</span>
              </div>
              <div class="projectName bolded">
                <span>
                  <strong>A2Z INFRA ENGINEERING LIMITED</strong>
                </span>
              </div>
              <div class="projDescription">
                <ul>
                  <li>
                    Developed front-end app with Flutter and backend with Java
                    Spring Boot.
                  </li>
                  <li>
                    Processed live GPS data using a listener parser, extracting
                    and storing latitude and longitude information in a backend
                    system built with Java Spring Boot, and database as SQL.
                  </li>
                  <li>
                    Generated vehicle route lines based on stored GPS data and
                    integrated Google Maps into Flutter applications to
                    visualize routes, boundaries, and vehicle locations.
                  </li>
                  <li>
                    Implemented geo-hashing techniques to restrict drivers
                    within defined geographical regions, ensuring adherence to
                    specified boundaries.
                  </li>
                  <li>
                    Developed modules within the Flutter application, including
                    attendance tracking and waste collection status, while
                    ensuring cross-platform compatibility and continuous
                    monitoring for optimization.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="jobPosition">
                <span class="bolded">Full Stack Developer</span>
                <span>May 2023 - November 2023</span>
              </div>
              <div class="projectName bolded">
                <span>
                  <strong>COGENT WEB SERVICES</strong>
                </span>
              </div>
              <div class="projDescription">
                <ul>
                  <li>
                    Integrated payment gateways on Android using Flutter and
                    Java.
                  </li>
                  <li>
                    Implemented a robust backend system in Java Spring Boot,
                    JPA, Hibernate to store and manage transaction data
                    securely.
                  </li>
                  <li>
                    Successfully implemented payment solutions for PhonePe,
                    Razor Pay, Paytm, etc.
                  </li>
                  <li>
                    Integrated AdMob advertisement on Android using Flutter and
                    Java.
                  </li>
                  <li>Implemented Google AdMob and Unity Ads.</li>
                  <li>
                    Specialized in creating callback APIs for streamlined
                    communication.
                  </li>
                  <li>
                    Demonstrated expertise in deploying solutions in production
                    environments.
                  </li>
                  <li>
                    Developed a report entry generator using Java Swing,
                    ensuring a user-friendly interface for efficient data entry
                    and management.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="jobPosition">
                <span class="bolded">Android Developer</span>
                <span>February 2023 - May 2023</span>
              </div>
              <div class="projectName bolded">
                <span>
                  <strong>ANEKVURNA CONSULTANCY PVT LMT</strong>
                </span>
              </div>
              <div class="projDescription">
                <ul>
                  <li>
                    Developed an Android and iOS ride-hailing app using Flutter,
                    offering users seamless cab booking services.
                  </li>
                  <li>
                    Integrated Google Maps APIs, including Places Library for
                    location details, Directions API for optimal routing, and
                    Geolocation for precise tracking, and other third-party APIs
                    to enable crucial functionalities like location services and
                    route planning.
                  </li>
                  <li>
                    Managed the app's backend infrastructure through the Google
                    Cloud Console, and Google Cloud Messaging, involving server
                    setup, user data management, and handling requests and
                    responses.
                  </li>
                  <li>
                    Implemented Firebase integration, enhancing the app with
                    real-time database, authentication, hosting, and cloud
                    storage capabilities.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
