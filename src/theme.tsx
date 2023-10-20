const darktheme = {
    primary: "#b85ee6",
    secondary: "#eee",
    border: "#878787",
    text: "#000",
    background: "antiquewhite",
    indicator: "#ccc"
};

const lightTheme = {
    primary: "#b85ee6",
    secondary: "#eee",
    border: "#878787",
    textColor: "#000",
    background: "#ddd6fe",
    indicator: "#ccc"
};

const defaultTheme = {
    fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xxxl: "24px"
    },
    borderRadius: {
        small: "5px",
        medium: "10px",
        large: "15px",
        circle: "50%"
    }
};

const theme = {
    dark: {
        color: darktheme,
        ...defaultTheme
    },
    light: {
        color: lightTheme,
        ...defaultTheme
    }
};

export default theme;
