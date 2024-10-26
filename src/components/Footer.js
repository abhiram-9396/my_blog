import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 mt-5">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/abhiram-gatreddi-093455188/" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/abhiram-9396" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <p>&copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
