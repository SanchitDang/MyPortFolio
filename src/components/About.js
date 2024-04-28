import Navbar from "./Navbar";

import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className=" dark-body container px-4 py-4 my-5 text-center">
        <h1 className="display-5 fw-bold">About</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            I'm a proactive team player with excellent interpersonal skills. I
            thrive on challenges and enjoy thinking creatively to find
            innovative solutions.
          </p>
        </div>

        <div class="container px-4 py-2" id="icon-grid">
          <h3 class="pb-2 border-bottom">
            <i class="fab fa-python"></i> Languages
          </h3>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
            <img
              class="icon"
              src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="Java"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white"
              alt="Dart"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="Python"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"
              alt="Kotlin"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
              alt="PHP"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="JavaScript"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
              alt="C"
            />
          </div>
        </div>

        <div class="container px-4 py-2" id="icon-grid">
          <h3 class="pb-2 border-bottom">
            <i class="fas fa-cubes"></i> Frameworks
          </h3>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
            <img
              class="icon"
              src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"
              alt="Flutter"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"
              alt="Spring"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"
              alt="Hibernate"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
              alt="Django"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white"
              alt="Selenium"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray"
              alt="DjangoREST"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
              alt="Laravel"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="React"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="NodeJS"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
              alt="Socket.io"
            />
          </div>
        </div>

        <div class="container px-4 py-2" id="icon-grid">
          <h3 class="pb-2 border-bottom">
            <i class="fas fa-database"></i> Database
          </h3>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
            <img
              class="icon"
              src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
              alt="Firebase"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="Postgres"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
              alt="SQLite"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
          </div>
        </div>

        <div class="container px-4 py-2" id="icon-grid">
          <h3 class="pb-2 border-bottom">
            <i class="fas fa-brain"></i> ML/DL
          </h3>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
            <img
              class="icon"
              src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
              alt="NumPy"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
              alt="Pandas"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black"
              alt="Matplotlib"
            />
          </div>
        </div>

        <div class="container px-4 py-2" id="icon-grid">
          <h3 class="pb-2 border-bottom">
            <i class="fas fa-toolbox"></i> Tools & Others Services
          </h3>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
            <img
              class="icon"
              src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
              alt="Visual Studio Code"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white"
              alt="Android Studio"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"
              alt="IntelliJ IDEA"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=white&color=green&labelColor=green"
              alt="PyCharm"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
              alt="Postman"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white"
              alt="Gradle"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515"
              alt="YAML"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white"
              alt="Play Store"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white"
              alt="App Store"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white"
              alt="Twilio"
            />
          </div>
        </div>

        <div class="container px-4 py-2" id="icon-grid">
          <h3 class="pb-2 border-bottom">
            <i class="fas fa-cogs"></i> DevOps
          </h3>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
            <img
              class="icon"
              src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
              alt="Linux"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
              alt="AWS"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white"
              alt="DigitalOcean"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white"
              alt="Kubernetes"
            />
            <img
              class="icon"
              src="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"
              alt="Jenkins"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
