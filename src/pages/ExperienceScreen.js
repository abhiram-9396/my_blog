import React from 'react'
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const ExperienceScreen = () => {
  return (
    <div>
      <Header/>
        <Container>
          <Row>
            <Col>
              <Card id="profile" style={{ margin:'2',width: '100%', boxShadow: '2px black', padding: '3rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'900'}}>RIKTAM TECHNOLOGIES</Card.Title>
                  <Card.Text>
                  <p>
                  <br/>
                    I'm a full-stack developer with 2 years of experience, currently pursuing masters in the field of Computer Science in the University Of Central Missouri.
                    <br/><br/>
                    Experience in working with product-based startups - Wealthzen.ai, Growsari and building production-ready applications using MERN stack, GIT, Python, JavaScript, Node, Microservices, Docker, Firebase, jQuery, MySQL, and also worked on cloud services- Serverless, DynamoDB, Amazon SQS, SES, SNS, lambda, ELK stack.
                    <br/><br/>
                    Passionate about Data Structure, Problem Solving Skills for Object Oriented Programming(OOP). Experience of working with RestAPI's for building web applications. Looking forward to explore Data Analytics field.
                  </p>
                  <p>
                    <b>SOFTWARE ENGINEER  (02/2022 - 12/2023)</b> <br/><br/>

                    <ul>
                      <li>Developed full-stack web applications using the MERN stack, enhancing user experience and functionality, and
                      incorporating MongoDB for efficient data management.</li><br/>
                        <li>Contributed to major projects Wealthzen and Growsari by implementing features using HTML, CSS, JavaScript, and
                      MongoDB, improving project efficiency and client satisfaction.</li><br/>
                      <li>Managed a team effectively by coordinating tasks and fostering collaboration, leading to improved project delivery times and
                      aligning with product engineering goals.</li><br/>
                      <li>Communicated with clients to gather project requirements using effective questioning techniques, ensuring clear
                    understanding and successful project outcomes.</li><br/>
                      <li>Guided junior team members during their internships by solving technical doubts, which enhanced their learning experience
                    and contributed to team productivity and collaborative culture.</li>
                    </ul>
                  </p>
                  </Card.Text>
                  {/* <Button variant="primary">
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default ExperienceScreen