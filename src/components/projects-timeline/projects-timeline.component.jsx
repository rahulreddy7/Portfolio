import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_SignLanguage from "../../assets/img/projects/signlanguage.png";
import L_GeoSpatial  from "../../assets/img/projects/Geospatial.JPG";
import L_Linkprediction from "../../assets/img/projects/Linkprediction.JPG";
import L_SBS from "../../assets/img/projects/sbs.JPG";
import L_CGM from "../../assets/img/projects/cgm.png";
import L_MRS from "../../assets/img/projects/recommendation.png";
import L_restaurant from "../../assets/img/projects/restaurant.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import Image from "react-bootstrap/Image";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
/****************************** */
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_GOLANG from "../../assets/img/skills/go-6.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JAVA from  "../../assets/img/skills/java.svg";
import L_JENKINS from "../../assets/img/skills/jenkins-1.svg"
import L_SPARK from "../../assets/img/skills/apache-spark-5.svg";
import L_AWS from "../../assets/img/skills/aws-2.svg";
import L_CPP from "../../assets/img/skills/c.svg";
import L_D3 from "../../assets/img/skills/d3-2.svg";
import L_DOCKER from "../../assets/img/skills/docker.svg";
import L_GCP from "../../assets/img/skills/google-cloud-1.svg";
import L_KUBERNETES from "../../assets/img/skills/kubernets.svg";
import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_RABBITMQ from "../../assets/img/skills/rabbitmq.svg";
import L_REDIS from "../../assets/img/skills/redis.svg";
import L_SPRING from "../../assets/img/skills/spring-3.svg";
import L_TENSORFLOW from "../../assets/img/skills/tensorflow-2.svg";
import L_ANGULAR from "../../assets/img/skills/angular-icon-1.svg";
import L_ANDROID from "../../assets/img/skills/android.svg";
import L_AWSEC2 from "../../assets/img/skills/aws-ec2.svg";
import L_AWSLAMBDA from "../../assets/img/skills/aws-lambda-1.svg";
import L_AWSSQS from "../../assets/img/skills/aws-sqs.svg";
import L_AWSS3 from "../../assets/img/skills/amazon-s3.svg";
import L_AWSIAM from "../../assets/img/skills/aws-iam.svg";
import L_AWSVPC from "../../assets/img/skills/aws-vpc-1.svg";
import L_SCALA from "../../assets/img/skills/scala-4.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

        <ImageEvent 
            date="05/6/2020"
            className="text-center bold"
            text="American Sign Language Recognition"
            src={L_SignLanguage}
            alt="Sign language Recognition"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        {/* <strong>Description:</strong> This app calculates Tip for the amount entered and percentage of tip to be given.
                        It uses MERN stack build to acomplish the same.
                        <hr /> */}
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed a Sign language recognition application using Andoird, Javascript, python, OpenCV & Tensorflow JS.</li>
                          <li>Utlized OpenCV to identify the palm & performed frame extraction, segmentation & cropping to obtain keypoints in JSON using Posenet library.</li>
                          <li>Trained a Convolutional Neural network model to convert the images to respective words, which are later combined to identify sentences</li>
                          <li>AWS S3 is used for persistent storage and retrival. Deployed the application into AWS EC2</li>
                          <li>Obtained an accuracy of 85% and error rate of 7.2%</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANDROID}
                                alt="Android"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Android
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TENSORFLOW}
                                alt="Tensorflow"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Tensorflow
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWSS3}
                                alt="S3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS S3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWSSQS}
                                alt="SQS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS SQS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWSLAMBDA}
                                alt="LAMBDA"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS LAMBDA
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/rahulreddy7/Sign-Language-Gesture-Recognition"
                  target="_blank"
                  className="url-button"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-nodejs-expressjs-activity-6712281977107603456-oH6t"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

        {/* Project: Todo List With MUI */}
        <ImageEvent
            date="04/15/2020"
            className="text-center"
            text="Secure banking System"
            src={L_SBS}
            alt="Secure Banking System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        {/* <strong>Description:</strong> Developed a secure banking application that incorporates the block chain decentralized architecture
                        <hr /> */}
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed a Banking web application using Angular JS, Spring Security, and incorporated security features to
overcome OWASP top 10 vulnerabilities.</li>
                          <li>Implemented Permissioned Blockchain De-Centralized Architecture for
