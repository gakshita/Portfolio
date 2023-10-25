import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Root, Footer } from "./style";
import theme from "./theme";
import { ITheme } from "./theme";
import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
    const [count, setCount] = useState(0);
    const [currentTheme, setCurrentTheme] = useState("light");

    return (
        <ThemeProvider theme={theme[currentTheme as keyof ITheme]}>
            <Root>
                <Navbar />
                <div className="container">
                    <Header />
                    <Skills />
                    <Projects />

                    <Footer> Copyright © 2023, Akshita Goyal</Footer>
                </div>
            </Root>
        </ThemeProvider>
    );
}

export default App;
