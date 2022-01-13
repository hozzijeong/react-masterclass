import React from "react"
import {  useSetRecoilState} from "recoil"
import { ToDoProps, toDosAtom } from "../atom"


function ToDo({text,category,id}:ToDoProps){
    const setToDos= useSetRecoilState(toDosAtom)
    
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
        const {currentTarget:{name}} = event
        setToDos((curToDo) => {
            const curTargetIndex = curToDo.findIndex(toDo => toDo.id === id)
            const newToDo = {text,id,category:name as any}
            return [
                ...curToDo.slice(0,curTargetIndex),
                newToDo,
                ...curToDo.slice(curTargetIndex+1)
            ];
        })
    }

    return (<li>
        <span>{text}</span>
        {category !== 'TO_DO' && <button name='TO_DO' onClick = {onClick}>TODO</button>}    
        {category !== 'DOING' && <button name='DOING' onClick = {onClick}>Doing</button>}    
        {category !== 'DONE' && <button name='DONE' onClick = {onClick}>Done</button>}    
    </li>)
}

export default ToDo