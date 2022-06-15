import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom } from "../atom";
import { setLocalStorage } from "../Storage/localStorage";

interface FormProps {
    category: string;
}

function CreateCategory() {
    const { register, handleSubmit, setValue } = useForm<FormProps>();
    const [categories, setCategories] = useRecoilState(categoryAtom);
    const onSubmit = ({ category }: FormProps) => {
        const val = Object.values(categories).length;
        const newData = { ...categories };
        newData[category] = val;
        setCategories(newData);
        setValue("category", "");
        setLocalStorage(
            "category",
            JSON.stringify({ ...categories, ...newData }),
        );
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("category", { required: "write To category!!" })}
                placeholder="write category SMT"
            />
            <button>Add</button>
        </form>
    );
}

export default CreateCategory;
