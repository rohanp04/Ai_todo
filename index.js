import {db} from './db/index.js';
import { todoTable } from './db/schema.js';
import { ilike, eq } from 'drizzle-orm';


async function getAllTodos(){
    const todos = await db.select().from(todoTable);
    return todos;
}

async function createTodo(todo){
    const newTodo = await db.insert(todoTable).values({ todo });
}

async function deleteTodoById(id){
    await db.delete(todoTable).where(eq(todoTable.id, id));
}

async function searchTodo(search){
    const todos = await db
        .select()
        .from(todoTable)
        .where(ilike(todoTable.todo, search));
    return todos;
}