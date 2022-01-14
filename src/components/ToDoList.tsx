import { useState } from 'react';
import {  useRecoilState, useRecoilValue} from 'recoil'
import { Categories, category, exportToDo, toDosAtom } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';


function ToDoList(){
    const [value,setValue] = useState(Categories.TO_DO);
    const toDos = useRecoilValue(exportToDo)
    const [curCategory,setCurCategory] = useRecoilState(category)
    const onInput = (event:React.FormEvent<HTMLSelectElement>) =>{
        const {currentTarget:{value}} = event
        setValue(Number(value))
        setCurCategory(Number(value))
    }
    return(
        <div>
            <select value={value} onInput={onInput}>
                <option value={Categories.TO_DO+''}>TODO</option>
                <option value={Categories.DOING+''}>DOING</option>
                <option value={Categories.DONE+''}>DONE</option>
            </select>
            <CreateToDo/>
            <br/>
            <ul>
                {toDos.map(toDo => toDo.category === curCategory ? <ToDo key={toDo.id} {...toDo} /> : null)}
            </ul>
        </div>
    )
}

export default ToDoList