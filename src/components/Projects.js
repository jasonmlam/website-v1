import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import GasUp from "../assets/img/gasUp.png";
import AlgoQuant from "../assets/img/AlgoQuant.png";
import soundlink from "../assets/img/soundlink.png";
import klove from "../assets/img/klove.png";
import lotsayachts from "../assets/img/lotsayachts.png";
import Roomies from "../assets/img/Roomies (1).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AlgoQuant",
      description: "Web/Mobile Application (Investing App)",
      imgUrl: AlgoQuant,
      projUrl: "https://www.figma.com/file/1gShf96Z55hNaz0tYU97rO/AlgoQuant-Web-App",
    },
    {
      title: "GasUp",
      description: "Winner of 2022 ShellHacks Sustainability Award (Ride-Share App)",
      imgUrl: GasUp,
      projUrl: "https://github.com/ryPattillo/GasUp",
    },
    {
      title: "soundlink",
      description: "(Playlist-Sharing App)",
      imgUrl: soundlink,
      projUrl: "https://soundlink.app/",
    },
    {
      title: "klove",
      description: "(Real-Estate App)",
      imgUrl: klove,
      projUrl: "https://klove.herokuapp.com/",
    },
    {
      title: "lotsayachts",
      description: "(Contact Manager)",
      imgUrl: lotsayachts,
      projUrl: "https://github.com/Rob123450/SmallProject",
    },
    {
      title: "Roomies",
      description: "(Modularity App)",
      imgUrl: Roomies,
      projUrl: "https://www.figma.com/file/okO4wCsBasWW7CLn6SNaBh/Roomies",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
