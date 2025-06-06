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
            <ul>
                {todos.map((t) => (
                    <TodoItem todo={t} key={t.id} removeTodo={removeTodo} toggleDone={toggleDone}></TodoItem>
                ))}
            </ul>
        </>
    );
};