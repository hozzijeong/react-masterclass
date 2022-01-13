import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDosAtom } from "../atom";

interface FormProps{
    toDo:string
}



function CreateToDo(){
    const {register,handleSubmit,setValue,} = useForm<FormProps>();
    const setToDos = useSetRecoilState(toDosAtom)
    const onSubmit = ({toDo}:FormProps) =>{
        setToDos(cur => [{id:Date.now(),category:'TO_DO',text:toDo},...cur])
        setValue('toDo',"")
    }
    return  (<form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('toDo', {required:"write To Do!!"})} placeholder='write To Do SMT'/>
    <button>Add</button>
</form>)
}

export default CreateToDo;