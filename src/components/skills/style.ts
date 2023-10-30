import styled from "styled-components";

export const Skill = styled.div`
    background-color: #ebe9f8;
    border-radius: 13px;
    // padding: 1.75rem 3rem;
    display: flex;
    flex-direction: column;
    // margin: 20px 0 0 20px;
    font-size: 14px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 130px;
    height: 130px;
    img {
        height: 40px;
        max-width: 40px;
        margin: auto;
        margin-bottom: 10px;
    }
    .skill-container {
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    @keyframes scale_up {
        0% {
            transform: scale(0.5);
        }
        100% {
            transform: scale(1);
        }
    }
    animation: scale_up 1s;
`;

export const Block = styled.div`
    .skills {
        margin-top: 30px;
        row-gap: 20px;
        column-gap: 20px;
    }
`;
