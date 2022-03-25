import React from "react";
import { ProjectDetails } from "./ProjectDetails";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const content = ProjectDetails[`${props.projectId}`].map((detail) => {
    return <li className="anim-lineUp">{detail}</li>;
  });
  return (
    <div className="projects-body">
      <div className="projectcard">
        <div id="projectImage">
          <img
            src={props.vid1}
            alt={props.heading}
            // style={{ width: "50%" }}
          />
        </div>
        <ul>
          <h1 className="anim-lineUp">{props.heading}</h1>
          {content}
          <br />
          {props.linkToProject !== undefined ? (
            <a
              href={props.linkToProject}
              target="_blank"
              rel="noreferrer"
              className="anim-lineUp"
              id="linkToProject"
            >
              Check out this app
            </a>
          ) : (
            <p>&nbsp;</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
