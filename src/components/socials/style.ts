import styled from "styled-components";
export const SocialsCss = styled.div`
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
`;
