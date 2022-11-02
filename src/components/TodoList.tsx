import React from "react";
import { Todo } from "../types";
import "./styles.css";
import SingleTodo from "./SingleTodo";

interface ITodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
