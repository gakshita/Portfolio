import { Project, Block } from "./style";
const projects = [
    {
        name: "Bet Game",
        img: "./bet.png",
        description:
            "A Coin Flip game where you can bet on the outcome of the coin flip to help drive engagement and increase the token holders.",
        link: "https://bets-delta.vercel.app/",
        tech: [
            { img: "./react.svg", name: "React" },
            { img: "./django.svg", name: "Django" }
        ]
    },
    {
        name: "Staking Platform",
        img: "./staking.png",
        description:
            "Built a decentralized app that allows users to stake their tokens and earn rewards for astrogallery.io.",
        link: "https://staking.astrogallery.io/",
        tech: [
            { img: "./react.svg", name: "React" },
            { img: "./sol.svg", name: "Solidity" },
            { img: "./web3.png", name: "Web3" }
        ]
    },
    {
        name: "Portfolio",
        img: "./portfolio.png",
        description:
            "Explore my portfolio website, a digital canvas where my skills and creativity come to life, offering a glimpse into my unique talents and projects.",
        link: "https://akshita.vercel.app/",
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
                            <a key={index} href={project.link} target="_blank">
                                <Project>
                                    <img src={project.img} alt={project.name} />
                                    <span className="name">{project.name}</span>
                                    <div className="desc">
                                        {project.description}
                                    </div>
                                    <span className="tech">Technologies</span>
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
                            </a>
                        );
                    })}
                </div>
            </h2>
        </Block>
    );
};
export default Projects;
