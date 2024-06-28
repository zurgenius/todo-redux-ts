import AddItem from './components/AddItem'
import TodoList from './components/TodoList'

function App() {
  
  return (
    <div className=' w-[80%] mx-auto flex flex-col items-center gap-10'>
      <h1 className=' text-5xl text-center font-bold pt-4'>Todo List</h1>
      <AddItem/>
      <TodoList/>
    </div>
  )
}

export default App
