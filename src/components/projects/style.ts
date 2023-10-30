import styled from "styled-components";

export const Project = styled.div`
    background-color: #ebe9f8;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    max-width: 260px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    min-height: 421px;
    animation: scale_up 1s;

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

    &:hover {
        transform: scale(1.05);
        transition: transform 0.5s;
    }
`;

export const Block = styled.div`
    margin-top: 150px;
    .projects {
        margin-top: 30px;
        row-gap: 20px;
        column-gap: 20px;
    }
`;
