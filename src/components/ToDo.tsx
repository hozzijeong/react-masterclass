import React from "react"
import {  useSetRecoilState} from "recoil"
import { Categories, ToDoProps, toDosAtom } from "../atom"


function ToDo({text,category,id}:ToDoProps){
    const setToDos= useSetRecoilState(toDosAtom)
    
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
        const {currentTarget:{name}} = event
        setToDos((curToDo) => {
            const curTargetIndex = curToDo.findIndex(toDo => toDo.id === id)
            const newToDo = {text,id,category:Number(name) as any}
            return [
                ...curToDo.slice(0,curTargetIndex),
                newToDo,
                ...curToDo.slice(curTargetIndex+1)
            ];
        })
    }

    return (<li>
        <span>{text}</span>
        {category !== Categories.TO_DO && <button name={Categories.TO_DO+''} onClick = {onClick}>ToDo</button>}    
        {category !== Categories.DOING && <button name={Categories.DOING+''} onClick = {onClick}>Doing</button>}    
        {category !== Categories.DONE && <button name={Categories.DONE+''} onClick = {onClick}>Done</button>}    
    </li>)
}

export default ToDo