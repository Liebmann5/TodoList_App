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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodo = void 0;
var todo_1 = require("../../models/todo");
//          THIS IS CRUD!!!
//We'll use this f(n) getTodos() to fetch data
//It recieves a req & res parameter and returns a promise
var getTodo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var todos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, todo_1["default"].find()];
            case 1:
                todos = _a.sent();
                res.status(200).json({ todos: todos });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTodo = getTodo;
var addTodo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, todo, newTodo, allTodos, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                body = req.body;
                todo = new todo_1["default"]({
                    name: body.name,
                    description: body.description,
                    status: body.status
                });
                return [4 /*yield*/, todo.save()];
            case 1:
                newTodo = _a.sent();
                return [4 /*yield*/, todo_1["default"].find()
                    //??? Why does this ^ITodo get an [] all of a sudden???
                ];
            case 2:
                allTodos = _a.sent();
                //??? Why does this ^ITodo get an [] all of a sudden???
                res.status(201).json({
                    message: "Todo added", todo: newTodo, todos: allTodos
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                throw error_2;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addTodo = addTodo;
var updateTodo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, updateTodo_1, allTodos, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id, body = req.body;
                return [4 /*yield*/, todo_1["default"].findByIdAndUpdate({ _id: id }, body)];
            case 1:
                updateTodo_1 = _a.sent();
                return [4 /*yield*/, todo_1["default"].find()];
            case 2:
                allTodos = _a.sent();
                res.status(200).json({
                    message: "Todo updated", todo: updateTodo_1, todos: allTodos
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                throw error_3;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateTodo = updateTodo;
var deleteTodo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deleteTodo_1, allTodos, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, todo_1["default"].findByIdAndRemove(req.params.id)];
            case 1:
                deleteTodo_1 = _a.sent();
                return [4 /*yield*/, todo_1["default"].find()];
            case 2:
                allTodos = _a.sent();
                res.status(200).json({ message: "Todo deleted", todo: deleteTodo_1, todos: allTodos });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                throw error_4;
            case 4: return [2 /*return*/];
        }
    });
}); };
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

PS C:\Users\user\OneDrive\Documents\GitHub\NotificationsApp>
*/ 
