import React from "react";
import classes from "./DownloadButton.module.css";
import * as BsIcons from "react-icons/bs";
const DownloadButton = (props) => {
  return (
    <React.Fragment>
      <button className={`${classes.button} fadeInAnim`}>
        <span className={classes.icon}>
          <BsIcons.BsDownload />
        </span>
        <label>Download Resume</label>
      </button>
    </React.Fragment>
  );
};

export default DownloadButton;
