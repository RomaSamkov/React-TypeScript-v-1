import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id} with {todo.title}
    </div>
  );
};

export default TodoItem;
