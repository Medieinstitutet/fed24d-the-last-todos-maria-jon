import { useState, type FormEvent, type ChangeEvent } from "react";

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
                    className="rounded-lg border-3 border-cyan-700 focus:border-slate-900"
                />
            </label>
            <button className="bg-cyan-700 text-neutral-50 hover:bg-slate-900">Lägg till</button>
        </form>
    </>

}