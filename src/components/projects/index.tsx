import { Project, Block } from "./style";
const projects = [
    {
        name: "Staking Platform",
        img: "./staking.png",
        description:
            "Decentralized app that allows users to stake their tokens and earn rewards",
        link: "https://staking.astrogallery.io/",
        tech: [
            { img: "./react.svg", name: "React" },
            { img: "./sol.svg", name: "Solidity" },
            { img: "./web3.png", name: "Web3" }
        ]
    },
    {
        name: "Portfolio",
        img: "./staking.png",
        description:
            "Explore my portfolio website, a digital canvas where my skills and creativity come to life, offering a glimpse into my unique talents and projects.",
        link: "https://www.google.com",
        tech: [{ img: "./react.svg", name: "React" }]
    }
];
const Projects = () => {
    return (
        <Block>
            <h2>
                <span className="highlight">{"<"}</span>Projects{" "}
                <span className="highlight">{"/>"}</span>
                <div className="flex projects">
                    {projects.map((project, index) => {
                        return (
                            <Project key={index}>
                                <img src={project.img} alt={project.name} />
                                <span className="name">{project.name}</span>
                                <div className="desc">
                                    {project.description}
                                </div>
                                <span className="name">Technologies</span>
                                {
                                    <div className="flex tech">
                                        {project.tech.map((tech, index) => {
                                            return (
                                                <div key={index}>
                                                    <img
                                                        src={tech.img}
                                                        alt={tech.name}
                                                    />
                                                    {/* <span>{tech.name}</span> */}
                                                </div>
                                            );
                                        })}
                                    </div>
                                }
                            </Project>
                        );
                    })}
                </div>
            </h2>
        </Block>
    );
};
export default Projects;
