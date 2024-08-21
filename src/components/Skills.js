import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import js from "../assets/img/java-script.png";
import htmlcss from "../assets/img/html-five.svg";
import reacte from "../assets/img/science.png";
import python from "../assets/img/python.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProgressBar } from 'react-bootstrap';

export const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Pour que l'animation se déclenche chaque fois
        threshold: 0.1,
    });

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [inView]);

    useEffect(() => {
        function handleScrollAnimations() {
            document.querySelectorAll('.scroll-animateImage1').forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Attacher les événements de défilement et de chargement de contenu
        window.addEventListener('scroll', handleScrollAnimations);
        document.addEventListener('DOMContentLoaded', handleScrollAnimations);

        // Nettoyer les événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScrollAnimations);
            document.removeEventListener('DOMContentLoaded', handleScrollAnimations);
        };
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <section className="skill " id="skills" ref={ref}>
            <div className="container scroll-animateImage1" >
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item   ">
                                    <img src={htmlcss} alt="HTML/CSS" />
                                    <ProgressBar
                                        className="progressBarHtml "
                                        now={70}
                                        label={`HTML/CSS ${70}%`}
                                    />
                                </div>
                                <div className="item   ">
                                    <img src={python} alt="Python" />
                                    <ProgressBar
                                        className="progressBarPyton"
                                        now={26}
                                        label={`Python ${26}%`}
                                    />
                                </div>
                                <div className="item    ">
                                    <img src={reacte} alt="React" />
                                    <ProgressBar
                                        className="progressBarReact"
                                        now={40}
                                        label={`React ${40}%`}
                                    />
                                </div>
                                <div className="item    ">
                                    <img src={js} alt="JavaScript" />
                                    <ProgressBar
                                        className="progressBarJs"
                                        now={60}
                                        label={`JavaScript ${60}%`}
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#competence">
                <div class="flex-container" id="IconeSkills">
                    <div class="mouse-icon">
                        <div class="wheel"></div>
                    </div>
                </div>
            </a>
        </section>
    )
}
