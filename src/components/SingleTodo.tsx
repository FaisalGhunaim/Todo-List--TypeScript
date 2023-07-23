import React from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
interface props {
  item: Todo; //object itself
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ item, todos, setTodos }: props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((element) =>
        element.id === id ? { ...element, isDone: !element.isDone } : element
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id 
      })
    );
  };

  return (
    <form className="todos_single">
      {item.isDone ? (
        <s className="todos_single_text">{item.todoo}</s>
      ) : (
        <span className="todos_single_text">{item.todoo}</span>
      )}

      <div>
       
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(item.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
