import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";

export default function Navbar(props) {
  const [but, togbut] = React.useState(false);
  function Toggle() {
    togbut(!but);
  }
  const Toggler = () => {
    if (but) {
      return <RxCross1 id="mobtog" onClick={Toggle} />;
    } else {
      return <RxHamburgerMenu id="mobtog" onClick={Toggle} />;
    }
  };
  const MobdarkButton = () => {
    Toggle();
    props.value.ToggleTheme();
  };
  const mobtext = props.value.theme === "dark" ? "Light Mode" : "Dark Mode";
  return (
    <>
      <div className="navbar">
        <div className="container">
          <h4>
            <a id="brand" href="">
              M | T
            </a>
          </h4>
          <div className="options">
            <ul>
              <li>
                <Link
                  to="education"
                  spy={true}
                  smooth={false}
                  offset={-100}
                  duration={1000}
                  id="link"
                  activeStyle={{ color: "#35AFB1" }}
                >
                  EDUCATION
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={false}
                  offset={-100}
                  duration={500}
                  id="link"
                  activeStyle={{ color: "#35AFB1" }}
                >
                  SKILLS
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  spy={true}
                  smooth={false}
                  offset={-100}
                  duration={500}
                  id="link"
                  activeStyle={{ color: "#35AFB1" }}
                >
                  PROJECT
                </Link>
              </li>
              <li>
                <Link
                  to="profile"
                  spy={true}
                  smooth={false}
                  offset={-100}
                  duration={500}
                  id="link"
                  activeStyle={{ color: "#35AFB1" }}
                >
                  PROFILE
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={false}
                  offset={-200}
                  duration={500}
                  id="link"
                  activeStyle={{ color: "#35AFB1" }}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                {mobtext}
                <ReactSwitch
                  id="button"
                  onChange={props.value.ToggleTheme}
                  checked={props.value.theme === "dark"}
                />
              </li>
            </ul>
          </div>
          <Toggler />
        </div>
      </div>
      <ul className="mobmenu" style={but ? { right: 0 } : { right: -2000 }}>
        <Link
          to="education"
          spy={true}
          smooth={false}
          offset={-100}
          duration={1000}
          onClick={Toggle}
          id="moblink"
        >
          <li> EDUCATION</li>
        </Link>

        <Link
          to="skills"
          spy={true}
          smooth={false}
          offset={-100}
          duration={1000}
          onClick={Toggle}
          id="moblink"
        >
          <li>SKILLS</li>
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={false}
          offset={-100}
          duration={1000}
          onClick={Toggle}
          id="moblink"
        >
          <li>PROJECT</li>
        </Link>
        <Link
          to="profile"
          spy={true}
          smooth={false}
          offset={-100}
          duration={1000}
          onClick={Toggle}
          id="moblink"
        >
          <li>PROFILE</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={false}
          offset={-100}
          duration={1000}
          onClick={Toggle}
          id="moblink"
        >
          <li>CONTACT</li>
        </Link>
        <Link id="moblink" onClick={MobdarkButton}>
          <li>{mobtext}</li>
        </Link>
      </ul>
    </>
  );
}
