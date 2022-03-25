import React from "react";
import "./Footer.css";
import * as AiIcons from "react-icons/ai";

const Footer = (props) => {
  return (
    <div className="footer-body">
      <div className={`${props.mode} socialHandles `}>
        <a
          href="https://www.facebook.com/iamwatchingyoumakestool/"
          target="_blank"
          rel="noreferrer"
        >
          <AiIcons.AiFillFacebook className={props.mode} />
        </a>
        <a
          href="https://www.instagram.com/child_with_a_mild/"
          target="_blank"
          rel="noreferrer"
        >
          <AiIcons.AiFillInstagram className={props.mode} />
        </a>
        <a
          href="https://www.linkedin.com/in/sarthak-sambharia-78b342145/"
          target="_blank"
          rel="noreferrer"
        >
          <AiIcons.AiFillLinkedin className={props.mode} />
        </a>
        <a
          href="https://github.com/sarthaksam003"
          target="_blank"
          rel="noreferrer"
        >
          <AiIcons.AiOutlineGithub className={props.mode} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
