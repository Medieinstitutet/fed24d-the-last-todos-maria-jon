import { useState, type FormEvent, type ChangeEvent } from "react";
import type { Todo } from "./types/Todo";

type AddTodoProps = {
    addTodo: (content: string) => void;
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {
    const [newTodoContent, setNewTodoContent] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodoContent(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (newTodoContent.trim() === "") return;
        addTodo(newTodoContent);
        setNewTodoContent("");
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>
                <span>
                    Ny att-göra-punkt:
                </span>
                <input 
                    type="text" 
                    value={newTodoContent}
                    onChange={handleChange}
                />
            </label>
            <button>Lägg till</button>
        </form>
    </>

}