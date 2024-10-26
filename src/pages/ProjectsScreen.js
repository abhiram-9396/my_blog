import React from 'react'
import {Container, Row, Col, Image, Card, Button} from 'react-bootstrap'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import demovid from '../assets/subwaysurfers-demo.mp4'

const ProjectsScreen = () => {
  return (
    <div>
      <Header/>
        <Container>
          <Row>
            <Col>
              <Card id="profile" style={{ margin:'2',width: '100%', borderRadius: '16px', boxShadow: '2px black', padding: '1rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'900'}}>Subway Surfers Game Using Hand Gestures</Card.Title>
                  <Card.Text>
                  <p>
                    This is my Undergraduate Project, where I worked on playing the subway surfers game by using the hand gestures. I worked on Palm Detection models and Hand Landmarking Techniques using OpenCV in Python to detect the hand gestures made by the user and bind the gestures to the arrow keys to play the game. I have done research on how to reduce the latency and strived to achieve the best results in the user interaction with the interface.
                  </p>
                  <video class="object-fit-contain" width="75%" height="100%" autoplay controls>
                    <source src={require('../assets/subwaysurfers-demo.mp4')} type="video/ogg"/>
                  Your browser does not support the video tag.
                  </video>
                  </Card.Text>
                  <Button style={{borderRadius: '16px'}} variant="dark" target='_blank' href='https://github.com/abhiram-9396/subway-surfers'>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card id="profile" style={{ margin:'2',width: '100%', borderRadius: '16px', boxShadow: '2px black', padding: '1rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'900'}}>Library Management System</Card.Title>
                  <Card.Text>
                  <p>
                  The goal of this project is to create a Database that will allow the students and employees of the University of Central Missouri to access all the information they need regarding the books they desire to read. By using this Database, any student or employee can access the libraries database and search for thousands of books. We are introducing the way by which the users can filter the books by its Id, Title, Author, Genre and ISBN ( International Standard Book Number, a unique identifier for books ). By this feature it will be easy for the users to search from thousands of available books. We are having Three profiles in this project, they are Admin, Student and Librarian. The student can signup, loginto the application and view the books and their status in the library, request for a book, renew a book and view his profile. The admin has access to Add a book, Edit a book and Delete a book. The Librarian have access to CheckIn a book, CheckOut a book and Make a payment by the user.
                  </p>
                  </Card.Text>
                  <Button style={{borderRadius: '16px'}} variant="dark" target='_blank' href='https://github.com/abhiram-9396/ADB_LMS'>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card id="profile" style={{ margin:'2',width: '100%', borderRadius: '16px', boxShadow: '2px black', padding: '1rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'900'}}>Expense Tracker app</Card.Title>
                  <Card.Text>
                  <p>
                  Track your expenses effortlessly with this user-friendly Expense Tracker app. Built with React Native for Android, this intuitive tool lets you easily record and categorize your expenditures, set budgets, and gain valuable insights into your financial habits. Stay in control of your finances, all within the convenience of your Android device.
                  </p>
                  </Card.Text>
                  <Button style={{borderRadius: '16px'}} variant="dark" target='_blank' href='https://expo.dev/accounts/abhiram13/projects/Expense-Tracker/builds/116348f6-fa9d-40d8-83cc-4b7898267b0b'>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card id="profile" style={{ margin:'2',width: '100%', borderRadius: '16px', boxShadow: '2px black', padding: '1rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'900'}}>Photo Editor Web App</Card.Title>
                  <Card.Text>
                  <p>
                  Introducing my Python-powered web app created with Streamlit – a versatile photo editor at your fingertips! 📷✨

With this user-friendly web tool, you can easily upload your photos, apply various image manipulations like flipping or rotating, and even perform advanced image processing. Whether you want to enhance your snapshots or get creative with your pictures, this app has got you covered. Plus, once you're satisfied with the edits, you can conveniently download your masterpiece. Experience the world of photo editing, simplified and accessible, all thanks to this Python and Streamlit gem! 💻🖼️🎨
                  </p>
                  </Card.Text>
                  <Button style={{borderRadius: '16px'}} variant="dark" target='_blank' href='https://github.com/abhiram-9396/Streamlit-photo-app'>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card  id="profile" style={{ margin:'2',width: '100%', borderRadius: '16px', boxShadow: '2px black', padding: '1rem', marginTop: '3rem', fontFamily:'Arima', fontWeight:'500'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight:'900'}}>Recipe Notes app</Card.Title>
                  <Card.Text>
                  <p>
                  Discover the world of culinary delights with this Recipe Notes app, meticulously crafted using React Native for Android. Unlock a treasure trove of step-by-step guides on preparing a wide range of cuisines, from tantalizing Italian dishes to global favorites. Whether you're a seasoned chef or a kitchen novice, this app is your ultimate cooking companion. Explore, learn, and savor the flavors of the world, all in one place.
                  </p>
                  </Card.Text>
                  <Button style={{borderRadius: '16px'}} variant="dark" target='_blank' href='https://expo.dev/accounts/abhiram13/projects/RNCourse/builds/6d0fc5b6-8dc3-482c-b123-eed7665b5d47'>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default ProjectsScreen