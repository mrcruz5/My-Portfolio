import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.facebook.com/Rmc1015"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsFacebook />
        </div>
      </a>
      <a
        href="https://github.com/mrcruz5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
