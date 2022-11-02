import React, { useRef } from "react";
import "./styles.css";

interface IInputFieldsProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFields: React.FC<IInputFieldsProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    handleAdd(e);
    inputRef.current?.blur();
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="input_box"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  );
};

export default InputFields;
