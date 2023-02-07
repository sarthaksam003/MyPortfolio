import React from "react";
import vid0 from "./proj0.gif";
import vid1 from "./proj1.gif";
import vid2 from "./proj2.gif";
import vid3 from "./proj3.gif";
import "./ProjectCarousel.css";
import { Carousel } from "react-responsive-carousel";

const ProjectCarousel = ({ deviceType }) => {
  return (
    <React.Fragment>
      <div className="slider">
        <Carousel>
          <div>
            <img src={vid0} alt="project0" />
            <p className="legend">Legend 0</p>
          </div>
          <div>
            <img src={vid1} alt="project1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={vid2} alt="project2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={vid3} alt="project3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default ProjectCarousel;
