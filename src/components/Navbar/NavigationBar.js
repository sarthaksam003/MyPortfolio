import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import "./NavigationBar.css";
import Backdrop from "./Backdrop/Backdrop";

const NavigationBar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [mode, setMode] = useState("Light");
  const [bing, setBing] = useState(true);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setShowBackdrop(!showBackdrop);
  };

  const radioButtonHandler = () => {
    setMode(mode === "Light" ? "Dark" : "Light");
    props.fetchMode(mode);
    setBing(!bing);
    // console.log(mode);
  };

  return (
    <React.Fragment>
      <div className="navbar-layout">
        <IconContext.Provider value={{ color: "#fff" }} style={{ zIndex: "2" }}>
          <div className="navbar" style={{ zIndex: "2" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>
                My<p>Portfolio</p>
              </h1>
            </Link>
            <span
              className="menu-bars"
              style={{ cursor: "pointer" }}
              onClick={toggleSidebar}
            >
              {bing && (
                <FaIcons.FaBars
                  onClick={toggleSidebar}
                  style={{ color: "white" }}
                />
              )}
              {!bing && (
                <FaIcons.FaBars
                  onClick={toggleSidebar}
                  style={{ color: "black" }}
                />
              )}
              <Backdrop show={showBackdrop} />
            </span>
          </div>
          <nav
            className={sidebar ? "nav-menu zeeind active" : " zeeind nav-menu"}
          >
            <ul className="nav-menu-items" onClick={toggleSidebar}>
              <li className="navbar-toggle">
                <span style={{ cursor: "pointer" }} className="menu-bars">
                  <BsIcons.BsBoxArrowInLeft />
                </span>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.clsname}
                    style={{ marginRight: "-30rem" }}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div id="mode-switch">
              <p style={{ width: "5rem" }}>{mode} Mode</p>
              <div className="form-check form-switch radio custom-control custom-switch">
                <input
                  className="form-check-input custom-control-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={radioButtonHandler}
                />
              </div>
            </div>
          </nav>
        </IconContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
