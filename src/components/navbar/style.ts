import styled from "styled-components";
export const NavbarCss = styled.div`
    // background-color: #ffffff40;
    display: flex;
    justify-content: center;
    .nav {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        position: fixed;
        width: 1200px;
        z-index: 1000;
    }
    .scrolled {
        backdrop-filter: saturate(180%) blur(10px);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        // background-color: #ffffff40;
    }
    .left {
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 3px;
    }

    .right {
        .social {
            cursor: pointer;
            // color: ${({ theme }) => theme.color.primary};
            font-size: 25px;
        }

        .social:not(:last-child) {
            margin-right: 30px;
        }

        .social:hover {
            color: ${({ theme }) => theme.color.primary};
        }
    }
`;
