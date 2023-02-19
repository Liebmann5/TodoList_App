import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)
//How do we know which /\ to choose?? Are all URL's the created equal??{/??}

export default router

//FCC: As you can see here, we have four routes to get, add, update, and delete todos
//from the database. And since we already created the functions, the only thing we
//have to do is import the methods and pass them as parameters to handle the requests.

//Q: So I assume f(n)'s are what we made which is the variable = callback but is there
//a benefit to making the methods that way vs traditional -> static void method() {}??
