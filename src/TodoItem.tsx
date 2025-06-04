import { useState } from "react";
import type { Todo } from "./types/Todo";


type TodoItemProps = {
    todo: Todo;
    removeTodo: (id: number) => void;
    toggleDone: (id: number, done: boolean) => void;
}

export const TodoItem = ({ todo, removeTodo, toggleDone }: TodoItemProps) => {
    const [toggleTodo, setToggleTodo] = useState("");

    return <>
        <li key={todo.id}>
            <input 
                type="checkbox" 
                checked={todo.done} 
                id="todoDone" 
                onChange={() => toggleDone(todo.id, todo.done)}
                // onChange={(e) => setToggleTodo({...todo, [e.target.id]: e.target.checked})}
            />
            {todo.content} 
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
        </li>
    </>
}