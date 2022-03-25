import React from "react";
import "./About.css";
import jsLogo from "./jsLogo.png";
import htmlLogo from "./htmlLogo.png";
import cssLogo from "./cssLogo.png";
import reactLogo from "./reactLogo.png";

const About = () => {
  return (
    <React.Fragment>
      <div
        className="aboutContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="about-body" id="aboutBody">
          <div className="heading headingAnim">
            <h1>ABOUT ME</h1>
          </div>
          <div className="contentbox">
            <p>
              I have done Btech in Computer Science in 2019 from Maharaja
              Surajmal Institute of Technology, affiliated to GGSIPU. I've
              always had an inclination towards art and designing, creating
              stuff I can visualize.
            </p>
          </div>
          <div className="heading headingAnim">
            <h1>MY SKILLS</h1>
          </div>
          <div className="skillsbox">
            <div className="skill fadeInAnim">
              HTML5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="progressbar">
              <div className="progressBarFill" id="HTML">
                <label>80%</label>
              </div>
            </div>
          </div>
          <div className="skillsbox">
            <div className="skill fadeInAnim">
              CSS3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="progressbar">
              <div className="progressBarFill" id="CSS">
                <label>80%</label>
              </div>
            </div>
          </div>
          <div className="skillsbox">
            <div className="skill fadeInAnim">JavaScript</div>
            <div className="progressbar">
              <div className="progressBarFill" id="JS">
                <label>70%</label>
              </div>
            </div>
          </div>
          <div className="skillsbox">
            <div className="skill fadeInAnim">ReactJS&nbsp;&nbsp;&nbsp;</div>
            <div className="progressbar">
              <div className="progressBarFill" id="ReactJS">
                <label>60%</label>
              </div>
            </div>
          </div>
        </div>
        <div className="imagesBox">
          <div className="singleImageBox">
            <img src={htmlLogo} className="htmlLogo" alt="HTML5" />
            <img src={cssLogo} alt="CSS3" />
          </div>
          <br />
          <div className="singleImageBox">
            <img src={jsLogo} alt="JavaScript" className="jsLogo" />
            <img src={reactLogo} alt="ReactJS" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
