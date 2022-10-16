
import CIcon from "../assets/img/icons8-c-programming-100.png";
import protoIcon from "../assets/img/icons8-figma-48.png";
import reactIcon from "../assets/img/icons8-react-100.png";
import javaIcon from "../assets/img/icons8-java-100.png";
import gitIcon from "../assets/img/Git-Icon-1788C.png";
import JSIcon from "../assets/img/icons8-javascript-100.png";
import angularIcon from "../assets/img/icons8-angularjs-100.png";
import pythonIcon from "../assets/img/icons8-python-100.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <h2>Tools</h2>
                      <p>Here are some tools that I've grown comfortable working with.</p>
                      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                              <img src={reactIcon} alt="" />
                              <h5>React</h5>
                          </div>
                          <div className="item">
                              <img src={protoIcon} alt="" />
                              <h5>Figma</h5>
                          </div>
                          <div className="item">
                              <img src={javaIcon} alt="" />
                              <h5>Java</h5>
                          </div>
                          <div className="item">
                              <img src={CIcon} alt="" />
                              <h5>C</h5>
                          </div>
                          <div className="item">
                            <img src={gitIcon} alt=""/>
                            <h5>Git</h5>
                          </div>
                          <div className="item">
                            <img src={JSIcon} alt=""/>
                            <h5>JavaScript</h5>
                          </div>
                          <div className="item">
                            <img src={angularIcon} alt=""/>
                            <h5>Angular</h5>
                          </div>
                          <div className="item">
                            <img src={pythonIcon} alt=""/>
                            <h5>Python</h5>
                          </div>
                      </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
