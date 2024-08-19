import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export const Banner = () => {

    // texte deroulant 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Bonjour , je m'apelle Aurélien étudiant en dev "];
    const period = 1000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])



    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    // fin du text deroulant 

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center ">
                    <Col xs={12} md={6} xl={7} className="d-flex flex-column justify-content-center align-items-center text-center">
                        <span className="tagline">Bienvenu sur mon Portfolio</span>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Déterminer a réussire dans se métier , je mes mon energies a apprendre le metier avec les
                            cour sur Udémy et sur des vidéo youtube , Passioné par le Seigneur Jésus-Christ et son évangile
                            je compte bien utilisé mon futur métier pour la cause de l'évangile
                        </p>
                        <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        <a href="#competence">
                            <div class="flex-container">
                                <div class="mouse-icon">
                                    <div class="wheel"></div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img id="imageHeader" src={headerImg} alt="Herader img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}