import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Category, ToDoProps, toDosAtom, categoryAtom } from "../atom";

// Categories
function ToDo({ text, category, id }: ToDoProps) {
    const setToDos = useSetRecoilState(toDosAtom);
    const categoryItems = useRecoilValue(categoryAtom);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((curToDo) => {
            const curTargetIndex = curToDo.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: Number(name) as any };
            const newArr: ToDoProps[] = [
                ...curToDo.slice(0, curTargetIndex),
                newToDo,
                ...curToDo.slice(curTargetIndex + 1),
            ];
            localStorage.setItem("toDo", JSON.stringify(newArr));

            return newArr;
        });
    };

    const getButton = () => {
        const arr = [];
        for (const [key, value] of Object.entries(categoryItems)) {
            arr.push(
                category !== value && (
                    <button name={value + ""} onClick={onClick}>
                        {key}
                    </button>
                ),
            );
        }
        return arr;
    };

    return (
        <li>
            <span>{text}</span>
            {getButton()}
            {/* {category !== Category.TO_DO && (
                <button name={Category.TO_DO + ""} onClick={onClick}>
                    ToDo
                </button>
            )}
            {category !== Category.DOING && (
                <button name={Category.DOING + ""} onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== Category.DONE && (
                <button name={Category.DONE + ""} onClick={onClick}>
                    Done
                </button>
            )} */}
        </li>
    );
}

export default ToDo;
