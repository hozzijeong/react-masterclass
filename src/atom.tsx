import { atom, selector } from "recoil";

/**
 * Selector를 사용해서 코드를 좀 더 이쁘게 만들어 보기
 * enum을 사용해서 (상수처럼) 혹시 모를 실수를 방지하기.
 */

// export enum Categories {
//     "TO_DO",
//     "DOING",
//     "DONE",
// }

export interface ICategory {
    [key: string]: number;
}

export const Category: ICategory = {
    TO_DO: 0,
    DOING: 1,
    DONE: 2,
};

export const categoryAtom = atom<ICategory>({
    key: "categoryAtom",
    default: Category,
});

export interface ToDoProps {
    id: number;
    text: string;
    category: Number;
}

export const toDosAtom = atom<ToDoProps[]>({
    key: "toDo",
    default: localStorage.getItem("toDo")
        ? JSON.parse(localStorage.getItem("toDo") as string)
        : [],
});

export const category = atom<Number>({
    key: "category",
    default: 0, // 왜 Category 프로퍼티에 접근이 안되나?
});

export const exportToDo = selector({
    key: "exportToDo",
    get: ({ get }) => {
        const curToDos = get(toDosAtom);
        const curCategory = get(category);
        return curToDos.filter((toDo) => toDo.category === curCategory);
    },
});
