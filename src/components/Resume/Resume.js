import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import DownloadButton from "./DownloadButton";
import "./Resume.css";

const Resume = (props) => {
  console.log(props.mode);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wybz6rf",
        "template_pum3um5",
        e.target,
        "7y7Ej8V7E-OoGCZ-8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className="ctr">
        <div className={`${props.mode} contact-form`}>
          <h1 className={`${props.mode} anim-lineUp`}>Contact </h1>
          <div className="emailFormContainer">
            <form className="emailForm fadeInAnim" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="resume-section">
          <h1 className={`${props.mode} anim-lineUp`}>Resume </h1>
          <p className={`${props.mode} fadeInAnim`}>
            Download a copy of my resume for reference
          </p>
          <a
            href="./Sarthak_Sambharia_Resume.pdf"
            download
            style={{
              textDecoration: "none",
              position: "relative",
              right: "60%",
            }}
            id="showButtonInPc"
          >
            <DownloadButton />
          </a>
          <a href="./Sarthak_Sambharia_Resume.pdf" download id="showButtonInMobiles">
            <DownloadButton />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
