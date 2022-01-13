import { atom } from "recoil";

export interface ToDoProps{
    id:number,
    text:string,
    category: "TO_DO" | "DOING" | "DONE"
}

export const toDosAtom = atom<ToDoProps[]>({
    key:'toDo',
    default:[]
})