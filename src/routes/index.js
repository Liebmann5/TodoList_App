"use strict";
exports.__esModule = true;
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = (0, express_1.Router)();
router.get("/todos", todos_1.getTodos);
router.post("/add-todo", todos_1.addTodo);
router.put("/edit-todo/:id", todos_1.updateTodo);
router["delete"]("/delete-todo/:id", todos_1.deleteTodo);
//How do we know which /\ to choose?? Are all URL's the created equal??{/??}
exports["default"] = router;
//FCC: As you can see here, we have four routes to get, add, update, and delete todos
//from the database. And since we already created the functions, the only thing we
//have to do is import the methods and pass them as parameters to handle the requests.
//Q: So I assume f(n)'s are what we made which is the variable = callback but is there
//a benefit to making the methods that way vs traditional -> static void method() {}??
