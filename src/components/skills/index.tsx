import { Skill, Block } from "./style";
const skills = [
    {
        name: "React",
        logo: "./react.svg"
    },
    {
        name: "Django",
        logo: "./django.svg"
    },
    {
        name: "js",
        logo: "./js.svg"
    },
    {
        name: "Python",
        logo: "./python.svg"
    },
    {
        name: "Solidity",
        logo: "./sol.svg"
    },
    {
        name: "Web3",
        logo: "./web3.png"
    },
    {
        name: "NextJs",
        logo: "./nextjs.svg"
    },
    {
        name: "Postgres",
        logo: "./sql.png"
    },
    {
        name: "GraphQL",
        logo: "./graphql.svg"
    },
    {
        name: "Typescript",
        logo: "./ts.svg"
    }
];
const Skills = () => {
    return (
        <Block>
            <h2>
                <span className="highlight">{"<"}</span>Technical Skills{" "}
                <span className="highlight">{"/>"}</span>
            </h2>
            <div className="flex skills">
                {skills.map((skill, index) => {
                    return (
                        <Skill key={index}>
                            <img src={skill.logo} alt={skill.name} />
                            <span>{skill.name}</span>
                        </Skill>
                    );
                })}
            </div>
        </Block>
    );
};
export default Skills;
