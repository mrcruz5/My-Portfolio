import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

// ✅ Import local images
import Soft1 from "../../assets/Soft1.mp4"
import Soft2 from "../../assets/Soft2.png";
import cpe1 from "../../assets/cpe1.png";
import data1 from "../../assets/data1.png";

// ✅ Static local works data
const localWorks = [
  {
    title: "Price Prediction Accuracy Visualization",
    description: "Scatter plot of actual vs. predicted house prices with a reference line, evaluating the accuracy of a regression model.",
    imgUrl: data1,
    projectLink: "https://docs.google.com/document/d/1NR5fiQ2kZcFx5ArfF2jV6HWFoQ1GsGls2_2xvgbtYXs/edit?usp=sharing",
    codeLink: "https://github.com/mrcruz5",
    tags: ["Data Visualization"],
  },
  {
    title: "8-bit Computer CLOCK/PROGRAM COUNTER",
    description: "A functional clock and program counter module for an 8-bit computer",
    imgUrl: cpe1,
    projectLink: "https://docs.google.com/document/d/180VdzQNp9j8tSKF3gZeVObIeskxCz79w0d4pgIf8fTY/edit?usp=sharing",
    codeLink: "https://github.com/mrcruz5",
    tags: ["CPE"],
  },
  {
    title: "WebPrints",
    description: "WebPrints is an online platform for easy, high-quality document and photo printing delivered to your door.",
    videoUrl: Soft1,
    projectLink: "https://null/cpe",
    codeLink: "https://github.com/CGPixel/FlaskPSD",
    tags: ["Software Design"],
  },
  {
    title: "WebSched",
    description: "WebSched is a scheduling web app that helps users organize and access their weekly activities with ease.",
    imgUrl: Soft2,
    projectLink: "https://websched.pages.dev/",
    codeLink: "https://github.com/CPE408-CPE43S2-EoS/WebSched",
    tags: ["Software Design"],
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // ✅ Load static works data
    setWorks(localWorks);
    setFilterWork(localWorks);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {[ "All", "Software Design","Data Visualization", "CPE",].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                {work.videoUrl ? (
                  <video
                    src={work.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                ) : (
                  <img src={work.imgUrl} alt={work.title} />
                )}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex app__work-hover-icon"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex app__work-hover-icon"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
