import { TodoItem } from "./TodoItem";
import type { Todo } from "./types/Todo";

type TodoListProps = {
    todos: Todo[];
    removeTodo: (id: number) => void;
    toggleDone: (id: number, done: boolean) => void;
}

export const TodoList = ({todos, removeTodo, toggleDone}: TodoListProps) => {
    return (
        <>
            <h2>Att göra</h2>
            <ul>
                {todos.map((t) => (
                    <TodoItem todo={t} removeTodo={removeTodo} toggleDone={toggleDone}></TodoItem>
                ))}
            </ul>
        </>
    );
};