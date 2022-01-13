import { useState } from "react"
import {useForm} from 'react-hook-form'

/**
 * useForm을 통해 Validation 구현하기.
 * 
 */

interface FormProps{
    toDo:string
}

function ToDoList(){
    const {register,handleSubmit} = useForm<FormProps>();
    const onSubmit = (data:FormProps) =>{
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('toDo', {required:"write To Do!!"})} placeholder='write To Do SMT'/>
                <button>Add</button>
            </form>
        </div>

    )
}

export default ToDoList