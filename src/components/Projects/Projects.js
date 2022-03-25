import React from "react";
import vid1 from "./Carousel/proj1.gif";
import vid2 from "./Carousel/proj2.gif";
import vid3 from "./Carousel/proj3.gif";
import ProjectCard from "./ProjectCard";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";

const Projects = () => {
  return (
    <React.Fragment>
      <div style={{ margin: "8% 5% 5% 5%", padding: "0%" }}>
        <Carousel indicators={false} variant="dark">
          <Carousel.Item>
            <ProjectCard
              vid1={vid1}
              projectId="project1"
              heading="Evil Oni"
              linkToProject="https://evil-oni.web.app/"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ProjectCard
              vid1={vid2}
              projectId="project2"
              heading="Delhi Herald"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ProjectCard
              vid1={vid3}
              linkToProject="https://flickfinder-66ec5.web.app"
              projectId="project3"
              heading="Flick Finder"
              style={{ width: "120%" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default Projects;
