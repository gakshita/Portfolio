import styled from "styled-components";

export const HeaderCss = styled.div`
    margin: 0;
    width: 100%;
    min-height: 100vh;
    position: relative;
    .center {
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .left {
        text-align: initial;

        .small-txt {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .btn {
            background-color: ${({ theme }) => theme.color.primary};
            border: none;
            outline: none;
            color: white;
            border-radius: 5px;
            padding: 10px 23px;
            display: block;
            font-size: 18px;
            margin-top: 20px;
        }
    }
    .right {
        position: relative;
        img {
            height: 304px;
            width: 288px;
            object-fit: none;
            margin-right: 40px;
            border-radius: 30% 70% 67% 33% / 30% 30% 70% 70%;
        }
    }
`;
