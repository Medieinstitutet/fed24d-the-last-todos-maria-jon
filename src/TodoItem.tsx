import type { Todo } from "./types/Todo";

type TodoItemProps = {
    todo: Todo;
    removeTodo: (id: number) => void;
    toggleDone: (id: number, done: boolean) => void;
}

export const TodoItem = ({ todo, removeTodo, toggleDone }: TodoItemProps) => {

    return <>
        <li key={todo.id}>
            <input 
                type="checkbox" 
                checked={todo.done} 
                id="todoDone" 
                onChange={() => toggleDone(todo.id, todo.done)}
            />
            {todo.content} 
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
        </li>
    </>
}