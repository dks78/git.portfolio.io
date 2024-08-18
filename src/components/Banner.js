import { Container , Row , Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenu sur mon Portfolio</span>
                       <h1>{`Salut , je m'apelle Aurélien`}<span className="wrap">déveloper web </span></h1>
                       <p>lorem prensation futur texte , en attente de  la conqstruction du cette partie , bonjdouanddf dssdbfs</p>
                       <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Herader img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}