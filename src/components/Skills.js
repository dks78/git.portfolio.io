import { Container, Row, Col, Carousel } from "react-bootstrap";
import Reacte from '../assets/img/react.jpg';
import htmlcss from '../assets/img/HTMLCSS.jpg';
import js from '../assets/img/Js.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Skills = () => {
    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Compétences</h2>
                            <p>Je suis un développeur web passionné</p>
                            <Carousel fade>
                                <Carousel.Item>
                                    <img  src={htmlcss} alt="HTML/CSS" />
                                    <Carousel.Caption className="TexteCarrousel">
                                        <h3>HTML/CSS</h3>
                                        <p>Création de mises en page et de styles avec HTML et CSS.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img  src={Reacte} alt="JavaScript" />
                                    <Carousel.Caption className="TexteCarrousel">
                                        <h3>JavaScript</h3>
                                        <p>Développement interactif avec JavaScript.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img  src={js} alt="React" />
                                    <Carousel.Caption className="TexteCarrousel">
                                        <h3>React</h3>
                                        <p>Création d'interfaces utilisateur avec React.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <div id="competence"></div>
            </Container>
        </section>
    );
};
