import { TodoItem } from "./TodoItem";
import type { Todo } from "./types/Todo";

type TodoListProps = {
    todos: Todo[];
}

export const TodoList = ({todos}: TodoListProps) => {
    return (
        <>
            <h2>Att göra</h2>
            <ul>
                {todos.map((t) => (
                    <TodoItem todo={t}></TodoItem>
                ))}
            </ul>
        </>
    );
};