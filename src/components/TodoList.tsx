import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { RootState } from "../state/store";


const TodoList = () => {
    const todos = useSelector((state:RootState) => state.todoList.value)
    return (
        <ul className=' w-full flex flex-col gap-6'>
            {
                todos && todos.map((todo) => (
                    <TodoItem 
                        key={todo.id}
                        id={todo.id}
                        value={todo.value}
                        completed={todo.completed}
                    ></TodoItem>
                ))
            }
        </ul>
        
    )
}

export default TodoList