import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Andarg Worku</h2>
              <h5 className="mb-4">Full stack Developer and Mobile App(React Native) Developer</h5>
              <p>
              Experienced Full-Stack Developer specializing in the MERN stack, with a strong focus on building high performance, scalable applications. Proficient in mobile app development using React Native, creating
responsive and user-friendly solutions. Skilled in end-to-end development from front-end design to
back-end architecture. Known for delivering efficient code and collaborative project execution

              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="/images/cv.pdf" className="btn" target="_black">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                <i className="ri-npmjs-line"></i>
                </span>
                <span>
                <i className="ri-javascript-line"></i>
                </span>
                <span>
                <i className="ri-reactjs-line"></i>
                </span>
                <span>
                <i className="ri-html5-line"></i>
                </span>
                <span>
                <i className="ri-bootstrap-fill"></i>
                </span>
                <span>
                <i className="ri-css3-fill"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">3 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
