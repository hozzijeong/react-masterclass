import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { category, exportToDo, toDosAtom, Category } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
// Categories
// Allow users to create custom categories.
function ToDoList() {
    const [value, setValue] = useState(Category.TO_DO);
    const toDos = useRecoilValue(exportToDo);
    const [curCategory, setCurCategory] = useRecoilState(category);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(Number(value));
        setCurCategory(Number(value));
    };
    console.log(toDos);
    return (
        <div>
            <select value={value} onInput={onInput}>
                <option value={Category.TO_DO + ""}>TODO</option>
                <option value={Category.DOING + ""}>DOING</option>
                <option value={Category.DONE + ""}>DONE</option>
            </select>
            <CreateToDo />
            <br />
            <ul>
                {toDos.map((toDo) =>
                    toDo.category === curCategory ? (
                        <ToDo key={toDo.id} {...toDo} />
                    ) : null,
                )}
            </ul>
        </div>
    );
}

export default ToDoList;
