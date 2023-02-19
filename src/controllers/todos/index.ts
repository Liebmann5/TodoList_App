import { Response, Request } from "express"
import { ITodo } from "./../../types/todo"
import Todo from "../../models/todo"
//          THIS IS CRUD!!!


//We'll use this f(n) getTodos() to fetch data
    //It recieves a req & res parameter and returns a promise
const getTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        res.status(200).json( {todos} )
    }
    catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        //!!!!!!!! WEIRD SYNTAX !!!!!!!!
        const body = req.body as Pick<ITodo, "name" | "description" | "status">

        const todo: ITodo = new Todo( {
            name: body.name,
            description: body.description,
            status: body.status,
        })

        const newTodo: ITodo = await todo.save()
        const allTodos: ITodo[] = await Todo.find()
        //??? Why does this ^ITodo get an [] all of a sudden???
        res.status(201).json({ 
            message: "Todo added", todo: newTodo, todos: allTodos 
        })
    }
    catch (error) {
        throw error
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        //? Why does body need a ,?????
        //IDEA: Maybe it's b/c we only wanna save the first 2 values to our variables &
        //then read but ignore the rest??
        const { params: { id }, body, } = req
        //^Confused what the heck this line is doing??      |           v remember _id is label in db!!
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate( { _id: id }, body)
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json( {     //v are todo & todos freshly declared variables?? where'd we get'em?
            message: "Todo updated", todo: updateTodo, todos: allTodos,
        })
    }
    catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleteTodo: ITodo | null = await Todo.findByIdAndRemove(req.params.id)
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json( { message: "Todo deleted", todo: deleteTodo, todos: allTodos, } )
    }
    catch (error) {
        throw error
    }
}

export { getTodo, addTodo, updateTodo, deleteTodo }




























/* 
NOTE: Always test your code genius!!!!

Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> yarn --version
1.22.19
PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> typescript --version
typescript : The term 'typescript' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct  
and try again.
At line:1 char:1
+ typescript --version
+ ~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (typescript:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> tsc --version
Version 4.9.4
PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> tsc index.ts
error TS6053: File 'index.ts' not found.
  The file is in the program because:
    Root file specified for compilation


Found 1 error.

PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> tsc src\controllers\todos\index.ts
src/controllers/todos/index.ts:22:46 - error TS2344: Type '"name" | "status" | " description"' does not satisfy the constraint 'keyof ITodo'.
  Type '" description"' is not assignable to type 'keyof ITodo'. Did you mean '"description"'?

22         const body = req.body as Pick<ITodo, "name" | " description" | "status">
                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/controllers/todos/index.ts:24:21 - error TS2749: 'Todo' refers to a value, but is being used as a type here. Did you mean 'typeof Todo'?

24         const todo: Todo = new Todo( {
                       ~~~~

src/controllers/todos/index.ts:26:31 - error TS2551: Property 'description' does not exist on type 'Pick<ITodo, "name" | "status" | " description">'. Did you mean ' description'?

26             description: body.description,
                                 ~~~~~~~~~~~

src/controllers/todos/index.ts:64:64 - error TS2552: Cannot find name 'deletedTodo'. Did you mean 'deleteTodo'?

64         res.status(200).json( { message: "Todo deleted", todo: deletedTodo, todos: allTodos, } )
                                                                  ~~~~~~~~~~~

  src/controllers/todos/index.ts:62:15
    62         const deleteTodo: ITodo | null = await Todo.findByIdAndRemove(req.params.id)
                     ~~~~~~~~~~
    'deleteTodo' is declared here.

src/controllers/todos/index.ts:71:10 - error TS2552: Cannot find name 'getTodos'. Did you mean 'getTodo'?

71 export { getTodos, addTodo, updateTodo, deleteTodo }
            ~~~~~~~~

  src/controllers/todos/index.ts:9:7
    9 const getTodo = async (req: Request, res: Response): Promise<void> => {
            ~~~~~~~
    'getTodo' is declared here.


Found 5 errors in the same file, starting at: src/controllers/todos/index.ts:22

PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> tsc src\controllers\todos\index.ts
PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp> 
*/