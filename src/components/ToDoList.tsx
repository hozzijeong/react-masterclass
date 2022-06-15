import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    category,
    exportToDo,
    toDosAtom,
    Category,
    categoryAtom,
} from "../atom";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
// Categories
// Allow users to create custom categories.
function ToDoList() {
    const [value, setValue] = useState(Category.TO_DO);
    const categoryItems = useRecoilValue(categoryAtom);
    const toDos = useRecoilValue(exportToDo);
    const [curCategory, setCurCategory] = useRecoilState(category);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(Number(value));
        setCurCategory(Number(value));
    };

    const getOptions = () => {
        const arr = [];
        for (const [key, value] of Object.entries(categoryItems)) {
            arr.push(
                <option key={key} value={value + ""}>
                    {key}
                </option>,
            );
        }
        return arr;
    };
    console.log(categoryItems);
    return (
        <div>
            <CreateCategory />
            <select value={value} onInput={onInput}>
                {getOptions()}
                {/* <option value={Category.TO_DO + ""}>TODO</option>
                <option value={Category.DOING + ""}>DOING</option>
                <option value={Category.DONE + ""}>DONE</option> */}
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
