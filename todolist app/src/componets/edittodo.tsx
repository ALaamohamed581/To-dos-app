import { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import TodoItem from "./todoItem";

function EditTodo({ item, todosList, setTodoList }: any) {
  const [udpatedTodo, setUpdatedtotd] = useState(item);
  useEffect(() => {
    setUpdatedtotd(item);
  }, [item]);
  function updaate(e: FormEvent<HTMLInputElement>) {
    setUpdatedtotd({
      ...udpatedTodo,
      todo: (e.target as HTMLInputElement).value,
    });
  }
  const updateInput = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const dupdatedTodos = todosList.map((todo) => {
      return todo.id === item.id ? { ...todo, todo: udpatedTodo.todo } : todo;
    });
    console.log(udpatedTodo);
    setTodoList(dupdatedTodos);
  };
  return (
    <div className=" flex flex-col gap-6 align-center justify-center w-3/4 mx-auto max-w-3/4  bg-slate-100  items-center h-36 -translate-y-1/2 rounded-2xl shadow-lg">
      <div>
        <form
          onSubmit={updateInput}
          action=""
          className="flex flex-col gap-6 align-center justify-center "
        >
          <input
            type="text"
            name="Todo"
            value={udpatedTodo.todo || ""}
            placeholder="Add New Taks?"
            onChange={(e) => updaate(e)}
            className=" placeholder-gray-600   text-sm  w-5xl p-1  border-b-2 border-b-purple-700  bg-transparent  outline-none   text-slate-500   "
          />

          <Button className="bg-orange-600 text-2xl max-w-25 mx-auto">
            saveTodo
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditTodo;

// import { FormEvent, useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import TodoItem from "./todoItem";

// interface EditTodoProps {
//   item: TodoItem;
//   todosList: TodoItem[];
//   setTodoList: (todos: TodoItem[]) => void;
// }

// function EditTodo({ item, todosList, setTodoList }: EditTodoProps) {
//   const [updatedTodo, setUpdatedTodo] = useState<TodoItem>(item);

//   useEffect(() => {
//     setUpdatedTodo(item);
//   }, [item]);

//   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//     setUpdatedTodo({
//       ...updatedTodo,
//       todo: (e.target as HTMLInputElement).value,
//     });
//   };

//   const updateTodo = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const updatedTodos = todosList.map((todo) =>
//       todo.id === item.id ? { ...todo, todo: updatedTodo.todo } : todo
//     );
//     setTodoList(updatedTodos);
//   };

//   return (
//     <div className="flex flex-col gap-6 align-center justify-center w-3/4 mx-auto max-w-3/4 bg-slate-100 items-center h-36 -translate-y-1/2 rounded-2xl shadow-lg">
//       <div>
//         <form
//           onSubmit={updateTodo}
//           className="flex flex-col gap-6 align-center justify-center"
//         >
//           <input
//             type="text"
//             name="Todo"
//             value={updatedTodo.todo || ""}
//             placeholder="Add New Task?"
//             onChange={handleInputChange}
//             className="placeholder-gray-600 text-sm w-5xl p-1 border-b-2 border-b-purple-700 bg-transparent outline-none text-slate-500"
//           />
//           <Button className="bg-orange-600 text-2xl max-w-25 mx-auto">
//             Save Todo
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditTodo;
