import { SocialsCss } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
    return (
        <SocialsCss>
            <a
                href="https://www.linkedin.com/in/akshita-goyal15/"
                target="_blank"
                className="social"
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>{" "}
            <a
                href="https://github.com/gakshita"
                target="_blank"
                className="social"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>{" "}
        </SocialsCss>
    );
};
export default Socials;
