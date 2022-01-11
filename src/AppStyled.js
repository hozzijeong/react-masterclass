import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const rotationAnimation = keyframes`
    from{
        transform: rotate(0deg)
        border-radius:0px
    }
    to{
        transform: rotate(360deg);
        border-radius:50px
    }
`;

const Emoji = styled.span`
    font-size: 36px;
`;

const Box = styled.div`
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    animation: ${rotationAnimation} 1s linear infinite;

    ${Emoji} {
        &:hover {
            font-size: 72px;
            font-weight: bold;
        }
    }
`;

export { Wrapper, Box, Emoji };
