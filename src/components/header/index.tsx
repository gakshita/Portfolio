import { HeaderCss } from "./style";
import { TypeAnimation } from "react-type-animation";

const Header: React.FC = () => {
    return (
        <HeaderCss>
            <div className="center">
                <div className="left">
                    <span className="small-txt">Hola!</span>
                    <h1 className="highlight">I'm Akshita</h1>
                    <h1>Goyal</h1>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Web Developer",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Blockchain Developer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ display: "inline-block" }}
                        className="small-txt"
                        repeat={Infinity}
                    />
                    <button className="btn">Resume</button>
                </div>
                <div className="right">
                    <img
                        src="./akshita.jpg"
                        alt="Akshita Goyal"
                        className="vertical-center "
                    />
                </div>
            </div>
        </HeaderCss>
    );
};

export default Header;