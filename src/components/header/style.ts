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

        @media (max-width: 600px) {
            flex-direction: column;
        }
    }

    .left {
        text-align: initial;
        h1 {
            animation: fade_in 2s;
        }
        .small-txt {
            font-size: 24px;
            margin-bottom: 10px;
            animation: fade_in 2s;
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
            width: fit-content;
        }

        @media (max-width: 600px) {
            text-align: center;

            .btn {
                margin: 20px auto 40px;
            }
            .small-txt {
                font-size: 16px;
                /* margin-bottom: 23px; */
                line-height: 38px;
            }
        }

        .txt-1 {
            font-size: 24px;
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
            animation: fade_in 1s;
        }

        @media (max-width: 600px) {
            img {
                height: 233px;
                width: 215px;
                margin-right: 0;
            }
        }

        @media (min-width: 601px) {
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            right: 0;
        }
    }
`;
