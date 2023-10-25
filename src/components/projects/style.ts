import styled from "styled-components";

export const Project = styled.div`
    background-color: #ebe9f8;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 20px;
    font-size: 18px;
    max-width: 288px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    min-height: 390px;

    // display: table-cell;
    img {
        border-radius: 5px;
        height: 177px;
        margin-bottom: 10px;
        object-fit: cover;
    }
    .name {
        text-align: initial;
        font-weight: 600;
    }
    .tech {
        text-align: initial;
        font-size: 15px;
        font-weight: 600;
    }
    .desc {
        text-align: initial;
        font-size: 14px;
        font-weight: 400;
        margin: 10px 0 20px;
        opacity: 0.8;
        line-height: 19px;
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
        // display: table;
    }
`;