the application using HyperLedger Fabric on AWS EC2 to maintain the immutability & privacy of transactions.</li>
                          <li>Hyperledger Fabric implementation of Blockchain also facilitates consensus among peer nodes using POET algorithm</li>
                          <li>The application has functionality, security requirements for secure banking transactions and user-account management (It maintains 3 tiers of employees i.e.., Tier-1, Tier-2, Admin, and end-users like merchants, customers). End-users can create checking, savings, creditcard Accounts and perform transactions</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANGULAR}
                                alt="Angular"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Angular JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPRING}
                                alt="Spring"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Spring Boot
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWSEC2}
                                alt="EC2"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS EC2
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWSVPC}
                                alt="VPC"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS VPC
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWSIAM}
                                alt="IAM"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS IAM
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/rahulreddy7/Secure-Banking-System-using-Blockchain"
                  target="_blank"
                  className="url-button"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>


          {/* Project: Get GitHub Info */}
          <ImageEvent
            date="12/02/2019"
            className="text-center"
            text="Large Scale Geo-Spatial Data Analysis"
            src={L_GeoSpatial}
            alt="Large Scale Geo-Spatial Data Analysis"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Performed Data Analysis on New York Taxi Trip dataset and executed spatial queries using Apache Spark SQL on
points & rectangle geographical data.</li>
                          <li>Applied spatial statistics on Spatio-temporal Bigdata using Scala and
implemented the Getis-ord statistic to identify the 50 most significant hotspot cells.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPARK}
                                alt="Spark"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Apache Spark
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SCALA}
                                alt="Scala"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Scala
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/getGithubInfo/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/getGithubInfo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent
            date="11/28/2019"
            className="text-center"
            text="Link Prediction in Social Dynamic Networks"
            src={L_Linkprediction}
            alt="Link Prediction in Social Dynamic Networks"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed an Encoder-LSTM-Decoder model using Python, Keras, Tensorflow & AWS Sagemaker with the hyper
tuning of parameters to predict the future links between the users in Facebook dataset</li>
                          <li>Performed a comparison study with existing techniques like Node2vec, Katz, etc</li>
                          <li> The model was able to achieve an accuracy of 98.7% in predicting new links and node removal.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TENSORFLOW}
                                alt="Tensorflow"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Tensorflow
                            </span>
                          </li>
                        </ul>
                        {/* <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or{" "}
                          <strong>log in</strong> using the demo account below.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://smart-face-detect-app.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/rahulreddy7/Dynamic-Link-Prediciton-Using-E-LSTM-D"
                  target="_blank"
                  className="url-button"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.youtube.com/watch?v=ZZYSpi_blL0"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>


          {/* Project: Product_Hunt_Clone */}

          <ImageEvent
            date="11/20/2019"
            className="text-center"
            text="Meal Classification using Continuous Glucose Monitoring"
            src={L_CGM}
            alt="Meal Classification using Continuous Glucose Monitoring"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed a meal classification algorithm to detect the meal and no meal data in a Type 1 diabetes patient</li>
                          <li>Obtained reall time meal data using CGM sensor from 5 patients.</li>
                          <li>Performed dimensionality reduction using PCA. Extracted features such as Zero Crossing, Coefficient of variance, Discrete fourier transform, Polynomial Coefficient etc</li>
                          <li>Developed multiple machine leanring classifiers like SVM RBF kernal, Naive Bayes, Decission tree to identify the most efficient classifier</li>
                          <li>Obtained an average F1 score of 88%</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/rahulreddy7/Meal-Classification-Using-Glucose-Monitoring-Data"
                  target="_blank"
                  className="url-button"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using Django */}
          <ImageEvent
            date="01/22/2018"
            className="text-center"
            text="Online Restaurant Review and Booking Site"
            src={L_restaurant}
            alt="Online Restaurant Review and Booking Site"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Developed a restaurant review and booking website using MERN stack. The application has functionalities to give ratings to the restaurants, search & sort restaurants using price, location, cuisine filters and book a restaurant </li>
                          <li>Built front end of the application using React Js & utlized Redux architecture for state management</li>
                          <li>Performed build using Webpack4 and transpiled using Babel</li>
                          <li>Backend of the application is built using Express, Node JS and MongoDB</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="Mongo"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Mongo DB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node JS
                            </span>
                          </li>
                        </ul>
                        {/* <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by
                          clicking on the button below.
                          <br />
                          <br />
                        </em> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/rahulreddy7/Restaurant-Booking-using-React-Redux" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="04/10/2017"
            className="text-center"
            text="Movie Recommendation System"
            src={L_MRS}
            alt="Movie Recommendation System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <ul className="list-styles pt-1">
                          <li>Implemented a Personalized Movie Recommendation system using collaborative filtering/probabilistic relevance
feedback and a movie classification system using r- nearest neighbor, random forest, n-ary SVM, LSH.</li>
                          <li> Processed IMDB-MovieLens dataset using PostgresSQL & applied PCA, SVD, LDA, and CPD models.l</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="Postgres"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              POstgres SQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/RoboFriends/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/RoboFriends"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
