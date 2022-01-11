import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

const Input = styled.input.attrs({ required: true, type: "text" })`
    background-color: ${(props) => props.bgColor};
    border: none;
    outline: none;
    height: 25px;
`;

export { Father, Box, Circle, Input };
