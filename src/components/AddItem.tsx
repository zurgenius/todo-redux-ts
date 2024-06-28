import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { addTodo } from "../state/todos/todoList.slice";
import { useState, useRef, FormEvent } from "react"

const AddItem = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatcher = useDispatch<AppDispatch>()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!inputValue) return
        dispatcher(addTodo({value: inputValue}))
        setInputValue('')
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="w-full flex justify-between gap-4 text-xl">
            <label htmlFor="addItem" className=" hidden">Add Item</label>
            <input 
            type="text"
            placeholder="Add Item" 
            ref={inputRef}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className=" border-black border-2 w-full rounded-xl p-6 placeholder:text-blue-700 "
            />
            <button 
            type="submit"
            aria-label="Add Item"
            onClick={() => inputRef.current?.focus()}
            className="border-2 border-black py-3 px-7 rounded-xl hover:bg-gray-300 transition-colors"
            >
            Submit
            </button >
        </form>
    )
}

export default AddItem