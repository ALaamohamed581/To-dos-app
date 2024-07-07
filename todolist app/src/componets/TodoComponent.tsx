import { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
// we can define the type in a model to be used multuble time insted of of reapting the code here
type TodoItem = {
  id?: number;
  userId?: number;
  completed?: boolean;
  todo?: string;
};

const TodoComponent = ({ AddTodod }) => {
  const [newTodo, setNewTodo] = useState({} as TodoItem);

  function setNewItem(e: FormEvent) {
    setNewTodo({
      id: Math.round(Math.random() * 100),
      userId: Math.round(Math.random() * 100),
      completed: false,
      todo: (e.target as HTMLInputElement).value,
    });
  }
  async function handelTodos(e: FormEvent) {
    e.preventDefault();
    AddTodod(newTodo);
    setNewTodo({ todo: "" });
  }
  useEffect(() => {}, [newTodo]);
  return (
    <div className=" flex flex-col gap-6 align-center justify-center w-3/4 mx-auto max-w-3/4  bg-slate-100  items-center h-36 -translate-y-1/2 rounded-2xl shadow-lg">
      <div>
        <form
          onSubmit={(e) => handelTodos(e)}
          action=""
          className="flex flex-col gap-6 align-center justify-center "
        >
          <input
            type="text"
            name="Todo"
            value={newTodo?.todo}
            onChange={(e) => setNewItem(e)}
            placeholder="Add New Taks?"
            className=" placeholder-gray-600   text-sm  w-5xl p-1  border-b-2 border-b-purple-700  bg-transparent  outline-none   text-slate-500   "
          />

          <Button className="bg-orange-600 text-2xl max-w-25 mx-auto">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TodoComponent;