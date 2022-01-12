import React, { useState } from "react";
import styled from "styled-components";


const Wrapperr = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
`

const Input = styled.input`
    color: ${props => props.theme.textColor};
    background-color: ${props=>props.theme.bgColor};
    text-align:center;
    outline:none;
    border:none;
`

function App() {
    const [value,setValue] = useState<string|number>("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        console.log(event.target,event.currentTarget)
    }

    return (
        <Wrapperr>
            <Input value={value} type='text' onChange={onChange}/>
        </Wrapperr>
    );
}

export default App;
