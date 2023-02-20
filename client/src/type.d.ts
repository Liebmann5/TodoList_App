//Pretty sure this is the one we send to the API!!!
//??BUT pretty sure _id is made when we 1st add the todo to
//MongoDB so why is it here?? I assume null just for shape!?
interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface TodoProps {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}