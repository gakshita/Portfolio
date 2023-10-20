import styled from "styled-components";

export const Project = styled.div`
    background-color: #ebe9f8;
    border-radius: 5px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 20px;
    font-size: 18px;
    max-width: 288px;
    img {
        height: 177px;
        width: 272px;
        margin-bottom: 10px;
        object-fit: cover;
    }
    .name {
        text-align: initial;
    }
    .desc {
        text-align: initial;
        font-size: 14px;
        font-weight: 400;
        margin: 20px 0;
    }
    .tech {
        justify-content: flex-start;
        img {
            height: 20px;
            width: auto;
            margin-right: 10px;
            margin-top: 10px;
        }
    }
`;

export const Block = styled.div`
    margin-top: 100px;
    .projects {
        margin-top: 30px;
    }
`;
