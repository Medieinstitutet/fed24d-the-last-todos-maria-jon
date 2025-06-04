import { TodoItem } from "./TodoItem";
import type { Todo } from "./types/Todo";

type TodoListProps = {
    todos: Todo[];
}

export const TodoList = ({todos}: TodoListProps) => {
    return (
        <>
            {todos.map((t) => (
                <TodoItem todo={t}></TodoItem>
            ))}
        </>
    );
};