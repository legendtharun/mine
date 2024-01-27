import { useEffect, useRef } from "react";
import "./Home.css";
import { motion, useInView, useAnimation } from "framer-motion";
export default function Home() {
  const head = useRef(null);
  const isInView = useInView(head, { once: false });
  useEffect(() => {
    if (isInView) {
      motionControls.start("visible");
    }
  }, [isInView]);
  const motionControls = useAnimation();
  return (
    <>
      <div className="container-fluid card1 " id="home">
        <div className="homehead">
          <motion.div
            ref={head}
            className="homehead1"
            variants={{
              hidden: { opacity: 0.1, y: 55, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            initial="hidden"
            animate={motionControls}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h1>
              <span className="notspecial">
                {" "}
                Hi Im, <br /> MANIKANDAN{" "}
              </span>
              <span className="special">THARUN</span> .
            </h1>
            <h3 align="center">
              <span className="notspecial">WEB AND ART </span>
              <span className="special">DESIGNER</span>
            </h3>
            <a href="https://drive.google.com/drive/folders/1owsmgFHMlvQEiiCZ0io4yHD_gp-zAe2m?usp=sharing">
              <button className="btn">Download Resume</button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
