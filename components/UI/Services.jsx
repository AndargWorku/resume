import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="System development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Full stack developer,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            As a dedicated software developer, my passion for creating innovative 
            solutions is matched only by my commitment to continuous learning and growth. With a strong foundation in languages such as Python, and JavaScript, I thrive in collaborative environments where I can apply my problem-solving skills to deliver impactful results. I am driven by the opportunity to tackle complex challenges and am constantly seeking new ways to expand my technical expertise. My goal is to contribute to cutting-edge projects that push the boundaries of what technology can achieve,
             while also mentoring and inspiring the next generation of developers.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
