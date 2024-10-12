import '../App.css'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Project(){
    return(
       <div>
        <div className="hh">
  <h1 className="hh">  My Projects</h1>
        </div>
        <Container>
      <Row>
        <Col className="text-start mt-4 "><h2 className="hh text-decoration-underline">AeroGuide</h2></Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-start mt-4 " sm={11} lg={2}><a href="https://ankepallimahesh.github.io./aeroguide/" target="_blank"><Button variant="outline-light">Visit Website </Button></a></Col>
        <Col className="text-start mt-4 " sm={11} lg={10}><h5 style={{color:'white'}}>Developed a comprehensive platform designed for aspiring pilots to prepare for exams and book mentorship sessions. The platform offers a user-friendly interface that facilitates exam preparation and allows users to schedule appointments with mentors seamlessly.</h5></Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="text-start mt-4 "><h2 className="hh text-decoration-underline">Birthday Showcase</h2></Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-start mt-4 " sm={11} lg={2}><a href="https://ankepallimahesh.github.io/Dhanvika/" target="_blank"><Button variant="outline-light">Visit Website </Button></a></Col>
        <Col className="text-start mt-4 " sm={11} lg={10}><h5 style={{color:'white'}}> Created a personalized website for a client's birthday featuring custom sections like photo galleries, birthday wishes, videos, and an "About Her" section.

Utilized technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery deliver a user-friendly and visually appealing product.</h5></Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="text-start mt-4 "><h2 className="hhh text-decoration-underline">Collaborative Link Sharing Webpag</h2></Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-start mt-4 " sm={11} lg={2}><a href="https://skillstack-f97c6.web.app/" target="_blank"><Button variant="outline-light">Visit Website </Button></a></Col>
        <Col className="text-start mt-4 " sm={11} lg={10}><h5 style={{color:'white'}}>Developed a comprehensive platform designed for aspiring pilots to prepare for exams and book mentorship sessions. The platform offers a user-friendly interface that facilitates exam preparation and allows users to schedule appointments with mentors seamlessly.</h5></Col>
      </Row>
      <hr></hr>
    </Container>
       </div>
    )
}
export default Project;