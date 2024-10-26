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
                  <Card.Title style={{fontWeight:'700'}}>Summary</Card.Title>
                  <Card.Text>
                  A proactive Software Engineering Intern with demonstrated expertise as a Software Engineer, adept at developing tools that
                  enhance workflow efficiency. Participated in significant projects like Wealthzen, implementing full-stack solutions in the MERN
                  stack to improve project delivery and client satisfaction. Organized team coordination to ensure successful implementation of
                  project requirements. Committed to applying technical skills and experience to develop robust systems aiming for high-quality
                  outcomes and dependable fraud detection in Scale's contributor platforms. A good Team player and having the ability to learn
                  and pickup new technologies, languages, design patterns etc.
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
                  <a>abhiramgatgmail.com</a> <br/>
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