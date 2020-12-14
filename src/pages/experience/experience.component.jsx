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
                      <li>Developed web modules using <strong>Java Spring MVC</strong> for Anthem health Insurance that retrieves and updates the
details of Medicaid & Medicare coverage for 10 million users..</li>
                      <li>Replaced the SOA service calls with <strong>Rest APIs</strong>. Implemented structured hashing & distributed locking in Redis
Cache thereby achieving a reduction in the production service timeouts by 70% and an increase in fault tolerance.
                      </li>
                      <li><strong>Optimized</strong> service layers, request queues, and MSSQL data model to handle a request load of 10000 per sec.
Configured application with the Nginx web server for load balancing. 
                      </li>
                      <li>Performed Unit and Integration testing using <strong>JUnit, Mockito</strong> ensuring 90% code coverage. Ensured 99% uptime by
developing a custom script that remotely performs a health check on prod servers and sends alerts utilizing Splunk
logs and Micrometer. Spearheaded deployment using <strong>Docker</strong> containers, built CI/CD pipelines using <strong>Jenkins</strong>.</li>
                      <li>Created iterative wireframes and prototypes using Axure RP9 and came up with a high fidelity UI dashboard for
the business audit team which improved the usability and responsiveness by 60%.</li>
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
                    <strong>Technology:</strong> Java, SpringBoot, Python, ElasticSearch, Kibana, Logstash
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Designed and implemented a fraud detection pipeline using Java <strong>Spring Boot</strong> in an SOA fashion using Docker
that interacts with ML models using Rest API. Leveraged supervised ML on split & deposit user data to train a
<strong> multi-layer perceptron</strong> and random forest models that would aid in investigating more than 3 million records</li>
                      <li>Implemented a data analytics service using <strong>Elastic Search</strong> to track the customers. Written grok filters in Logstash
to identify the anomalies in transactions and utilized Kibana dashboards for real-time visualization.</li>
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
