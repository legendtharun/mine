import { useEffect, useRef } from "react";
import "./Projects.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import { motion, useInView, useAnimation } from "framer-motion";
export default function Projects() {
  const project = useRef(null);
  const projInView = useInView(project);
  const MotionControls = useAnimation();
  useEffect(() => {
    MotionControls.start("visible");
  }, [projInView]);
  return (
    <>
      <div className="outerproject" id="project">
        <div className="container project">
          <h3>Projects</h3>
          <hr />
          <div className="cardbox">
            <div className="row" ref={project}>
              <div className="col-lg-4">
                <a href="https://visionary-cassata-d4c41c.netlify.app/">
                  <motion.div
                    className="card plate"
                    variants={{
                      hidden: { opacity: 0.1, transform: "translateX(-50%)" },
                      visible: {
                        opacity: 1,
                        transform: "translateX(0%)",
                      },
                    }}
                    initial="hidden"
                    animate={MotionControls}
                    transition={{ duration: 1.7, delay: 0.5 }}
                  >
                    <img
                      className="card-img-top"
                      src={project1}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">A sample commercial website.</p>
                    </div>
                  </motion.div>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="https://legendtharun.github.io/flames">
                  <motion.div
                    className="card plate"
                    variants={{
                      hidden: { opacity: 0.1, transform: "translateX(-100%)" },
                      visible: { opacity: 1, transform: "translateX(0%)" },
                    }}
                    initial="hidden"
                    animate={MotionControls}
                    transition={{ duration: 1.7, delay: 0.5 }}
                  >
                    <img
                      className="card-img-top"
                      src={project2}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">A real flames calculator.</p>
                    </div>
                  </motion.div>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="https://sunny-griffin-ecd0be.netlify.app/">
                  <motion.div
                    className="card plate"
                    variants={{
                      hidden: { opacity: 0.1, transform: "translateX(-150%)" },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transform: "translateX(0%)",
                      },
                    }}
                    initial="hidden"
                    animate={MotionControls}
                    transition={{ duration: 1.7, delay: 0.5 }}
                  >
                    <img
                      className="card-img-top"
                      src={project3}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">A ecommerce website.</p>
                    </div>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
