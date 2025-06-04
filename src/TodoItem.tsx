import { useState } from "react";
import type { Todo } from "./types/Todo";


type TodoItemProps = {
    todo: Todo;
    /*removeTodo: (id: number) => void;
    toggleDone: (id: number, done: boolean) => void;*/
}

export const TodoItem = ({ todo/*, removeTodo, toggleDone */}: TodoItemProps) => {
    // const [toggle]

    return <>
        <li key={todo.id}>
            <input type="checkbox" checked={todo.done} id="todoDone" />{todo.content} 
        </li>
    </>
}