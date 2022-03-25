import React from "react";
import "./Home.css";
import avatar from "./avatar.png";

const Home = (props) => {
  console.log(props.mode);
  return (
    <React.Fragment>
      <div className="home-body">
        <div className="body">
          <img src={avatar} className="avatar-animation" alt="f" />
        </div>
        <div className={`${props.mode} alignD `}>
          <h1 className={`${props.mode} lineUpAnim`}>Hi! I'm Sarthak.</h1>
          <div className={`${props.mode} fadeInAnim`}>
            <h2>
              I create webapps by combining visual design & web development.
              <br />
              <br />
              With my knowledge of Front-End Development, I understand the
              intricacies of the web and am able to design and build around them
              effectively.
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
