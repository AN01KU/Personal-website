import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'


const Projects = () => {

  const projects = [
    {
      title: 'ShareMe',
      description: 'An image sharing platform.',
      imgUrl: projImg1,
    },
    {
      title: 'VoteBlock',
      description: 'A blockchain based voting system.',
      imgUrl: projImg2,
    },
    {
      title: 'Blood Bank Manager',
      description: 'Digitized workflow of blood donation in India.',
      imgUrl: projImg3,
    },
    {
      title: 'Breast Cancer Prediction',
      description: 'A Machine Learning model to predict breast cancer.',
      imgUrl: projImg4,
    },
    {
      title: 'FoodBucks',
      description: 'A food managning website.',
      imgUrl: projImg5,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime est et laudantium exercitationem alias.
            </p>
            <Tab.Container id='project-tabs' defaultActiveKey='first'>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-itms-center" id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second' d>Tab two</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      <>
                        <ProjectCard
                          key={0}
                          {...projects[0]}
                        />
                        <ProjectCard
                          key={1}
                          {...projects[1]}
                        />
                        <ProjectCard
                          key={2}
                          {...projects[2]}
                        />
                      </>
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {
                      <>
                        <ProjectCard
                          key={3}
                          {...projects[3]}
                        />
                        <ProjectCard
                          key={4}
                          {...projects[4]}
                        />
                      </>
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='bkg-img' />
    </section>
  )
}

export default Projects