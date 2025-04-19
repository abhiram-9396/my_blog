import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const ExperienceScreen = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card id="profile" style={{ width: '100%', boxShadow: '2px black', padding: '2rem', marginTop: '3rem', fontFamily: 'Arima', fontWeight: '500' }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: '900' }}>RIKTAM TECHNOLOGIES</Card.Title>
                <Card.Text>
                  <p>
                  Proficient MERN stack developer, experienced in developing Dynamic and responsive full-stack  applications and collaborating in Agile environments to deliver high-quality software solutions. <br /><br />
                  Built robust and scalable RESTful APIs, enabling efficient data exchange and integration for web and mobile applications.<br /><br />
                  Structured and deployed scalable and highly available cloud architectures using AWS services such as Lambda, S3, VPC, DynamoDB, API Gateway and CloudFront, collaborating in Agile environments to deliver high-quality software solutions.
                  <br /><br />
                  </p>
                  <p>
                    <b>SOFTWARE ENGINEER (02/2021 - 12/2023)</b>
                    <br /><br />
                    <ul>
                      <li>Developed and deployed 5+ full-stack web applications using the MERN stack, with a focus on user-centric design and efficient data management using SQL & DynamoDB, showcasing strong attention to detail throughout the development lifecycle.</li>
                      <li>Played a key role in high-impact projects like Wealthzen and Growsari, where I implemented scalable, cloud-based features that enhanced platform performance and boosted client satisfaction by 30%, demonstrating sharp problem-solving capabilities.</li>
                      <li>Collaborated closely with cross-functional microservices teams (Saripay, Growcoins, ms-stores, ms-iam), aligning backend systems and frontend interfaces through effective communication and organizational skills, resulting in a 25% improvement in project delivery timelines.</li>
                      <li>Ensured application robustness by executing comprehensive unit testing using Jest and Postman, reducing bugs by 40% and significantly enhancing the stability and reliability of production releases.</li>
                    </ul>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ExperienceScreen;
