import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";

export default function Achievements() {
  return (
    <>
      <Navbar />

      <div class=" dark-body container px-4 py-4 my-5 text-center">
        <h1 class="display-5 fw-bold">Certificates</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Here are some of my certificate courses I have done.
          </p>
        </div>

        <div class="row py-5">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <img
                src={require("./images/spring.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Spring, Hibernate</h5>
                <p class="card-text">
                  Spring and Hibernate certification teaching API database
                  connectivity, integration, optimization, and best practices..
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-2d16f401-6654-45eb-9288-6b2bd24f3313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <img
                src={require("./images/blockchain.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Blockchain Basics</h5>
                <p class="card-text">
                  A course covering key blockchain concepts like decentralized
                  consensus, cryptographic hashing, and smart contracts.
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/YFJN94SU5XL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <img
                src={require("./images/java.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Java Certificate</h5>
                <p class="card-text">
                  Java is a class-based, object-oriented language that is
                  designed to have as few implementation dependencies as
                  possible.
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-f1a76eb4-68b4-4482-96bf-d0845b38a001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row py-5">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <img
                src={require("./images/c.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">C Certificate</h5>
                <p class="card-text">
                  C is a machine-independent language that is mainly used to
                  create many types of applications and operating systems.
                </p>
                <a
                  href="https://in.coursera.org/account/accomplishments/verify/G3LUAX7QKQGS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <img
                src={require("./images/java.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Working with Golang</h5>
                <p class="card-text">
                  Crafting APIs leveraging GoORM alongside Gin Gorm Postgres
                  Driver, which serves as the PostgreSQL driver for GORM.
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-f1a76eb4-68b4-4482-96bf-d0845b38a001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <img
                src={require("./images/r.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">R Certificate</h5>
                <p class="card-text">
                  R is a programming language that is widely used as
                  statistics-related libraries and provides statistical
                  computing.
                </p>
                <a
                  href="https://in.coursera.org/account/accomplishments/verify/ZBB8EMW754ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row py-3">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <img
                src={require("./images/ai.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">AI For Everyone</h5>
                <p class="card-text">
                  Course Providing Foundational Concepts and Practical Knowledge
                  for Beginners in Artificial Intelligence.
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/XU8A3HBGHNS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  {" "}
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <img
                src={require("./images/advance.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Advance Data Structures</h5>
                <p class="card-text">
                  Advanced DSA solutions which gives you an insight into how
                  efficient it is to use each one of them.
                </p>
                <a
                  href="https://coursera.org/share/a37b871de5ec2a62dec19d81c7398d0a"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <img
                src={require("./images/dart.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Flutter & Dart - Complete Masterclass
                </h5>
                <p class="card-text">
                  Full flutter and Dart Masterclass with specialization for
                  mobile development.
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-932dd3f8-3822-4a15-aaab-ec76c9840c3f/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  {" "}
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row py-3">
          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <img
                src={require("./images/react.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Front-End Development with React</h5>
                <p class="card-text">
                  React is component-based javascript frontend library, can also
                  develop Mobile Apps and more.
                </p>
                <a
                  href="https://in.coursera.org/account/accomplishments/verify/R7SGLS45NTWS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  {" "}
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card" style={{ width: "22rem" }}>
              <img
                src={require("./images/dsa.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">DSA Certificate</h5>
                <p class="card-text">
                  DSA goes through solutions to problems and gives you an
                  insight into how efficient it is to use each one of them.
                </p>
                <a
                  href="https://in.coursera.org/account/accomplishments/verify/SZTB6UUSTZ3X?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center">
            <div class="dark-card card " style={{ width: "22rem" }}>
              <img
                src={require("./images/back.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Back-End Development with MERN</h5>
                <p class="card-text">
                  Full Server-side Development with NodeJS, Express and MongoDB
                  specialization.
                </p>
                <a
                  href="https://in.coursera.org/account/accomplishments/verify/F9WMRJNQSXB2"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  {" "}
                  Show Credential{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
