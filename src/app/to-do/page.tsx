import ToDoCrud from "@/components/todo-crud"

const ToDoList = () => {


    return (
        <div className="bg-white p-10 w-screen h-screen overflow-auto">
            <div className="flex justify-center mt-1 gap-x-10">
                <div className="text-black font-bold border border-solid rounded-sm p-2 cursor-pointer">Using Cred Operation</div>
                <div className="text-black font-bold border border-solid rounded-sm p-2 cursor-pointer">Using Drag&Drop Operation</div>
            </div>
            <div>
                <ToDoCrud/>
            </div>
        </div>
    )
}

export default ToDoList