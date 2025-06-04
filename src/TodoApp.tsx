import { useState } from "react";
import type { Todo } from "./types/Todo";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, content: "Städa", done: false },
        { id: 2, content: "Gå ut med hunden", done: false },
        { id: 3, content: "Laga mat", done: false },
        { id: 4, content: "Koda", done: true }
    ]);

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    const toggleDone = (id: number, done: boolean) => {
        setTodos(
            todos.map((t) => {
                if(t.id === id) {
                    return { ...t, done: true };
                }
                return t;
            })
        );
    };

    return <>
        <TodoList todos={todos}></TodoList>
    </>
};