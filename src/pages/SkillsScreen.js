import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const SkillsScreen = () => {
  const skills = [
    ["Python", "JavaScript", "MongoDB", "Express.JS"],
    ["Node JS", "React", "ELK Stack", "AWS DynamoDB", "AWS Opensearch", "AWS Lambda"],
    ["HTML", "CSS", "jQuery", "Bootstrap"],
    ["GitHub", "Git", "iOS & Android Development", "Django", "OpenCV", "Streamlit"],
    ["Expo", "React Native", "ELK Stack", "Docker"],
    ["Docket", "GraphQL", "Flask", "Data Structures", "Project Management", "AWS Serverless"]
  ];

  return (
    <div>
      <Header />
      <Container>
        {skills.map((group, index) => (
          <Row key={index} className="mb-3" style={{ justifyContent: 'center' }}>
            {group.map((skill, skillIndex) => (
              <Col xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center m-1" key={skillIndex}>
                <button id="pill" className="button">{skill}</button>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default SkillsScreen;