import { NavbarCss } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const onScroll = () => {
        if (window.scrollY >= 80) {
            document.querySelector(".nav")?.classList.add("scrolled");
        } else {
            document.querySelector(".nav")?.classList.remove("scrolled");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <NavbarCss>
            <div className="nav">
                <div className="left">Akshita</div>
                <div className="right">
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
                </div>
            </div>
        </NavbarCss>
    );
};
export default Navbar;
