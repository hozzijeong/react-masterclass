import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { category, toDosAtom } from "../atom";

interface FormProps {
    toDo: string;
}

function CreateToDo() {
    const { register, handleSubmit, setValue } = useForm<FormProps>();
    const [toDos, setToDos] = useRecoilState(toDosAtom);
    const curCategory = useRecoilValue(category);
    const onSubmit = ({ toDo }: FormProps) => {
        const data = { id: Date.now(), category: curCategory, text: toDo };
        setToDos((cur) => [data, ...cur]);
        localStorage.setItem("toDo", JSON.stringify([data, ...toDos]));
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("toDo", { required: "write To Do!!" })}
                placeholder="write To Do SMT"
            />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;
