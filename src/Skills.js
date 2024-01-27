import { useEffect, useRef } from "react";
import "./Skills.css";
import { useInView } from "framer-motion";
export default function Skills() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  useEffect(() => {
    // console.log(isInview);
  }, [isInview]);
  return (
    <>
      <div className="container skills" id="skills">
        <h3>Skills</h3>
        <hr />

        <div className="row">
          <div className="col-md-6">
            <h4>HTML</h4>
            <div className="singleskill">
              <div
                className="perbarin"
                ref={ref}
                style={{ width: isInview ? "95%" : "0%" }}
              ></div>
              <span className="inspan">95%</span>
            </div>
            <h4>CSS3</h4>
            <div className="singleskill">
              <div
                className="perbarin"
                ref={ref}
                style={{ width: isInview ? "90%" : "0%" }}
              ></div>
              <span className="inspan">90%</span>
            </div>
            <h4>JavaScript</h4>
            <div className="singleskill">
              <div
                className="perbarin"
                ref={ref}
                style={{ width: isInview ? "80%" : "0%" }}
              ></div>
              <span className="inspan">80%</span>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Bootstrap</h4>
            <div className="singleskill">
              <div
                className="perbarin"
                ref={ref}
                style={{ width: isInview ? "85%" : "0%" }}
              ></div>
              <span className="inspan">85%</span>
            </div>
            <h4>JQuery</h4>
            <div className="singleskill">
              <div
                className="perbarin"
                ref={ref}
                style={{ width: isInview ? "70%" : "0%" }}
              ></div>
              <span className="inspan">70%</span>
            </div>
            <h4>ReactJs</h4>
            <div className="singleskill">
              <div
                className="perbarin"
                ref={ref}
                style={{ width: isInview ? "70%" : "0%" }}
              ></div>
              <span className="inspan">70%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
