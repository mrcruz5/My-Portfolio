import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I build modern, responsive websites using React and other web technologies.",
    imgUrl: require("../../assets/about01.png"),
  },
  {
    title: "Data Analysis",
    description: "I analyze and visualize data using Python, Pandas, and Tableau.",
    imgUrl: require("../../assets/about02.png"),
  },
    {
    title: "Computer Networks",
    description: "Understands OSI model, IP addressing, subnetting, and basic network protocols.",
    imgUrl: require("../../assets/about03.png"),
  },
  {
   title: "Machine Learning",
    description: "Creating predictive models using Python, Scikit-learn, and basic AI concepts.",
    imgUrl: require("../../assets/about05.png"),
  },
  {
    title: "Logic Circuits Basics",
    description: "Knowledgeable in digital logic, microprocessors, and basic electronics.",
    imgUrl: require("../../assets/about04.png"),
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">Capabilities</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__lightgraybg"
);
