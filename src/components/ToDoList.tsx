import { useRecoilState} from 'recoil'
import { toDosAtom } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';


function ToDoList(){
    const [toDos,_] = useRecoilState(toDosAtom)
    return(
        <div>
            <CreateToDo/>
            <br/>
            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </div>
    )
}

export default ToDoList