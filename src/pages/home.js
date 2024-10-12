import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../photo.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function Home() {
  return (
    <div>
      <Container className="p-2">
        <Row className="m-3 align-items-center">
          <Col sm={12} lg={7} className="fstyle mt-5">
            <h3>
              Currently pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University, I am passionate about innovation and creating new things. My interests lie in developing creative solutions and leveraging technology to bring ideas to life.
            </h3>
          </Col>
          <Col sm={12} lg={5} className="mt-5 d-flex justify-content-center">
            <img src={photo} className="imgstyle" alt="Profile" />
          </Col>
        </Row>
<hr></hr>
        <Row className="m-5">
          <Col>
            <h1 className="fstyle">Intro</h1>
            <h4 className="fstyle">
              I was born and raised in Andhra Pradesh, India, where my passion for creating unique products and designs began. These interests have shaped my life path and experiences. I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, where I focus on innovation and technology. My journey has been defined by a commitment to creativity and the drive to bring ideas to life through design.
            </h4>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3>First Slide Label</h3>
                  <p  style={{color:'red'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3>Second Slide Label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3>Third Slide Label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  );
}

export default Home;
