import {useForm} from 'react-hook-form'
import {atom, useRecoilState} from 'recoil'
/**
 * useForm을 통해 Validation 구현하기.
 * 
 */
interface ToDoProps{
    id:number,
    text:string,
    category: "TO_DO" | "DOING" | "DONE"
}
interface FormProps{
    toDo:string
}

const toDosAtom = atom<ToDoProps[]>({
    key:'toDo',
    default:[]
})

function ToDoList(){
    const {register,handleSubmit,setValue,} = useForm<FormProps>();
    const [toDos,setToDos] = useRecoilState(toDosAtom)
    const onSubmit = ({toDo}:FormProps) =>{
        setToDos(cur => [{id:Date.now(),category:'TO_DO',text:toDo},...cur])
        setValue('toDo',"")
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('toDo', {required:"write To Do!!"})} placeholder='write To Do SMT'/>
                <button>Add</button>
            </form>
            <br/>
            <ul>
                {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>

    )
}

export default ToDoList