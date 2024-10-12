import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import{useNavigate} from 'react-router-dom'

function Resume(){
    const navigate=useNavigate();
    function move(){
        navigate('/project');
    }
    return(
        <div>
       <Container>
        <Row>
            <Col sm={12} lg={12}><h3 className="re mt-5">My Resume</h3></Col>
            <Col sm={12} lg={12} className="mt-5">
            <Tab.Container id="left-tabs-example" >
      <Row>
        <Col sm={4} lg={5}>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="tab">Education </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="tab">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="tab">Extracurricular Activities</Nav.Link>
              <Nav.Link eventKey="" className="tab" onClick={move}>Projects</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} lg={7}><hr></hr>
          <Tab.Content>
            <Tab.Pane eventKey="first" className="tab1 mt-5"><h5 className="tab11">I am a 3rd-year B.Tech Computer Science Engineering (CSE) student at Lovely Professional University, maintaining a CGPA of 7.99 after completing two years of coursework. My academic journey has equipped me with a strong foundation in core computer science concepts, allowing me to actively explore and apply my skills in developing innovative solutions in the tech industry.</h5></Tab.Pane>
            <Tab.Pane eventKey="second" className="tab1 mt-5"><h5 className="tab11"><span className="un">Web Development:</span> Proficient in HTML, CSS, JavaScript, jQuery, Bootstrap, Express, Node.js, MongoDB, and React.</h5>
<h5 className="tab11"><span className="un">Programming Languages: </span>Skilled in C++ and Java.</h5>
<h5 className="tab11"><span className="un">Freelancing: </span>Experience in applying technical expertise to real-world projects as a freelancer.</h5></Tab.Pane>
<Tab.Pane eventKey="third" className="tab1 mt-5"><h5 className="tab11"><span className="un">Electrical Component Design and Implementation:</span><h5 className="tab11">Developed electrical-based components, including torch lights and automatic light systems for home use.</h5><h5 className="tab11">Designed innovative models and implemented them effectively, ensuring functionality and user satisfaction.</h5><h5 className="tab11">Conducted thorough testing to validate performance and reliability of the components, enhancing practical skills in engineering and problem-solving.</h5></h5></Tab.Pane>
          </Tab.Content>
          <hr></hr>
        </Col>
      </Row>
    </Tab.Container>
            
            </Col>
        </Row>
       </Container>
        </div>
    )
}
export default Resume;