import { Father, Box, Circle, Input } from "./AppStyled";

function App() {
    return (
        <div>
            <Father as="header">
                <Box bgColor="red" />
                <Circle bgColor="orange" />
            </Father>
            <Input bgColor="red" />
            <Input bgColor="black" />
            <Input bgColor="blue" />
            <Input bgColor="green" />
            <Input bgColor="yellow" />
        </div>
    );
}

export default App;
