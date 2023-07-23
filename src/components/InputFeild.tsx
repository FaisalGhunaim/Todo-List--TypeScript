import React from "react";
import "./style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild = ({ todo, setTodo, handleAdd }: props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        go
      </button>
    </form>
  );
};

export default InputFeild;
