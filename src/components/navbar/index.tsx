import { NavbarCss } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Socials from "../socials";

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
                <div className="left">
                    <img src="/Akshita.png" alt="logo" className="logo" />
                </div>
                <Socials />
            </div>
        </NavbarCss>
    );
};
export default Navbar;
