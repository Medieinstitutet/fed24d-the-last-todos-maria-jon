import { useState, useEffect } from "react";
import type { Todo } from "./types/Todo";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
    const loadTodosFromLocalStorage = () => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [
            { id: 1, content: "Städa", done: false },
            { id: 2, content: "Gå ut med hunden", done: false },
            { id: 3, content: "Laga mat", done: false },
            { id: 4, content: "Koda", done: true }
        ];
    };

    const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]); 

    const addTodo = (content: string) => {
        const newTodo: Todo = {
            id: Date.now(), 
            content: content,
            done: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    const toggleDone = (id: number) => {
        setTodos(
            todos.map((t) => {
                if(t.id === id) {
                    return { ...t, done: !t.done };
                }
                return t;
            })
        );
    };

    return <>
        <TodoList todos={todos} removeTodo={removeTodo} toggleDone={toggleDone}></TodoList>
        <AddTodo addTodo={addTodo}></AddTodo>
    </>
};