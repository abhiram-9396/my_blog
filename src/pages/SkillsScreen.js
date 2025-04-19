import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const SkillsScreen = () => {
  const skills = [
    ["Python", "JavaScript", "MongoDB", "Express.JS", "ejs"],
    ["Node JS", "React", "ELK Stack", "AWS DynamoDB", "AWS Opensearch", "AWS Lambda"],
    ["HTML", "CSS", "jQuery", "Bootstrap", "MVC Design pattern"],
    ["GitHub", "Git", "Django", "OpenCV", "Streamlit"],
    ["Firebase", "GraphQL", "Flask", "Data Structures", "Project Management", "AWS Serverless"],
    ["Expo", "React Native", "ELK Stack", "Docker", "Android Studio"],
    ["Project Management", "Communication", "Presentation", "Testing", "Debugging"],
    ["Unix/Linux", "Jest", "Apache Airflow", "bash", "PowerShell", "webpack"]
  ];

  return (
    <div>
      <Header />
      <Container>
        {skills.map((group, index) => (
          <Row key={index} className="mb-3" style={{ justifyContent: 'center' }}>
            {group.map((skill, skillIndex) => (
              <Col xs={4} sm={4} md={3} lg={2} className="d-flex justify-content-center m-1" key={skillIndex}>
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