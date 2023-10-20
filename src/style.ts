import styled, { css } from "styled-components";

export const Root = styled.div`
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.textColor};

    .container {
        max-width: 1100px;
        margin: auto;
        min-height: 100vh;
        position: relative;
        width: 100%;

        // position: relative;
    }
    .highlight {
        color: ${({ theme }) => theme.color.primary};
    }
`;

export const Footer = styled.div`
    color: #7d8294;
    padding: 2rem;
    padding-top: 5rem;
`;
