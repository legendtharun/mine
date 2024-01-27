import "./Profile.css";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
export default function Profile() {
  const proficon = useRef(null);
  const profInView = useInView(proficon, { once: false });
  const motionControl = useAnimation();
  useEffect(() => {
    // console.log(profInView);
    motionControl.start("visible");
  }, [profInView]);
  return (
    <>
      <div className="container profile" id="profile">
        <h3>Profile</h3>
        <hr />
        <motion.div
          className="profile1"
          ref={proficon}
          variants={{
            hidden: {
              opacity: 0.1,
              filter: "blur(5px)",
              transform: "translateX(25%)",
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateX(0%)",
            },
          }}
          initial="hidden"
          animate={motionControl}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <a href="https://www.instagram.com/__.mxnithxrxn.__?igsh=Y2N2MXo1eWg0MHg0">
            <FiInstagram id="prof_icon" />
          </a>
          <a href="https://twitter.com/Manikan1337897?t=WNBNGcy2387d2YlvKcB8rg&s=09">
            <FaXTwitter id="prof_icon" />
          </a>
          <a href="https://www.linkedin.com/in/mani-tharun05/">
            <FaLinkedinIn id="prof_icon" />
          </a>
          <a href="https://github.com/legendtharun/">
            <IoLogoGithub id="prof_icon" />
          </a>
          <a href="https://wa.me/qr/RHAJTG6XCO7WK1">
            <FaWhatsapp id="prof_icon" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manikandan211205@gmail.com&su=SUBJECT&body=BODY">
            <BiLogoGmail id="prof_icon" />
          </a>
        </motion.div>
      </div>
    </>
  );
}
