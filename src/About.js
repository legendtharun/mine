import "./About.css";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import profileimg from "./profile.jpg";
export default function About() {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-md-7 first_part">
            <h3>ABOUT</h3>

            <h5>I am a Professional UI/UX Designer and Web developer.</h5>
            <p>
              Greetings! I'm Mani, a passionate web designer on a mission to
              blend creativity with functionality. With a wizard's touch in web
              design and a sorcerer's command over Python, I bring ideas to life
              in the digital realm. My commitment is simple yet profound:
              crafting visually stunning websites and elegant solutions. Let's
              embark on a journey to turn your vision into an immersive online
              experience. Welcome to my digital atelier! 💻✨ #WebDesign
              #CreativeAlchemy
            </p>
            <p>
              "Passionate Python Developer with a knack for crafting robust and
              scalable solutions. Proficient in leveraging the power of Python
              to build dynamic web applications, automation scripts, and
              data-driven solutions. Adept at problem-solving and keen on
              staying up-to-date with the latest industry trends.
            </p>
            <hr />
            <ul>
              <li>
                <h5>Phone</h5>
                +91 9514426346
              </li>
              <li>
                <h5>Email</h5>manikandan.p2023@vitstudent.ac.in
              </li>
              <li>
                <h5>Website</h5>legendtharun.Website
              </li>
            </ul>
          </div>
          <div className="col-md-5 photo">
            <div className="small_details">
              <img className="image" src={profileimg} />
              <div className="small_div">
                <ul className="small_icons">
                  <li>
                    <a href="https://www.instagram.com/__.mxnithxrxn.__?igsh=Y2N2MXo1eWg0MHg0">
                      <FiInstagram id="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Manikan1337897?t=WNBNGcy2387d2YlvKcB8rg&s=09">
                      <FaXTwitter id="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/legendtharun/">
                      <IoLogoGithub id="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mani-tharun05/">
                      <FaLinkedinIn id="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
