"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//      THIS IS THE index.js file!!!   =>becomes it afte build{npm run build}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new todo_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        const newTodo = yield todo.save();
        const allTodos = yield todo_1.default.find();
        res.status(201).json({
            message: "Todo added", todo: newTodo, todos: allTodos
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield todo_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTodos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo updated", todo: updateTodo, todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteTodo = yield todo_1.default.findByIdAndRemove(req.params.id);
        const allTodos = yield todo_1.default.find();
        res.status(200).json({ message: "Todo deleted", todo: deleteTodo, todos: allTodos, });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTodo = deleteTodo;
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
