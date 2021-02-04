import React, { useRef } from "react";
import "./NewTodo.css";

interface NewAddProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewAddProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text"> New Task </label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit"> ADD TAST </button>
    </form>
  );
};

export default NewTodo;