import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const SkillsScreen = () => {
  return (
    <div>
      <Header/>
        <Container>
          <Row>
            <Col>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', boxShadow: '2px black', padding: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <button style={{margin:'1'}} id="pill" class="button">Python</button>
                <button style={{margin:'1'}} id="pill" class="button">JavaScript</button>
                <button style={{margin:'1'}} id="pill" class="button">MongoDB</button>
                <button style={{margin:'1'}} id="pill" class="button">Express.JS</button>
              </div>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', boxShadow: '2px black', fontFamily:'Arima', fontWeight:'500'}}>
                <button id="pill" class="button">Node JS</button>
                <button id="pill" class="button">React</button>
                <button id="pill" class="button">ELK Stack</button>
                <button id="pill" class="button">AWS DynamoDB</button>
                <button id="pill" class="button">AWS Opensearch</button>
                <button id="pill" class="button">AWS Lambda</button>
              </div>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', boxShadow: '2px black', padding: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <button id="pill" class="button">HTML</button>
                <button id="pill" class="button">CSS</button>
                <button id="pill" class="button">jQuery</button>
                <button id="pill" class="button">Bootstrap</button>
              </div>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', boxShadow: '2px black', fontFamily:'Arima', fontWeight:'500'}}>
                <button id="pill" class="button">GitHub</button>
                <button id="pill" class="button">Git</button>
                <button id="pill" class="button">IOS & Android development</button>
                <button id="pill" class="button">Django</button>
                <button id="pill" class="button">OpenCV</button>
                <button id="pill" class="button">Streamlit</button>
              </div>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', boxShadow: '2px black', padding: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <button id="pill" class="button">Expo</button>
                <button id="pill" class="button">React Native</button>
                <button id="pill" class="button">ELK Stack</button>
                <button id="pill" class="button">Docker</button>
              </div>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', boxShadow: '2px black', fontFamily:'Arima', fontWeight:'500'}}>
                <button id="pill" class="button">Docket</button>
                <button id="pill" class="button">GraphQL</button>
                <button id="pill" class="button">Flask</button>
                <button id="pill" class="button">Data Structures</button>
                <button id="pill" class="button">Project Management</button>
                <button id="pill" class="button">AWS Serverless</button>
              </div>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default SkillsScreen