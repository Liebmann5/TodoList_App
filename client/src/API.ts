import axios, { AxiosResponse } from "axios"
//^ How we request data from the API

const baseURL: string = "http://localhost:4000"

//This f(n) gets us data from the server
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        //FCC:return a promise of type AxiosResponse that holds the Todos fetched
        //that need to match the type ApiDataType
        const todos: AxiosResponse<ApiDataType> = await axios.get(baseURL + "/todos")
        return todos
    }
    catch (error) {
        //throw new Error(error)
        throw error
    }
}

export const addTodo = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        //Q: How or what made the _id variable????
        const todo: Omit<ITodo, "_id"> ={
            name: formData.name,
            description: formData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(baseURL + "/add-todo", todo)
        return saveTodo
    }
    catch(error) {
        throw error
    }
}

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, "status"> = { status: true, }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(`${baseURL}/edit-todo/${todo._id}`, todoUpdate)
        return updatedTodo
    }
    catch(error) {
        throw error
    }
}

export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(`${baseURL}/delete-todo/${_id}`)
        return deletedTodo
    }
    catch(error) {
        throw error
    }
}