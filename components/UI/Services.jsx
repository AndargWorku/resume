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
                <ServicesItem title="Mobile App Development" icon="ri-apps-line" />

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
            <h3 className="mb-0 mt-4 text-white">Better Full stack developer,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            I am a dedicated software developer with a passion for creating impactful solutions and a commitment to continuous learning. Skilled in TypScript and JavaScript, I excel in collaborative environments that leverage my problem-solving abilities. I aim to contribute to innovative projects and inspire the next generation of developers.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
