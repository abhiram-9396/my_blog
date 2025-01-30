import React from 'react'
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap'
import Header from '../components/Header.js'
import yourPicture from '../assets/Proffecionalpic.png';
import Footer from '../components/Footer.js'

const HomeScreen = () => {
  return (
    <div>
      <Header/>
        <Container>
          <Row>
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
              <Card id="profile" style={{ width:'35rem',  boxShadow: '2px black', padding: '3rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'600' }}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'700'}}><h3>Summary</h3></Card.Title>
                  <Card.Text>
                  Full-stack developer with 2 years of experience, currently pursuing masters in the field of Computer Science in the University Of Central Missouri.
Experience in working with product-based startups - Wealthzen.ai, Growsari and building production-ready applications using MERN stack, GIT, Python, JavaScript, Node, Microservices, Docker, Firebase, jQuery, MySQL, and also worked on cloud services- Serverless, DynamoDB, Amazon SQS, SES, SNS, lambda, ELK stack.
Passionate about Data Structures, Problem Solving. Experience in working with RestAPI's for building web applications. Looking forward to explore Data Analytics field. Committed to apply technical skills and experience to develop robust systems aiming for high-quality outcomes. A good Team player and having the ability to learn and pickup new technologies, languages, design patterns etc.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop: '3rem' ,fontFamily:'Arima', fontWeight:'500'}}>
            <div id="profile" class="card" style={{width: '20rem'}}>
              <img src={yourPicture} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Get In Touch</h5>
                <p class="card-text">
                  <a>abhiramgat@gmail.com</a> <br/>
                  <a>+19132186902</a>
                </p>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default HomeScreen