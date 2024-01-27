import "./Contact.css";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Contact() {
  return (
    <>
      <div className="container-fluid" id="contact">
        <div className="container contact">
          <div className="row">
            <h3>Contact</h3>
            <hr />
            <div className="col-lg-6">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="f177c396-b79c-4bee-8482-50ea73f86225"
                />
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="name"
                    placeholder="Name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group subject">
                  <input
                    type="text"
                    name="message"
                    className="form-control"
                    id="exampleInputSub1"
                    aria-describedby="sub"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group subject">
                  <textarea
                    type="text"
                    name="message"
                    className="form-control"
                    id="exampleInputmsg1"
                    aria-describedby="msg"
                    placeholder="Message"
                    required
                  />
                </div>
                <button type="submit" className="btn cbtn">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-1"> </div>
            <div className="col-lg-5 secondside">
              <span>
                <h4>Manikandan Tharun</h4>
                <p>Web and Art Designer</p>
              </span>
              <span>
                <h6>Phone</h6>
                <p>+91 9514426346</p>
              </span>
              <span>
                <h6>Email</h6>
                <p>manikandan.p2023@vitstudent.ac.in</p>
              </span>
              <span>
                <h6>Website</h6>
                <p>
                  <a href="#">legendtharun.Website</a>
                </p>
              </span>
              <span>
                <a href="https://www.instagram.com/__.mxnithxrxn.__?igsh=Y2N2MXo1eWg0MHg0">
                  <FiInstagram id="prof_icon1" />
                </a>
                <a href="https://twitter.com/Manikan1337897?t=WNBNGcy2387d2YlvKcB8rg&s=09">
                  <FaXTwitter id="prof_icon1" />
                </a>
                <a href="https://www.linkedin.com/in/mani-tharun05/">
                  <FaLinkedinIn id="prof_icon1" />
                </a>
                <a href="https://github.com/legendtharun/">
                  <IoLogoGithub id="prof_icon1" />
                </a>
                <a href="https://wa.me/qr/RHAJTG6XCO7WK1">
                  <FaWhatsapp id="prof_icon1" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manikandan211205@gmail.com&su=SUBJECT&body=BODY">
                  <BiLogoGmail id="prof_icon1" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <small className="">
          © Copyright M | T. Design And Developed By M | T
        </small>
      </div>
    </>
  );
}
