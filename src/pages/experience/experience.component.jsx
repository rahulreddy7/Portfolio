import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_DELOITTE from "../../assets/img/experience/deloitte-2.svg";
import L_CHASE from "../../assets/img/experience/chase.svg"
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_DELOITTE} alt="Deloitte logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    <strong>Duration:</strong> August 2017 - July 2019
                    <br />
                    <strong>Technology:</strong> Java, Spring Boot, Javascript, React JS, Python, Docker, MS-SQL, Rabbit MQ, Redis
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed </strong>web modules using Spring MVC for Anthem health Insurance that retrieves and updates the details of
Medicaid & Medicare coverage for 10 million users.</li>
                      <li>Replaced the SOA service calls with Rest APIs & <strong>implemented structured hashing </strong> in Redis Cache thereby achieving
a reduction in the production service timeouts by 70%.
                      </li>
                      <li><strong>Optimized</strong> service layers, request queues, and MSSQL data model to handle a request load of 10000 per sec.
Configured application with the Nginx web server for load balancing. 
                      </li>
                      <li><strong>Collaborated</strong> with cross-functional teams to develop a UI and automation for the business team to audit the
resolved tickets using React JS & Django which reduced the manual effort by 50%.</li>
                      <li><strong>Built</strong> CI/CD pipelines using Jenkins, Docker. Managed automatic deployment using custom scripts.</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CHASE} alt="JPMorgan Chase logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">University Outreach Program</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    <strong>Duration:</strong> January 2017 - May 2017
                    <br />
                    <strong>Technology:</strong> Node JS, Ionic Framework, FireBase
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Developed a <strong>cross-platform compatible</strong> NFC based mobile payment application using Ionic framework & Node JS.</li>
                      <li>Created a mechanism to integrate multiple third-party accounts to pay a single bill. Implemented a QR code schema to
deliver bills to customers.</li>
                      <li>Integrated the app with <strong>Firebase cloud database</strong> and developed a custom OAuth model using 3rd party API for
authentication and securing the transactions of users.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
