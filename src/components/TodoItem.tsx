import { useDispatch } from "react-redux"
import { changeStatus, deleteTodo } from "../state/todos/todoList.slice"
import { AppDispatch } from "../state/store";
import { todoObject } from "../state/todos/todoList.slice";

const TodoItem = ({id, value, completed}: todoObject) => {
    const dispatcher = useDispatch<AppDispatch>()

    const handleCheckboxClick = () => {
        dispatcher(changeStatus({id}))
    }
    const handleDeleteButtonClick = () => {
        dispatcher(deleteTodo({id}))
    }

    return (
        <li className=" text-xl flex w-full justify-between items-center border-b border-gray-600 pb-3">
            <label>{value}</label>
            <div className=" flex gap-3 items-center">
                <input 
                type="checkbox" 
                checked={completed} 
                onClick={handleCheckboxClick}
                className="w-5 h-5"
                />
                <button 
                onClick={handleDeleteButtonClick}
                className="border-2 border-black py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >Delete</button>
            </div>
        </li>
    )
}

export default TodoItem